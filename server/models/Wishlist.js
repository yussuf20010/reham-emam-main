const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
  WishListID: { type: String, required: true, unique: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  AddedDate: { type: Date, default: Date.now },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing WishListID
wishListSchema.pre('save', async function (next) {
  try {
    // Auto-increment WishListID if not set (for new documents)
    if (!this.WishListID) {
      this.WishListID = await this.constructor.getNewID('WishListID');
    }

    // Other pre-save logic for the WishList schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (WishListID)
wishListSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;
