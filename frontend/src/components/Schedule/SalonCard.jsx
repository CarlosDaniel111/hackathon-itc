import salonImg from '../../assets/salon.jpeg'

export const SalonCard = ({ isSelectedSome }) => {

  return (
    <>
      <div className="max-w-sm p-4 m-4 bg-white rounded shadow">
        <img
          src={salonImg}
          alt="Salon"
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-semibold">Nombre del Salón</h3>
        <p className="text-gray-600">Descripción del salón.</p>
        <p className="text-gray-600">Capacidad: 100 personas</p>
        <p className="text-gray-600">Precio: $500</p>
        {
          isSelectedSome ? (
            <p className="text-green-500">Seleccionado</p>
          ) :
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Seleccionar
            </button>
        }

      </div>
    </>
  )
}
