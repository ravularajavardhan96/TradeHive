const { Schema } = require('mongoose');

/**
 * OrderSchema — represents a single BUY or SELL trade placed by a user.
 * Tracks execution price, quantity, order status, and timestamp
 * to support portfolio P&L calculation and trade history audit.
 */
const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  qty: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
  price: {
    type: Number,
    required: true,
    min: [0.01, 'Price must be positive'],
  },
  mode: {
    type: String,
    required: true,
    enum: ['BUY', 'SELL'],
  },
  // Links order to a specific user for per-user portfolio isolation
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  // Allows future support for LIMIT / STOP orders
  status: {
    type: String,
    enum: ['EXECUTED', 'PENDING', 'CANCELLED'],
    default: 'EXECUTED',
  },
  // Auto-recorded execution time for trade history
  executedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { OrderSchema };
