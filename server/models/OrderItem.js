const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  OrderItemID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  Quantity: { type: Number, required: true },
  Subtotal: { type: Number },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing OrderItemID
orderItemSchema.pre('save', async function (next) {
  try {
    // Auto-increment OrderItemID if not set (for new documents)
    if (!this.OrderItemID) {
      this.OrderItemID = await this.constructor.getNewID('OrderItemID');
    }

    // Other pre-save logic for the OrderItem schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (OrderItemID)
orderItemSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;
