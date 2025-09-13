import { connectToDatabase } from "@/utils/mongodb";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { db } = await connectToDatabase();
  const { method } = req;

  if (method === "GET") {
    // Traer solo las notas del usuario
    const notas = await db
      .collection("notes")
      .find({ creador: decoded.username })
      .toArray();
    return res.status(200).json(notas);
  }

  if (method === "POST") {
    const { contenido } = req.body;
    const nuevaNota = {
      contenido,
      creador: decoded.username,
      rol: decoded.rol || "user",
      createdAt: new Date(),
    };
    await db.collection("notes").insertOne(nuevaNota); // <-- guardamos en notes
    return res.status(201).json(nuevaNota);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
