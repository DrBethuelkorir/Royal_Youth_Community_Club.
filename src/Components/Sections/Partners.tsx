// ./Pages/Home/components/Partners.tsx
import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'Tech4Youth', icon: '💻' },
    { name: 'YEDF', icon: '🏦' },
    { name: 'Community Bank', icon: '🏛️' },
    { name: 'Youth Enterprise', icon: '📈' },
    { name: 'Education Trust', icon: '📚' },
    { name: 'Health Initiative', icon: '🏥' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl block mb-2">{partner.icon}</span>
              <p className="text-sm font-medium text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;