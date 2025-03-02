import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // For local authentication (optional if using OAuth)
    googleId: { type: String, unique: true, sparse: true }, // Google OAuth ID
    image: { type: String }, // Profile picture URL from Google
    role: { type: String, default: "user", enum: ["user", "admin"] },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
