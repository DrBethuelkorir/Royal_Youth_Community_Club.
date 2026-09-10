// ./Pages/Home/components/CTA.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join{' '}
            <span className="text-white">THE ROYAL YOUTH COMMUNITY</span>
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
            Be part of a growing community dedicated to youth empowerment, 
            financial growth, and community development across Kenya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#members"
              className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;