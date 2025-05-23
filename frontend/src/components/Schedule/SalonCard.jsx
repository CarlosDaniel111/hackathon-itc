import salonImg from '../../assets/salon.jpeg'

export const SalonCard = ({ salonName, salonDescription, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-sm p-4 m-4 rounded shadow transition border cursor-pointer
        ${selected ? 'bg-gray-100 border-black shadow-lg' : 'bg-white border-gray-200 shadow-sm'}`}
    >
      <img
        src={salonImg}
        alt="Salon"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{salonName}</h3>
      <p className="text-gray-600">{salonDescription}</p>
      <p className="text-gray-600">Capacidad: 100 personas</p>
      <p className="text-gray-600">Precio: $500</p>
    </div>
  );
};