// Configuración del entorno
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Función auxiliar para manejar las peticiones HTTP
const fetchWithError = async (url, options) => {
  try {
    console.log('Fetching:', url, options); // Para debug
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Error en la petición');
    }

    return data;
  } catch (error) {
    console.error('Error en la petición:', error); // Para debug
    if (error.message === 'Failed to fetch') {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

// Configuración común para las peticiones
const defaultHeaders = {
  'Content-Type': 'application/json'
};

export const authApi = {
  // Login
  login: async (email, password) => {
    const data = await fetchWithError(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({ email, password })
    });

    // Guardar datos del usuario en localStorage
    if (data.user) {
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  },

  // Registro
  register: async (userData) => {
    return await fetchWithError(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(userData)
    });
  },

  // Logout
  logout: async () => {
    localStorage.removeItem('user');
    return await fetchWithError(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: defaultHeaders
    });
  },

  // Verificar si hay un usuario autenticado
  isAuthenticated: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Obtener el tipo de usuario (admin, staff, user)
  getUserType: () => {
    const user = auth.isAuthenticated();
    return user ? user.type : null;
  }
};
