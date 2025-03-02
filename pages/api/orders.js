import dbConnect from "../../lib/dbConnect";
import Order from "../../models/Order";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "POST") {
    try {
      const newOrder = await Order.create({ userId: session.user.id, products: req.body.products });
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: "Error creating order" });
    }
  }
}