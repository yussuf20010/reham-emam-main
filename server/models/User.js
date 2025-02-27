const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  UserID: { type: Number, unique: true },
  Username: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  FirstName: { type: String },
  LastName: { type: String },
  Address: { type: String },
  Phone: { type: String },
  Photo: { type: String }, // Store image data as Buffer and content type as String
  BrandID: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }, // Reference to Brand model
},
  {
    timestamps: true, // Add timestamps to the schema
  });

// Hash the password before saving
userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('Password')) {
      this.Password = await bcrypt.hash(this.Password, saltRounds);
    }

    // Check if UserID is not set (i.e., for new documents)
    if (!this.UserID) {
      // Find the highest existing UserID and increment by 1
      const highestUser = await this.constructor.findOne({}, { UserID: 1 }, { sort: { UserID: -1 } });
      this.UserID = highestUser ? highestUser.UserID + 1 : 1;
    }

    next();
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];
      throw new Error(`Duplicate key error: ${field} '${value}' already exists.`);
    } else {
      throw error;
    }
  }
});

// Compare passwords during login
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.Password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
