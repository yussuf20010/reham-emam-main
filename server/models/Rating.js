const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  RatingID: { type: String, required: true, unique: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  RatingValue: { type: Number, required: true },
  Review: { type: String },
  Date: { type: Date, default: Date.now },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing RatingID
ratingSchema.pre('save', async function (next) {
  try {
    // Auto-increment RatingID if not set (for new documents)
    if (!this.RatingID) {
      this.RatingID = await this.constructor.getNewID('RatingID');
    }

    // Other pre-save logic for the Rating schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (RatingID)
ratingSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
