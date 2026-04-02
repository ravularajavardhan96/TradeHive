# TradeHive 🐝

A full-stack stock trading platform for retail investors — built with the MERN stack.

---

## The Problem It Solves

Most retail investors in India track their portfolio across multiple apps or spreadsheets. There's no single place that shows you — in real time — what you've invested, what it's worth today, and how much you've made or lost. TradeHive brings that all together: a live watchlist, a holdings tracker, a positions view, and a P&L summary, all in one dashboard.

---

## Features

- **Buy & Sell orders** — place market orders from the watchlist with one click
- **Holdings tracker** — see your average buy price, current price, and live P&L per stock
- **Portfolio summary** — total invested, current value, and overall return computed from real data (not hardcoded)
- **Order history** — every trade logged with timestamp and execution status
- **Positions view** — track intraday positions separately from long-term holdings
- **JWT authentication** — secure login with bcrypt-hashed passwords and httpOnly cookies
- **Watchlist** — 9 NSE stocks with live price and day change percentage

---

## How It Works

When you place a BUY order, the backend:
1. Saves the order to MongoDB with a timestamp and status
2. Checks if you already hold that stock
3. If yes — recalculates your average buy price using weighted average (the correct way brokers do it)
4. If no — creates a new holding at that price

When you SELL, it checks you actually have enough shares before executing — no overselling.

The portfolio summary endpoint adds up all your holdings server-side and returns total invested, current value, P&L, and percentage return in one call.

---

## Tech Stack

- **Frontend** — React, React Router
- **Dashboard** — React, Chart.js, Material UI
- **Backend** — Node.js, Express
- **Database** — MongoDB Atlas
- **Auth** — JWT + bcrypt
- **Deployed on** — Netlify (frontend + dashboard), Render (backend)

---

## Project Structure

```
TradeHive/
├── frontend/     → Landing page (home, pricing, signup, login)
├── dashboard/    → Trading dashboard (watchlist, holdings, orders, P&L)
└── backend/      → REST API (auth, orders, holdings, portfolio summary)
```

---

## API Endpoints

| Method | Route | What it does |
|--------|-------|-------------|
| POST | `/signup` | Register a new user |
| POST | `/login` | Login and get JWT |
| POST | `/verify` | Verify JWT token |
| GET | `/getHoldings` | All current holdings |
| GET | `/getPositions` | All open positions |
| GET | `/getOrders` | Full order history, newest first |
| GET | `/getPortfolioSummary` | Aggregate P&L across all holdings |
| POST | `/newOrder` | Place a BUY or SELL order |

---

## Running Locally

**Backend**
```bash
cd backend
npm install
# create a .env file with:
# MONGO_URL=your_mongodb_uri
# TOKEN_KEY=your_jwt_secret
npm start
```

**Frontend**
```bash
cd frontend
npm install
npm start
```

**Dashboard**
```bash
cd dashboard
npm install
npm start
```

---

## Pushing to GitHub

```bash
git add .
git commit -m "your message here"
git push origin main
```

That's it. Netlify and Render are connected to `main` — they'll pick up the changes and redeploy automatically.

