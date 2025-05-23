import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { MyFooter } from "../components/MyFooter";
import { EventList } from "../components/MyEvents/EventList";

export const MyEventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock data con información completa
    const mockEvents = [
      {
        id: 1,
        salon_id: 101,
        start_time: "2025-05-25T15:00:00",
        end_time: "2025-05-25T19:00:00",
        total_price: 2500,
        created_at: "2025-05-23T10:30:00",
        event_type: "wedding",
        customizations: [
          {
            id: 1,
            type: "music",
            description: "DJ profesional con equipo completo",
            price: 500
          },
          {
            id: 2,
            type: "decoration",
            description: "Decoración floral premium",
            price: 300
          }
        ],
        inventory: [
          {
            id: 1,
            item_name: "table",
            quantity_used: 15
          },
          {
            id: 2,
            item_name: "chair",
            quantity_used: 150
          },
          {
            id: 3,
            item_name: "tablecloth",
            quantity_used: 15
          }
        ],
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
        ]
      },
      {
        id: 2,
        salon_id: 102,
        start_time: "2025-06-01T14:00:00",
        end_time: "2025-06-01T18:00:00",
        total_price: 3000,
        created_at: "2025-05-23T11:45:00",
        event_type: "corporate",
        customizations: [
          {
            id: 3,
            type: "meal",
            description: "Servicio de catering ejecutivo",
            price: 800
          }
        ],
        inventory: [
          {
            id: 4,
            item_name: "table",
            quantity_used: 20
          },
          {
            id: 5,
            item_name: "chair",
            quantity_used: 200
          }
        ],
        employees: [
          {
            id: 3,
            first_name: "Carlos",
            last_name: "Rodríguez",
            position: "Técnico Audiovisual"
          }
        ]
      }
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Mis Eventos</h1>
          <EventList events={events} />
        </div>
      </div>
      <MyFooter />
    </>
  );
};