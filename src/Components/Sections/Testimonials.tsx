// ./Pages/Home/components/Testimonials.tsx
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  zone: string;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      role: 'Zone Leader',
      zone: 'Nairobi Zone',
      text: 'The platform has transformed how we manage our zone operations. From tracking contributions to coordinating events, everything is now centralized and transparent.',
      rating: 5
    },
    {
      id: 2,
      name: 'James Ochieng',
      role: 'Member',
      zone: 'Kisumu Zone',
      text: 'Financial transparency has built so much trust among members. I can see budgets, expenses, and track my own contributions easily.',
      rating: 5
    },
    {
      id: 3,
      name: 'Grace Akinyi',
      role: 'Cabinet Secretary',
      zone: 'Mombasa Zone',
      text: 'Managing community records used to be a nightmare. Now I can access minutes, reports, and member data instantly.',
      rating: 4
    },
    {
      id: 4,
      name: 'Peter Njoroge',
      role: 'Youth Mentor',
      zone: 'Nakuru Zone',
      text: 'The event coordination tools have significantly increased our meeting attendance. Our engagement has never been better!',
      rating: 5
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Member Voices
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-yellow-600">Members Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from THE ROYAL YOUTH COMMUNITY members
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 relative">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-600">
                  {current.name.charAt(0)}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{current.name}</h3>
                  <span className="text-sm text-gray-500">{current.role}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{current.zone}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < current.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{current.text}"</p>
                
                {/* Navigation */}
                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={handlePrev}
                    className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-yellow-600" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-yellow-500 w-4' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-yellow-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;