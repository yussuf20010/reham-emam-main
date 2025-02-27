const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  PaymentID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  PaymentMethod: { type: String },
  CardNumber: { type: String },
  ExpiryDate: { type: String },
  CVV: { type: String },
  Amount: { type: Number },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing PaymentID
paymentSchema.pre('save', async function (next) {
  try {
    // Auto-increment PaymentID if not set (for new documents)
    if (!this.PaymentID) {
      this.PaymentID = await this.constructor.getNewID('PaymentID');
    }

    // Other pre-save logic for the Payment schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (PaymentID)
paymentSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
