import { Calendar } from 'lucide-react';

interface HeroProps {
  onViewCaseStudies: () => void;
}

export default function Hero({ onViewCaseStudies }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
            We Generate{' '}
            <span className="text-blue-600">Qualified Appointments</span>{' '}
            With Your Ideal Clients.
            <span className="block mt-4 text-gray-900">
              You Just Close.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered outreach that fills your calendar with ready-to-buy prospects. Show up, close deals, grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <Calendar size={24} />
              See If You Qualify
            </button>
            <button
              onClick={onViewCaseStudies}
              className="border-2 border-gray-300 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all hover:scale-105"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
