import salonImg from '../../assets/salon.jpeg'

export const SalonCard = ({ salonName, salonDescription, salonPrice, salonLocation, salonCapacity, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-sm p-4 m-4 rounded shadow transition border cursor-pointer transition-all duration-200
        ${selected ? 'bg-gray-100 border-black shadow-lg scale-[1.02]' : 'bg-white border-gray-200 shadow'}`}
    >
      <img
        src={salonImg}
        alt={`Imagen de ${salonName}`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-800">{salonName}</h3>
        <p className="text-gray-600">{salonDescription}</p>
        <p className="text-gray-600"><strong>Ubicación:</strong> {salonLocation}</p>
        <p className="text-gray-600"><strong>Capacidad:</strong> {salonCapacity} personas</p>
        <p className="text-gray-800 font-medium"><strong>Precio:</strong> ${salonPrice} por hora</p>
      </div>
    </div>
  );
};