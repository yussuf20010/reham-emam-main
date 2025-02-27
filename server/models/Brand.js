const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  BrandID: { type: Number, unique: true },
  BrandName: { type: String, required: true },
  Description: { type: String },
  Logo: { type: String },
  Location: { type: String },
  RoleID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRole', required: true },
},
{
  timestamps: true, // Add timestamps to the schema
});

// Assuming you have a brandSchema for the Brand model
brandSchema.pre('save', async function (next) {
  try {
    // Auto-increment BrandID if not set (for new documents)
    if (!this.BrandID) {
      this.BrandID = await this.constructor.getNewID('BrandID');
    }

    // Other pre-save logic for the Brand schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (BrandID)
brandSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
