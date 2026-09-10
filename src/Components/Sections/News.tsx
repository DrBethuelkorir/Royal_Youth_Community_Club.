// ./Pages/Home/components/News.tsx
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      tag: 'Product',
      title: 'New AI Features Released',
      excerpt: 'We\'ve added 10 new AI-powered features to boost productivity.',
      date: 'March 10, 2026',
      readTime: '3 min read'
    },
    {
      id: 2,
      tag: 'Company',
      title: 'Series B Funding Announced',
      excerpt: 'We raised $50M to accelerate growth and expand globally.',
      date: 'March 5, 2026',
      readTime: '5 min read'
    },
    {
      id: 3,
      tag: 'Community',
      title: 'Developer Conference 2026',
      excerpt: 'Join us at the biggest developer event of the year.',
      date: 'Feb 28, 2026',
      readTime: '2 min read'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📰 Latest News
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community{' '}
            <span className="text-yellow-600">Updates</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay informed about the latest happenings in the community
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center gap-1">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;