export const PackageCard = ({ nombre, descripcion, precio, image, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full max-w-4xl mx-auto cursor-pointer bg-white rounded-xl overflow-hidden flex mb-4 transition-shadow border
        ${selected ? 'border-black shadow-xl' : 'border-gray-200 shadow-sm'}`}
    >
      <div className="w-1/3">
        <img
          src={image}
          alt="Imagen del paquete"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Contenido */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{nombre}</h2>
          <p className="text-gray-600 mb-4">{descripcion}</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-black">${precio}</p>
        </div>
      </div>
    </div>
  );
}