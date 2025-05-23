import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { MyFooter } from "../components/MyFooter";
import { StaffEventCard } from "../components/Staff/StaffEventCard";
import { StaffEventDetails } from "../components/Staff/StaffEventDetails";

export const StaffPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Mock data - reemplazar con llamada a API real
    const mockEvents = [
      {
        id: 1,
        salon_id: 101,
        event_type: "wedding",
        start_time: "2025-05-23T15:00:00",
        end_time: "2025-05-23T19:00:00",
        employees: [
          {
            id: 1,
            first_name: "Juan",
            last_name: "Pérez",
            position: "Coordinador de Eventos"
          },
          {
            id: 2,
            first_name: "María",
            last_name: "González",
            position: "Chef Principal"
          }
        ],
        inventory: [
          {
            id: 1,
            item_name: "Mesas",
            quantity_used: 15
          },
          {
            id: 2,
            item_name: "Sillas",
            quantity_used: 150
          }
        ]
      },
      {
        id: 2,
        salon_id: 102,
        event_type: "corporate",
        start_time: "2025-05-24T10:00:00",
        end_time: "2025-05-24T16:00:00",
        employees: [
          {
            id: 1,
            first_name: "Juan",
            last_name: "Pérez",
            position: "Coordinador de Eventos"
          }
        ],
        inventory: [
          {
            id: 3,
            item_name: "Proyector",
            quantity_used: 1
          },
          {
            id: 4,
            item_name: "Micrófonos",
            quantity_used: 2
          }
        ]
      },
      {
        id: 3,
        salon_id: 103,
        event_type: "birthday",
        start_time: "2025-05-22T18:00:00",
        end_time: "2025-05-22T22:00:00",
        employees: [
          {
            id: 1,
            first_name: "Juan",
            last_name: "Pérez",
            position: "Coordinador de Eventos"
          }
        ],
        inventory: [
          {
            id: 5,
            item_name: "Mesas",
            quantity_used: 8
          },
          {
            id: 6,
            item_name: "Sillas",
            quantity_used: 80
          }
        ]
      }
    ];

    // Ordenar eventos por fecha
    const sortedEvents = mockEvents.sort((a, b) => 
      new Date(a.start_time) - new Date(b.start_time)
    );
    
    setEvents(sortedEvents);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Mi Itinerario</h1>
          
          {/* Eventos del día */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Eventos de Hoy</h2>
            {events
              .filter(event => {
                const eventDate = new Date(event.start_time);
                const today = new Date();
                return eventDate.toDateString() === today.toDateString();
              })
              .map(event => (
                <StaffEventCard
                  key={event.id}
                  event={event}
                  onEventClick={handleEventClick}
                />
              ))}
          </div>

          {/* Próximos eventos */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Próximos Eventos</h2>
            {events
              .filter(event => {
                const eventDate = new Date(event.start_time);
                const today = new Date();
                return eventDate > today;
              })
              .map(event => (
                <StaffEventCard
                  key={event.id}
                  event={event}
                  onEventClick={handleEventClick}
                />
              ))}
          </div>
        </div>
      </div>
      
      {selectedEvent && (
        <StaffEventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
      
      <MyFooter />
    </>
  );
};
