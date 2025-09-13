import { connectToDatabase } from "@/lib/mongodb";

import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";


export default async function handler(req, res) {
  const { method } = req;

  // Obtener token
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No autorizado" });
  
  const token = authHeader.split(" ")[1];
  let user;
  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }

  // Solo admin puede editar o borrar
  if ((method === "PUT" || method === "DELETE") && user.role !== "admin") {
    return res.status(403).json({ message: "No autorizado" });
  }

  const { db } = await connectToDatabase();
  const { id } = req.query;

  if (method === "PUT") {
    const { contenido } = req.body;
    const result = await db.collection("notes").updateOne(
      { _id: new ObjectId(id) },
      { $set: { contenido } }
    );
    return res.status(200).json(result);
  }

  if (method === "DELETE") {
    const result = await db.collection("notes").deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json(result);
  }

  res.status(405).json({ message: "Método no permitido" });
}
