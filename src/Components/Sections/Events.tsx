// ./Pages/Home/components/Events.tsx
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  status: 'upcoming' | 'ongoing' | 'past';
  attendees: number;
}

const Events: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'upcoming' | 'ongoing' | 'past'>('upcoming');

  const events: Event[] = [
    {
      id: 1,
      title: 'Monthly Zone Leaders Meeting',
      date: 'March 20, 2026',
      time: '10:00 AM',
      venue: 'Royal Community Center, Nairobi',
      type: 'Meeting',
      status: 'upcoming',
      attendees: 24
    },
    {
      id: 2,
      title: 'Youth Empowerment Workshop',
      date: 'March 25, 2026',
      time: '8:30 AM',
      venue: 'KICC Conference Hall',
      type: 'Workshop',
      status: 'upcoming',
      attendees: 145
    },
    {
      id: 3,
      title: 'Annual Community Anniversaries',
      date: 'April 5, 2026',
      time: '2:00 PM',
      venue: 'Nairobi National Park',
      type: 'Anniversary',
      status: 'upcoming',
      attendees: 320
    },
    {
      id: 4,
      title: 'Community Cleanup Drive',
      date: 'Today',
      time: '7:00 AM',
      venue: 'Various Zones',
      type: 'Community',
      status: 'ongoing',
      attendees: 87
    },
    {
      id: 5,
      title: 'Financial Literacy Training',
      date: 'February 28, 2026',
      time: '9:00 AM',
      venue: 'Royal Training Center',
      type: 'Training',
      status: 'past',
      attendees: 78
    }
  ];

  const filteredEvents = selectedStatus === 'all' 
    ? events 
    : events.filter(e => e.status === selectedStatus);

  const getStatusColor = (status: string) => {
    const colors = {
      upcoming: 'bg-yellow-100 text-yellow-700',
      ongoing: 'bg-green-100 text-green-700',
      past: 'bg-gray-100 text-gray-700'
    };
    return colors[status as keyof typeof colors] || colors.upcoming;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📅 Community Calendar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming{' '}
            <span className="text-yellow-600">Events</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay connected and engaged with community events across all zones
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(['all', 'upcoming', 'ongoing', 'past'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedStatus === status
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                {event.status !== 'past' && (
                  <button className="mt-4 w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;