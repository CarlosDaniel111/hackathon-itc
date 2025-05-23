
import { PackageCard } from './PackageCard'
import { useState } from 'react';

export const PackageList = () => {
  const [packageSelected, setPackageSelected] = useState(null);
  return (
    <div className="flex flex-wrap justify-center">
      {
        Array.from({ length: 10 }).map((_, i) => (
          <div className="w-full" key={i}>
            <PackageCard
              nombre={`Paquete ${i + 1}`}
              descripcion={`Descripción del paquete ${i + 1}`}
              precio={`${(i + 1) * 1000}`}
              selected={packageSelected === i}
              onClick={() => setPackageSelected(i)}
            />
          </div>
        ))
      }
    </div>
  )
}
