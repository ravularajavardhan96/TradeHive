require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const { SignUp, Login } = require("./Controllers/AuthController");
const { userVerification } = require('./Middlewares/AuthMiddleware');
const Holding = require('./models/holdingModel');
const Position = require('./models/positionModel');
const Order = require("./models/OrderModel");

const app = express();
const uri = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors({
  origin: ["https://frontend-zerodha.netlify.app", "https://dashboard-zerodhaclone.netlify.app"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Auth Routes
app.post("/signup", SignUp);
app.post("/login", Login);

// Auth-Protected Route
app.post("/verify", userVerification, (req, res) => {
  res.json({
    status: true,
    user: {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username
    }
  });
});

// Holdings API
app.get("/getHoldings", async (req, res) => {
  try {
    const result = await Holding.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

// Positions API
app.get("/getPositions", async (req, res) => {
  try {
    const result = await Position.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

// Orders API — returns full trade history sorted by most recent
app.get("/getOrders", async (req, res) => {
  try {
    const result = await Order.find({}).sort({ executedAt: -1 });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

/**
 * Portfolio P&L Summary API
 * Aggregates all holdings to compute:
 *   - Total invested capital
 *   - Current market value
 *   - Absolute and percentage P&L
 * Helps users track overall portfolio performance at a glance.
 */
app.get("/getPortfolioSummary", async (req, res) => {
  try {
    const holdings = await Holding.find({});

    let totalInvested = 0;
    let totalCurrentValue = 0;

    holdings.forEach((h) => {
      totalInvested += h.avg * h.qty;
      totalCurrentValue += h.price * h.qty;
    });

    const totalPnL = totalCurrentValue - totalInvested;
    const pnlPercent = totalInvested > 0
      ? ((totalPnL / totalInvested) * 100).toFixed(2)
      : "0.00";

    res.json({
      totalInvested: totalInvested.toFixed(2),
      totalCurrentValue: totalCurrentValue.toFixed(2),
      totalPnL: totalPnL.toFixed(2),
      pnlPercent: `${pnlPercent}%`,
      holdingsCount: holdings.length,
    });
  } catch (err) {
    console.error("Error in /getPortfolioSummary:", err.message);
    res.status(500).json({ message: "Failed to compute portfolio summary" });
  }
});

/**
 * New Order API (BUY / SELL)
 * - Validates all fields before executing
 * - On BUY: creates or updates holding with weighted average price
 * - On SELL: reduces holding quantity; deletes if fully exited
 * - Records every trade in Order history for audit and analytics
 */
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Input validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ message: "Stock symbol is required" });
    }
    if (!qty || isNaN(qty) || qty <= 0) {
      return res.status(400).json({ message: "Quantity must be a positive number" });
    }
    if (!price || isNaN(price) || price <= 0) {
      return res.status(400).json({ message: "Price must be a positive number" });
    }
    if (!['BUY', 'SELL'].includes(mode)) {
      return res.status(400).json({ message: "Mode must be BUY or SELL" });
    }

    const stockSymbol = name.trim().toUpperCase();

    // Persist the trade record
    const order = new Order({
      name: stockSymbol,
      qty: Number(qty),
      price: Number(price),
      mode,
      status: 'EXECUTED',
      executedAt: new Date(),
    });
    await order.save();

    let holding = await Holding.findOne({ name: stockSymbol });

    if (mode === "BUY") {
      if (holding) {
        // Weighted average price recalculation on top-up
        const totalQty = holding.qty + Number(qty);
        const totalCost = (holding.avg * holding.qty) + (Number(price) * Number(qty));
        holding.avg = totalCost / totalQty;
        holding.qty = totalQty;
        holding.price = Number(price);
      } else {
        holding = new Holding({
          name: stockSymbol,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
          net: "+0.00%",
          day: "+0.00%",
        });
      }
      await holding.save();
    } else if (mode === "SELL") {
      if (!holding || holding.qty < Number(qty)) {
        return res.status(400).json({ message: "Insufficient holdings to complete this sell order" });
      }

      holding.qty -= Number(qty);

      if (holding.qty === 0) {
        await Holding.deleteOne({ name: stockSymbol });
      } else {
        holding.price = Number(price);
        await holding.save();
      }
    }

    res.status(201).json({ message: "Order executed successfully", orderId: order._id });
  } catch (err) {
    console.error("Error in /newOrder:", err.message);
    res.status(500).json({ message: "Internal server error. Please try again." });
  }
});
