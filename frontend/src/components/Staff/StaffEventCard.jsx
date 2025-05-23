import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const StaffEventCard = ({ event, onEventClick }) => {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM 'de' yyyy 'a las' HH:mm", { locale: es });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onEventClick(event)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Salón #{event.salon_id}
          </h2>
          <p className="text-gray-600">
            Inicio: {formatDateTime(event.start_time)}
          </p>
          <p className="text-gray-600">
            Fin: {formatDateTime(event.end_time)}
          </p>
        </div>
        <div className="text-right">
          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
            new Date(event.start_time) > new Date() 
              ? 'bg-blue-100 text-blue-800' 
              : new Date(event.end_time) < new Date()
                ? 'bg-gray-100 text-gray-800'
                : 'bg-green-100 text-green-800'
          }`}>
            {new Date(event.start_time) > new Date() 
              ? 'Próximo' 
              : new Date(event.end_time) < new Date()
                ? 'Completado'
                : 'En curso'}
          </span>
        </div>
      </div>
    </div>
  );
};
