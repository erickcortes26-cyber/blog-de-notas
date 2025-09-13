import dbConnect from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    // Intentamos conectar a MongoDB
    await dbConnect();
    res.status(200).json({ message: "Conexión exitosa a MongoDB 🎉" });
  } catch (err) {
    // Si hay error, lo mostramos
    res.status(500).json({ error: "Error al conectar con MongoDB", details: err.message });
  }
}
