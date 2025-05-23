import { useState } from 'react';
import { EventCard } from './EventCard';
import { EventDetails } from './EventDetails';

export const EventList = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      {events.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No tienes eventos programados.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onEventClick={handleEventClick}
            />
          ))}
        </div>
      )}

      {selectedEvent && (
        <EventDetails 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
};
