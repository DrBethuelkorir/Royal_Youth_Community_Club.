// ./Pages/Home/components/Hero.tsx
import React from 'react';
import { ArrowRight, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Active Members' },
    { icon: Award, value: '25+', label: 'Projects Completed' },
    { icon: BookOpen, value: '100+', label: 'Library Resources' },
    { icon: TrendingUp, value: 'KSH 2M+', label: 'Funds Raised' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-yellow-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              👑 THE ROYAL YOUTH COMMUNITY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Youth,
              <br />
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Transforming Futures
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A growing self-help community organized into zones, dedicated to youth empowerment, 
              financial growth, and community development across Kenya.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#members"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors"
              >
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors"
              >
                Learn More
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Transparent
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Accountable
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Youth-Led
              </span>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <stat.icon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
            {/* Royal Crown Image Placeholder */}
            <div className="col-span-2 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-8 flex items-center justify-center min-h-[120px]">
              <div className="text-center">
                <span className="text-6xl">👑</span>
                <p className="text-sm text-gray-600 mt-2">Royal Youth Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;