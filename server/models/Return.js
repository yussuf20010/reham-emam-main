const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
  ReturnID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  ReturnReason: { type: String },
  ReturnDate: { type: Date },
  Status: { type: String },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing ReturnID
returnSchema.pre('save', async function (next) {
  try {
    // Auto-increment ReturnID if not set (for new documents)
    if (!this.ReturnID) {
      this.ReturnID = await this.constructor.getNewID('ReturnID');
    }

    // Other pre-save logic for the Return schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (ReturnID)
returnSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const Return = mongoose.model('Return', returnSchema);

module.exports = Return;
