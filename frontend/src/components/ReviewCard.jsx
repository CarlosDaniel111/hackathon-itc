export const ReviewCard = () => {
  return (

    <div className="max-w-sm p-4 m-4 bg-white rounded shadow">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Nombre del Usuario</h3>
          <p className="text-gray-600">Fecha de la Reseña</p>
        </div>
      </div>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex items-center mt-4">
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
      </div>
    </div>

  )
}
