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
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From onboarding to appointments - here's exactly what happens when you work with us
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>

            {phases.map((phase, index) => (
              <div key={index} className="relative mb-10 lg:mb-12">
                <div className={`grid lg:grid-cols-2 gap-6 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <phase.icon className="text-blue-600" size={28} />
                        <span className="text-blue-600 font-bold text-base">{phase.phase}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                      <ul className={`space-y-2 mb-5 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 bg-blue-600 rounded-full ${index % 2 === 0 ? 'lg:order-2' : ''}`}></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`bg-blue-50 rounded-lg p-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <p className="text-xs font-semibold text-gray-700 mb-1">Deliverable:</p>
                        <p className="text-blue-600 font-semibold text-sm">{phase.deliverable}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex justify-center items-center lg:col-start-1 lg:row-start-1" style={{gridRow: 1}}>
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-xl z-10">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-blue-600 text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your goals and create a custom plan
            </p>
            <button
              onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
              className="bg-white text-blue-600 px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Calendar size={20} />
              Book Your Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
