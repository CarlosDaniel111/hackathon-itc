import { NavBar } from "../components/NavBar"
import { ReviewCard } from "../components/ReviewCard"
import { MyFooter } from "../components/MyFooter"
import salonImage from "../assets/salonimg.jpeg"
import { Link } from 'react-router-dom';
import fondo from "../assets/fondo.jpg"

export const HomePage = () => {
  const reviews = [
    {
      id: 1,
      name: "Juan Pérez",
      review: "El mejor servicio de eventos que he utilizado. Todo salió perfecto.",
      rating: 5
    },
    {
      id: 2,
      name: "María López",
      review: "La decoración fue espectacular y la comida deliciosa. ¡Recomendado!",
      rating: 4
    },
    {
      id: 3,
      name: "Carlos García",
      review: "Un evento inolvidable, gracias a Eventhink. ¡Volveré a contratar sus servicios!",
      rating: 5
    },
    {
      id: 4,
      name: "Ana Martínez",
      review: "El equipo de Eventhink se encargó de todo. Muy profesionales.",
      rating: 4
    },
    {
      id: 5,
      name: "Luis Fernández",
      review: "La atención al cliente fue excepcional. ¡Gracias Eventhink!",
      rating: 5
    }
  ]
  return (
    <>
      <NavBar />
      <div
        className="relative flex flex-col items-center justify-center text-center px-4"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        {/* Imagen de fondo con degradado oscuro */}
        <div className="absolute inset-0">
          <img
            src={fondo} // Reemplaza con tu imagen real
            alt="Fondo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-white/10" />
        </div>

        {/* Contenido encima */}
        <div className="z-10 max-w-2xl text-white drop-shadow-xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Bienvenido a <span className="text-black-400">Eventhink</span>
          </h1>
          <p className="text-lg sm:text-xl mb-10">
            Hacemos realidad tus eventos soñados con estilo, pasión y detalle.
          </p>
          <button className="px-8 py-3 bg-black-400 text-black text-lg rounded-full shadow hover:bg-yellow-300 transition duration-300">
            Comenzar
          </button>
        </div>
      </div>


      {/* Listado de reseña */}
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Reseñas</h2>
        <p className="text-lg text-gray-700 mb-8">Experiencias de nuestros usuarios.</p>
        <div className="flex flex-wrap justify-center">
          {reviews.map((review) => (
            <div key={review.id} className="w-full max-w-sm p-4 m-4 bg-white rounded shadow">
              <ReviewCard
                name={review.name}
                review={review.review}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <MyFooter />

    </>
  )
}
