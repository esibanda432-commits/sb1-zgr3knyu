import { Calendar } from 'lucide-react';

interface HeroProps {
  onViewCaseStudies: () => void;
}

export default function Hero({ onViewCaseStudies }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            We Fill Your Pipeline.{' '}
            <span className="text-blue-600">You Close the Deals.</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered outreach that fills your calendar with ready-to-buy prospects. Show up, close deals, grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              See If You Qualify
            </button>
            <button
              onClick={onViewCaseStudies}
              className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 hover:border-gray-400 transition-all hover:scale-105"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
