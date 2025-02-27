const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  ShippingID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  ShippingDate: { type: Date },
  DeliveryDate: { type: Date },
  TrackingNumber: { type: String },
  Status: { type: String },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing ShippingID
shippingSchema.pre('save', async function (next) {
  try {
    // Auto-increment ShippingID if not set (for new documents)
    if (!this.ShippingID) {
      this.ShippingID = await this.constructor.getNewID('ShippingID');
    }

    // Other pre-save logic for the Shipping schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (ShippingID)
shippingSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Shipping = mongoose.model('Shipping', shippingSchema);

module.exports = Shipping;
