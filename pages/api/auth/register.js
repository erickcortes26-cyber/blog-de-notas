import { connectToDatabase } from "../../../lib/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Datos recibidos:", req.body); // Para depurar
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    try {
      const { db } = await connectToDatabase();

      const existingUser = await db.collection("Users").findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Usuario ya existe" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await db.collection("Users").insertOne({
        name,
        email,
        password: hashedPassword,
        role: "user",
      });

      return res.status(201).json({ message: "Usuario registrado exitosamente 🎉" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error del servidor" });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido" });
  }
}

