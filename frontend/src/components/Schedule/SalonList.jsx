import { SalonCard } from "./SalonCard"
import { useEffect, useState } from "react"
import axios from "axios"
export const SalonList = ({ salonList, salonSelected, setSalonSelected }) => {



  return (
    <div className="flex flex-wrap justify-center">
      {
        salonList.map((salon) => (
          <div className="" key={salon.id}>
            <SalonCard
              salonName={salon.name}
              salonDescription={salon.description}
              salonPrice={salon.price}
              salonLocation={salon.location}
              salonCapacity={salon.capacity}
              selected={salonSelected === salon.id}
              onClick={() => {
                setSalonSelected(salon.id)
                console.log(`Salon ${salon.name} seleccionado`)
              }}
            />
          </div>
        ))
      }

    </div>
  )
}
