"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [notas, setNotas] = useState([]);
  const [contenido, setContenido] = useState("");
  const [editando, setEditando] = useState(null);
  const [token, setToken] = useState("");
  const [rol, setRol] = useState("user"); 

  
  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      window.location.href = "/login";
      return;
    }
    setToken(t);
    cargarNotas(t);


    try {
      const payload = JSON.parse(atob(t.split(".")[1]));
      setRol(payload.role || "user");
    } catch (e) {
      setRol("user");
    }
  }, []);

 
  async function cargarNotas(tok) {
    const res = await fetch("/api/notes", {
      headers: { Authorization: `Bearer ${tok}` },
    });
    const data = await res.json();
    setNotas(data);
  }

  
  async function crearNota() {
    if (!contenido.trim()) return;
    await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ contenido }),
    });
    setContenido("");
    cargarNotas(token);
  }

  
  async function guardarEdicion(id) {
    if (rol !== "admin") return;
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ contenido }),
    });
    setEditando(null);
    setContenido("");
    cargarNotas(token);
  }

  
  async function eliminarNota(id) {
    if (rol !== "admin") return;
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    cargarNotas(token);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-full p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">📓 Mis Notas</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Crear nota */}
          <div className="bg-white rounded-2xl p-6 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {editando ? "Editar Nota" : "Nueva Nota"}
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Escribe tu nota aquí..."
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {editando ? (
                <div className="flex gap-2">
                  {rol === "admin" && (
                    <button
                      onClick={() => guardarEdicion(editando)}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Guardar
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setEditando(null);
                      setContenido("");
                    }}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <button
                  onClick={crearNota}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  disabled={!contenido.trim()}
                >
                  Agregar
                </button>
              )}
            </div>
          </div>

          {/* Listado de notas */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Tus Notas
            </h2>
            {notas.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
                <p className="text-gray-600 text-lg">
                  No tienes notas aún. ¡Crea tu primera nota!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notas.map((nota) => (
                  <div
                    key={nota._id}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
                  >
                    <p className="text-gray-700 mb-4">{nota.contenido}</p>
                    <div className="flex justify-end space-x-2">
                      {rol === "admin" && (
                        <>
                          <button
                            onClick={() => {
                              setEditando(nota._id);
                              setContenido(nota.contenido);
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => {
                              if (
                                window.confirm(
                                  "¿Seguro quieres eliminar?"
                                )
                              )
                                eliminarNota(nota._id);
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
