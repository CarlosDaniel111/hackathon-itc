import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authApi } from '../api/authApi';

export const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(authApi.isAuthenticated());
    // Escuchar cambios en localStorage (por si se hace logout en otra pestaña)
    const onStorage = () => setUser(authApi.isAuthenticated());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = async () => {
    await authApi.logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-xl font-bold">Eventhink</div>

      <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <a href="#" className="text-gray-700 hover:text-black transition">Inicio</a>
        <a href="#" className="text-gray-700 hover:text-black transition">Servicios</a>
        <a href="#" className="text-gray-700 hover:text-black transition">Contacto</a>
      </div>

      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <button className="px-4 py-2 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 transition">
              <Link to="/login">
                Iniciar sesión
              </Link>
            </button>
            <button className="px-4 py-2 text-sm text-white bg-black rounded hover:bg-gray-800 transition">
              <Link to="/signup">
                Registrarse
              </Link>
            </button>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-semibold">
              {user.first_name ? `${user.first_name} ${user.last_name}` : user.email}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-700 transition"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
