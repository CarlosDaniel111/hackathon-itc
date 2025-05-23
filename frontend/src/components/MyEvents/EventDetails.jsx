import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const EventDetails = ({ event, onClose }) => {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM 'de' yyyy 'a las' HH:mm", { locale: es });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/90 backdrop-blur rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">Detalles del Evento</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Información básica */}
          <section className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Información General</h3>
            <p>Salón: #{event.salon_id}</p>
            <p>Tipo de Evento: {event.event_type === 'wedding' ? 'Boda' : 
                              event.event_type === 'corporate' ? 'Corporativo' : 
                              event.event_type === 'birthday' ? 'Cumpleaños' : 'Otro'}</p>
            <p>Inicio: {formatDateTime(event.start_time)}</p>
            <p>Fin: {formatDateTime(event.end_time)}</p>
            <p>Precio Total: ${event.total_price}</p>
            <p className="text-sm text-gray-500">Reservado el {formatDateTime(event.created_at)}</p>
          </section>

          {/* Personalizaciones */}
          {event.customizations && event.customizations.length > 0 && (
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Personalizaciones</h3>
              <div className="space-y-2">
                {event.customizations.map((custom) => (
                  <div key={custom.id} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium">{custom.type}</p>
                    <p className="text-gray-600">{custom.description}</p>
                    <p className="text-gray-700">${custom.price}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Inventario */}
          {event.inventory && event.inventory.length > 0 && (
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Inventario Utilizado</h3>
              <div className="grid grid-cols-2 gap-4">
                {event.inventory.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium">{item.item_name}</p>
                    <p>Cantidad: {item.quantity_used}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Empleados asignados */}
          {event.employees && event.employees.length > 0 && (
            <section>
              <h3 className="font-semibold text-lg mb-2">Personal Asignado</h3>
              <div className="grid grid-cols-2 gap-4">
                {event.employees.map((employee) => (
                  <div key={employee.id} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium">{employee.first_name} {employee.last_name}</p>
                    <p className="text-gray-600">{employee.position}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
