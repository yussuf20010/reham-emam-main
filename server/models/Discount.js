const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  DiscountID: { type: String, required: true, unique: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  DiscountPercentage: { type: Number, required: true },
  StartDate: { type: Date },
  EndDate: { type: Date },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing DiscountID
discountSchema.pre('save', async function (next) {
  try {
    // Auto-increment DiscountID if not set (for new documents)
    if (!this.DiscountID) {
      this.DiscountID = await this.constructor.getNewID('DiscountID');
    }

    // Other pre-save logic for the Discount schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (DiscountID)
discountSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
