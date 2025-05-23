import userLogo from '../assets/userLogo.png';
export const ReviewCard = ({ name, review, rating }) => {
  const renderStars = () => {
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded shadow">
      <div className="flex items-center mb-4">
        <img
          src={userLogo}
          alt={`Avatar de ${name}`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">Hace poco</p> {/* Puedes cambiarlo por una fecha real si la agregas como prop */}
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
      <div className="flex items-center mt-3 text-yellow-500 text-lg">
        <span>{renderStars()}</span>
      </div>
    </div>
  )
}
