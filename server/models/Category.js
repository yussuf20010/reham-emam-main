const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  CategoryID: { type: Number, unique: true },
  CategoryName: { type: String, required: true },
}, {
  timestamps: true,
});

// Assuming you have a categorySchema for the Category model
categorySchema.pre('save', async function (next) {
  try {
    // Auto-increment CategoryID if not set (for new documents)
    if (this.isNew && !this.CategoryID) {
      this.CategoryID = await this.constructor.getNewID('CategoryID');
    }

    // Other pre-save logic for the Category schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (CategoryID)
categorySchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
