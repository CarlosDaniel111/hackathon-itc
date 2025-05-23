import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const EventCard = ({ event, onEventClick }) => {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM 'de' yyyy 'a las' HH:mm", { locale: es });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onEventClick(event)}
    >
      <h2 className="text-xl font-semibold mb-2">
        Reserva en Salón #{event.salon_id}
      </h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          Inicio: {formatDateTime(event.start_time)}
        </p>
        <p className="text-gray-600">
          Fin: {formatDateTime(event.end_time)}
        </p>
        <p className="text-lg font-medium mt-2">
          Precio Total: ${event.total_price}
        </p>
        <p className="text-sm text-gray-500">
          Reservado el {formatDateTime(event.created_at)}
        </p>
      </div>
    </div>
  );
};