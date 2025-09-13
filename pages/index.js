import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-full p-5 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Blog de Notas Compartido</h1>
          <p className="mt-2 text-blue-100">Para la clase de seguridad informática</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl mb-10 transform transition-transform duration-300 hover:scale-[1.01]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Bienvenido al Blog de Notas Colaborativo
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Se me ocurrió esta idea para compartir las notas que todos hagamos en la clase de 
              seguridad informática. Si alguien no entendió algún tema, puede venir a leer las notas 
              de los compañeros. Me encantaría que la clase no quede en una simple videollamada.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">¿Cómo funciona?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-blue-700">1. Regístrate</h3>
                  <p className="text-gray-600 text-sm mt-1">Crea tu cuenta en segundos</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="bg-green-100 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-green-700">2. Colabora</h3>
                  <p className="text-gray-600 text-sm mt-1">Comparte tus notas con la clase</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-700">3. Aprende</h3>
                  <p className="text-gray-600 text-sm mt-1">Consulta las notas de tus compañeros</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              <Link
                href="/register"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Crear Cuenta
              </Link>
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Iniciar Sesión
              </Link>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Comparte conocimiento</h3>
              <p className="text-gray-600">Todos aprendemos de manera diferente. Lo que para ti es claro, para otro puede ser confuso, y viceversa.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Refuerza lo aprendido</h3>
              <p className="text-gray-600">Al escribir y compartir tus notas, estás reforzando tu propio aprendizaje y ayudando a otros.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 text-center">
        <div className="container mx-auto">
          <p className="text-blue-100">© {new Date().getFullYear()} Blog de Notas - Seguridad Informática</p>
          <p className="text-blue-200 text-sm mt-2">Construyendo conocimiento colaborativo</p>
        </div>
      </footer>
    </div>
  );
}

