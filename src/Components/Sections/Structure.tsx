// ./Pages/Home/components/Structure.tsx
import React, { useState } from 'react';
import { Users, MapPin, Crown } from 'lucide-react';

interface CabinetMember {
  id: number;
  name: string;
  role: string;
  zone: string;
}

interface Zone {
  id: number;
  name: string;
  leader: string;
  members: number;
  location: string;
}

const Structure: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cabinet' | 'zones'>('cabinet');

  const cabinet: CabinetMember[] = [
    { id: 1, name: 'David Kiprop', role: 'Cabinet Secretary', zone: 'Headquarters' },
    { id: 2, name: 'Grace Akinyi', role: 'Deputy Cabinet Secretary', zone: 'Mombasa Zone' },
    { id: 3, name: 'Michael Odhiambo', role: 'Secretary - Finance', zone: 'Kisumu Zone' },
    { id: 4, name: 'Sarah Wanjiru', role: 'Secretary - Events', zone: 'Nairobi Zone' },
    { id: 5, name: 'Peter Njoroge', role: 'Secretary - Communications', zone: 'Nakuru Zone' },
    { id: 6, name: 'Faith Wanjiru', role: 'Secretary - Membership', zone: 'Eldoret Zone' },
  ];

  const zones: Zone[] = [
    { id: 1, name: 'Nairobi Zone', leader: 'Sarah Wanjiru', members: 85, location: 'Nairobi County' },
    { id: 2, name: 'Kisumu Zone', leader: 'Michael Odhiambo', members: 62, location: 'Kisumu County' },
    { id: 3, name: 'Mombasa Zone', leader: 'Grace Akinyi', members: 54, location: 'Mombasa County' },
    { id: 4, name: 'Nakuru Zone', leader: 'Peter Njoroge', members: 48, location: 'Nakuru County' },
    { id: 5, name: 'Eldoret Zone', leader: 'Faith Wanjiru', members: 41, location: 'Uasin Gishu County' },
    { id: 6, name: 'Turkana Zone', leader: 'James Ochieng', members: 32, location: 'Turkana County' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="structure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏗️ Our Structure
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community{' '}
            <span className="text-yellow-600">Organization</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the leadership, zones, and governance framework that powers the community
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('cabinet')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'cabinet'
                ? 'bg-yellow-500 text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Crown className="inline h-4 w-4 mr-2" />
            Cabinet
          </button>
          <button
            onClick={() => setActiveTab('zones')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'zones'
                ? 'bg-yellow-500 text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <MapPin className="inline h-4 w-4 mr-2" />
            Zones
          </button>
        </div>

        {/* Cabinet Content */}
        {activeTab === 'cabinet' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabinet.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-600 mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-yellow-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-500">{member.zone}</p>
              </div>
            ))}
          </div>
        )}

        {/* Zones Content */}
        {activeTab === 'zones' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <MapPin className="h-8 w-8 text-yellow-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{zone.name}</h3>
                <p className="text-sm text-gray-600">Leader: {zone.leader}</p>
                <p className="text-sm text-gray-500">{zone.location}</p>
                <div className="mt-4 flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{zone.members} Members</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Structure;