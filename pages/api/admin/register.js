import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, password } = req.body;

  try {
    const { db } = await connectToDatabase();

 
    const existingAdmin = await db.collection("Admins").findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "El administrador ya existe" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    await db.collection("Admins").insertOne({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    res.status(201).json({ message: "Administrador registrado con éxito 🎉" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
}
