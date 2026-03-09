import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import { Target, Zap, BarChart, Shield, Calendar } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const scrollToCaseStudies = () => {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Target,
      title: 'Laser-Focused Targeting',
      description: 'We identify and reach decision-makers at companies that perfectly match your ICP, ensuring every conversation counts.'
    },
    {
      icon: Zap,
      title: 'Multi-Channel Outreach',
      description: 'Strategic campaigns across email, LinkedIn, and ads to engage prospects where they are most active.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Optimization',
      description: 'Continuous testing and refinement to improve response rates and appointment quality month over month.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Every appointment is pre-qualified. We only book meetings with prospects who have genuine interest and budget.'
    }
  ];

  return (
    <div className="pt-20">
      <Hero onViewCaseStudies={scrollToCaseStudies} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in B2B appointment generation for growing businesses,
              with a proven track record of filling sales calendars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Is This The Right Fit For You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with businesses ready to scale their sales through qualified appointments
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Not A Good Fit If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold">✕</span>
                    <span className="text-gray-700">You want to do the outreach yourself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold">✕</span>
                    <span className="text-gray-700">Your ACV is under $5,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold">✕</span>
                    <span className="text-gray-700">You need results in the next 2 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold">✕</span>
                    <span className="text-gray-700">You sell to consumers (B2C)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold">✕</span>
                    <span className="text-gray-700">Your ICP is unclear or too broad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Perfect Fit If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span className="text-gray-700">You sell B2B services or software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span className="text-gray-700">Your ACV is $10,000 or more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span className="text-gray-700">You have a proven offer that converts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span className="text-gray-700">You can handle 20+ appointments per month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span className="text-gray-700">You want to scale predictably</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3"
              >
                <Calendar size={24} />
                See If We're A Match
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Pipeline?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let us fill your calendar with qualified appointments while you focus on closing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book a Strategy Call
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
