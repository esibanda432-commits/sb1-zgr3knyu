import { Calendar } from 'lucide-react';

interface HeroProps {
  onViewCaseStudies: () => void;
}

export default function Hero({ onViewCaseStudies }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            We Generate Qualified Appointments With Your Ideal Clients.
            <span className="block mt-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              You Just Close.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered advertising that fills your calendar with ready-to-buy prospects. Show up, close deals, grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              <Calendar size={24} />
              Book a Call
            </button>
            <button
              onClick={onViewCaseStudies}
              className="border-2 border-gray-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-800 hover:border-gray-500 transition-all hover:scale-105"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
