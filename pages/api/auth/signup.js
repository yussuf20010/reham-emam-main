import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email, password, googleId, image } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash password only if it's provided (for local auth)
      const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

      // Create user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        googleId,
        image,
      });

      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
