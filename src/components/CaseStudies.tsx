import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const caseStudies = [
  {
    company: 'CloudScale Technologies',
    director: 'Sarah Mitchell',
    role: 'VP of Sales',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'Renvra Group transformed our outbound strategy. We went from 10 monthly appointments to over 40 qualified meetings with enterprise clients.',
    industry: 'Cloud Infrastructure'
  },
  {
    company: 'DataStream Analytics',
    director: 'Marcus Chen',
    role: 'CEO & Founder',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The quality of leads we receive is exceptional. Every appointment is with a decision-maker who actually needs our solution.',
    industry: 'Data Analytics'
  },
  {
    company: 'SecureAuth Solutions',
    director: 'Jennifer Rodriguez',
    role: 'Head of Growth',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'Best investment we made this year. Our sales team is now focused on closing deals instead of prospecting.',
    industry: 'Cybersecurity'
  },
  {
    company: 'NeuralNet AI',
    director: 'David Park',
    role: 'Chief Revenue Officer',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'Renvra Group helped us break into Fortune 500 accounts we could never reach before. Game changer for our business.',
    industry: 'AI & Machine Learning'
  },
  {
    company: 'FinTech Innovations',
    director: 'Amanda Foster',
    role: 'VP of Business Development',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The ROI is incredible. We closed 3 major deals in the first 2 months, each worth over $100K annually.',
    industry: 'Financial Technology'
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are scaling with qualified appointments
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <div className="flex items-start gap-6 mb-8">
              <img
                src={currentStudy.photo}
                alt={currentStudy.director}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentStudy.company}</h3>
                <p className="text-gray-600 mb-2">{currentStudy.industry}</p>
                <p className="font-semibold text-gray-900">{currentStudy.director}</p>
                <p className="text-sm text-gray-500">{currentStudy.role}</p>
              </div>
            </div>

            <blockquote className="text-xl text-gray-700 leading-relaxed mb-8">
              "{currentStudy.testimonial}"
            </blockquote>

            <div className="flex items-center justify-between">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>

              <div className="flex gap-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3"
          >
            <Calendar size={24} />
            Get Similar Results
          </button>
        </div>
      </div>
    </section>
  );
}
