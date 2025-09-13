"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setMessage(data.message);
      
      // Si el registro fue exitoso, redirigir al login de admin después de 2 segundos
      if (res.ok) {
        setTimeout(() => {
          router.push("/admin/login");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error en la solicitud");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Crear Cuenta Admin</h1>
          <button
            onClick={() => router.push("/admin")} // Cambiado para redirigir al index de admin
            className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Volver al panel de admin"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </button>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
            <input 
              id="name"
              type="text" 
              placeholder="Tu nombre completo" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input 
              id="email"
              type="email" 
              placeholder="tu.correo@ejemplo.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input 
              id="password"
              type="password" 
              placeholder="Crea una contraseña segura" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Crear Cuenta Admin
          </button>
        </form>
        
        {message && (
          <div className={`mt-4 p-3 rounded-lg border ${message.includes("éxito") || message.includes("exit") ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}`}>
            {message}
          </div>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta admin?{" "}
            <button 
              onClick={() => router.push("/admin/login")}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Inicia sesión aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}