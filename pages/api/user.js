import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    try {
      const user = await User.findOne({ email: session.user.email }).select("-password");
      if (!user) return res.status(404).json({ error: "User not found" });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  }

  if (req.method === "PUT") {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email: session.user.email },
        req.body,
        { new: true, runValidators: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Error updating user" });
    }
  }

  res.setHeader("Allow", ["GET", "PUT"]);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
