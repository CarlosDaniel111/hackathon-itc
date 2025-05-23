import { SalonCard } from "./SalonCard"
import { useState } from "react"
export const SalonList = () => {
  const [salonSelected, setSalonSelected] = useState(null)

  return (
    <div className="flex flex-wrap justify-center">
      {
        Array.from({ length: 10 }).map((_, i) => (
          <SalonCard
            key={i}
            salonName={`Salon ${i + 1}`}
            salonDescription={`Descripción del salón ${i + 1}`}
            selected={salonSelected === i}
            onClick={() => {
              setSalonSelected(i)
              console.log(`Salon ${i + 1} seleccionado`)
            }}
          />
        ))
      }

    </div>
  )
}
