import { Calendar, Zap, BarChart, Shield, Headphones, Rocket } from 'lucide-react';

export default function Process() {
  const phases = [
    {
      phase: 'Week 1',
      title: 'Onboarding & Strategy',
      icon: Rocket,
      activities: [
        'Kick-off call with your team',
        'ICP workshop and definition',
        'Competitor analysis',
        'Messaging framework development',
        'Campaign strategy creation'
      ],
      deliverable: 'Complete campaign strategy document'
    },
    {
      phase: 'Week 2',
      title: 'Setup & Launch',
      icon: Zap,
      activities: [
        'Prospect list building (500+ contacts)',
        'Email infrastructure setup',
        'Campaign sequences creation',
        'Ad campaigns launch',
        'CRM integration'
      ],
      deliverable: 'Live campaigns reaching your ICP'
    },
    {
      phase: 'Week 3-4',
      title: 'Optimization',
      icon: BarChart,
      activities: [
        'Monitor campaign performance',
        'A/B test subject lines and copy',
        'Refine targeting parameters',
        'Adjust sending schedules',
        'Scale winning campaigns'
      ],
      deliverable: 'Optimized campaigns with improving metrics'
    },
    {
      phase: 'Ongoing',
      title: 'Appointment Generation',
      icon: Calendar,
      activities: [
        'Continuous prospect engagement',
        'Qualify interested leads',
        'Schedule appointments',
        'Provide meeting briefs',
        'Weekly performance reports'
      ],
      deliverable: 'Steady flow of qualified appointments'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Full Transparency',
      description: 'Access to all campaigns, metrics, and prospect interactions in real-time'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Your account manager is available via Slack for any questions or adjustments'
    },
    {
      icon: BarChart,
      title: 'Weekly Reporting',
      description: 'Detailed analytics on campaign performance and ROI tracking'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From onboarding to appointments - here's exactly what happens when you work with us
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>

            {phases.map((phase, index) => (
              <div key={index} className="relative mb-12 lg:mb-16">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <phase.icon className="text-blue-600" size={32} />
                        <span className="text-blue-600 font-bold text-lg">{phase.phase}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                      <ul className={`space-y-2 mb-6 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center gap-2">
                            <span className={`w-2 h-2 bg-blue-600 rounded-full ${index % 2 === 0 ? 'lg:order-2' : ''}`}></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`bg-blue-50 rounded-lg p-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Deliverable:</p>
                        <p className="text-blue-600 font-semibold">{phase.deliverable}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex justify-center items-center lg:col-start-1 lg:row-start-1" style={{gridRow: 1}}>
                    <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-xl z-10">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your goals and create a custom plan
            </p>
            <button
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Calendar size={24} />
              Book Your Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
