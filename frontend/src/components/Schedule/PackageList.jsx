
import { PackageCard } from './PackageCard'
import decoracionImg1 from "../../assets/decoracionImg1.jpg"
import decoracionImg2 from "../../assets/decoracionImg2.jpg"
import decoracionImg3 from "../../assets/decoracionImg3.jpeg"
import decoracionImg4 from "../../assets/decoracionImg4.jpeg"
import decoracionImg5 from "../../assets/decoracionImg5.jpg"


export const PackageList = ({ packageSelected, setPackageSelected }) => {

  const packages = [
    {
      id: 1,
      nombre: 'Paquete Elegancia',
      descripcion: 'Comida gourmet de 3 tiempos, grupo de música instrumental en vivo y decoración elegante blanca y dorada.',
      precio: '7,500 MXN',
      img: decoracionImg1
    },
    {
      id: 2,
      nombre: 'Paquete Fiesta',
      descripcion: 'Comida buffet, DJ en vivo y decoración temática personalizada.',
      precio: '10,000 MXN',
      img: decoracionImg2
    },
    {
      id: 3,
      nombre: 'Paquete Premium',
      descripcion: 'Comida gourmet de 5 tiempos, grupo de música en vivo y decoración personalizada.',
      precio: '15,000 MXN',
      img: decoracionImg3
    },
    {
      id: 4,
      nombre: 'Paquete Básico',
      descripcion: 'Comida buffet, decoración básica y música ambiental.',
      precio: '5,000 MXN',
      img: decoracionImg4
    },
    {
      id: 5,
      nombre: 'Paquete Corporativo',
      descripcion: 'Comida buffet, proyector y pantalla, decoración corporativa.',
      precio: '12,000 MXN',
      img: decoracionImg5
    }
  ]

  return (
    <div className="flex flex-wrap justify-center">
      {packages.map((pkg) => (
        <div className="w-full" key={pkg.id}>
          <PackageCard
            nombre={pkg.nombre}
            descripcion={pkg.descripcion}
            precio={pkg.precio}
            image={pkg.img}
            selected={packageSelected === pkg.id}
            onClick={() => setPackageSelected(pkg.id)}
          />
        </div>
      ))}
    </div>
  )
}
