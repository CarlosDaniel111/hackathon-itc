import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authApi } from "../api/authApi";

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await authApi.login(form.email, form.password);
      setLoading(false);
      // Si el backend retorna un mensaje de éxito
      if (res && res.message) {
        // Puedes mostrar un alert o redirigir directamente
        // alert(res.message);
      }
      // Redirigir según el tipo de usuario si lo tienes
      // Por ahora, redirige al home
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Iniciar sesión</h1>
        <FaUser className="text-6xl text-gray-700 mx-auto mt-10 mb-10" />
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="flex flex-col">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">¿No tienes una cuenta? <Link to="/signup" className="hover:text-gray-700">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
}