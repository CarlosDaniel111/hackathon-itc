export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-xl font-bold">Eventhink</div>

      <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <a href="#" className="text-gray-700 hover:text-black transition">Inicio</a>
        <a href="#" className="text-gray-700 hover:text-black transition">Servicios</a>
        <a href="#" className="text-gray-700 hover:text-black transition">Contacto</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 transition">
          Iniciar sesión
        </button>
        <button className="px-4 py-2 text-sm text-white bg-black rounded hover:bg-gray-800 transition">
          Registrarse
        </button>
      </div>
    </nav>
  )
}
