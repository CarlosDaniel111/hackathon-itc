import { NavBar } from "../components/NavBar"
import { ReviewCard } from "../components/ReviewCard"
import { MyFooter } from "../components/MyFooter"
import salonImage from "../assets/salonimg.jpeg"

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="relative flex flex-col items-center justify-center bg-gray-100" style={{ height: 'calc(100vh - 60px)' }}>
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Eventhink</h1>
        <p className="text-lg text-gray-700 mb-8">Hacemos realidad tus eventos soñados.</p>
        <button className="px-6 py-3 text-sm text-white bg-black rounded hover:bg-gray-800 transition">
          Comenzar
        </button>
      </div>
      {/* Imagen que cubre todo el ancho con img */}
      <div className="w-full h-126">
        <img src={salonImage} alt="Salon" className="object-cover w-full h-full" />
      </div>

      {/* Listado de reseña */}
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Reseñas</h2>
        <p className="text-lg text-gray-700 mb-8">Experiencias de nuestros usuarios.</p>
        <div className="flex flex-wrap justify-center">
          {/* Aquí puedes agregar las reseñas */}
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      {/* Footer */}
      <MyFooter />

    </>
  )
}
