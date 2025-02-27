const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductID: { type: mongoose.Schema.Types.ObjectId, required: true },
  BrandID: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  CategoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  ProductName: { type: String, required: true },
  Description: { type: String },
  Price: { type: Number, required: true },
  StockQuantity: { type: Number, required: true },
  Image: { type: String }, // Assuming Image is a URL or file path
},
{
  timestamps: true, // Add timestamps to the schema
});

// Assuming you have a productSchema for the Product model
productSchema.pre('save', async function (next) {
  try {
    // Auto-increment ProductID if not set (for new documents)
    if (!this.ProductID) {
      this.ProductID = await this.constructor.getNewID('ProductID');
    }

    // Other pre-save logic for the Product schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (ProductID)
productSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
