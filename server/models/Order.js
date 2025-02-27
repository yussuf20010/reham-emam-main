const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  OrderID: { type: String, required: true, unique: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  OrderDate: { type: Date, default: Date.now },
  Status: { type: String },
  TotalAmount: { type: Number },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing OrderID
orderSchema.pre('save', async function (next) {
  try {
    // Auto-increment OrderID if not set (for new documents)
    if (!this.OrderID) {
      this.OrderID = await this.constructor.getNewID('OrderID');
    }

    // Other pre-save logic for the Order schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (OrderID)
orderSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
