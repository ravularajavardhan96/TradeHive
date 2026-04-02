const { Schema } = require('mongoose');

/**
 * holdingSchema — represents a long-term equity position held by a user.
 * Tracks average buy price, current price, and net return
 * to compute real-time P&L across a user's portfolio.
 */
const holdingSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  qty: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be positive'],
  },
  avg: {
    type: Number,
    required: true,
    min: [0, 'Average price cannot be negative'],
  },
  price: {
    type: Number,
    required: true,
  },
  net: {
    type: String,
    default: '+0.00%',
  },
  day: {
    type: String,
    default: '+0.00%',
  },
  isLoss: {
    type: Boolean,
    default: false,
  },
  // Sector tag for portfolio diversification analysis
  sector: {
    type: String,
    default: 'Unknown',
  },
  // Optional price alert threshold for the user
  alertThreshold: {
    type: Number,
    default: null,
  },
});

module.exports = { holdingSchema };
