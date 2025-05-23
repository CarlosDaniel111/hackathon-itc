import { NavBar } from "../components/NavBar"

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Eventhink</h1>
        <p className="text-lg text-gray-700 mb-8">Hacemos realidad tus eventos soñados.</p>
        <button className="px-6 py-3 text-sm text-white bg-black rounded hover:bg-gray-800 transition">
          Comenzar
        </button>
      </div>
    </>
  )
}
