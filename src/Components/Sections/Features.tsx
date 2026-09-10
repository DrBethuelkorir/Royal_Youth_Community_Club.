// ./Pages/Home/components/Features.tsx
import React from 'react';
import { 
  Shield, Users, CreditCard, FileText, Calendar, 
  MessageSquare, ShoppingBag, FolderOpen, Image, 
  Book, Package, Settings 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Governance',
      description: 'Constitution, policies, and strategic partnerships',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Membership',
      description: 'Registration, ID generation, and directory',
      color: 'text-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Finance',
      description: 'Budget, contributions, loans, and expenses',
      color: 'text-green-600'
    },
    {
      icon: FileText,
      title: 'Records',
      description: 'Meeting minutes, reports, and vision',
      color: 'text-yellow-600'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Calendar, coordination, and registration',
      color: 'text-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Email, social media, and announcements',
      color: 'text-teal-600'
    },
    {
      icon: ShoppingBag,
      title: 'Store',
      description: 'Merchandise ordering and payments',
      color: 'text-orange-500'
    },
    {
      icon: FolderOpen,
      title: 'Projects',
      description: 'Showcase, tracking, and partnerships',
      color: 'text-indigo-600'
    },
    {
      icon: Image,
      title: 'Media',
      description: 'Gallery, albums, and magazine',
      color: 'text-pink-500'
    },
    {
      icon: Book,
      title: 'Library',
      description: 'Self-help books and educational materials',
      color: 'text-blue-600'
    },
    {
      icon: Package,
      title: 'Assets',
      description: 'Property tracking and inventory',
      color: 'text-emerald-600'
    },
    {
      icon: Settings,
      title: 'Digital Platform',
      description: 'Centralized operations and reporting',
      color: 'text-gray-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚡ Platform Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in{' '}
            <span className="text-yellow-600">One Platform</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the comprehensive features designed to empower THE ROYAL YOUTH COMMUNITY
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;