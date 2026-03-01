import { Calendar } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Deep Customer Research',
      description: 'Before launching any campaigns, we build a complete profile of your ideal customer. This includes identifying your Ideal Customer Profile, understanding their pain points, and mapping out what makes them take action.',
      data: {
        type: 'profile',
        title: 'Ideal Customer Profile',
        items: [
          { label: 'Industry', value: 'Service-Based Business' },
          { label: 'Company Size', value: '$10M+ / Year' },
          { label: 'Job Titles', value: 'CEO, Founder' }
        ]
      }
    },
    {
      number: '2',
      title: 'Generate consistent, qualified leads',
      description: 'We launch high-converting email outreach campaigns designed to attract your ideal clients. Our AI continuously tests and optimizes messaging, timing, and targeting to maximize results.',
      data: {
        type: 'metrics',
        title: 'Monthly Report',
        items: [
          { label: 'New Leads', value: '174' },
          { label: 'Meetings', value: '89' },
          { label: 'Closed', value: '50' },
          { label: 'Follow-ups', value: '78' }
        ]
      }
    },
    {
      number: '3',
      title: 'Only qualified prospects reach you',
      description: 'Every lead goes through a multi-step qualification process. We use AI-powered forms that adapt based on responses, filtering out time-wasters before they ever reach your calendar.',
      data: {
        type: 'funnel',
        title: 'Lead Qualification Funnel',
        items: [
          { label: 'Email Clicks', value: 1000, percentage: 100 },
          { label: 'Form Starts', value: 480, percentage: 48 },
          { label: 'Qualified', value: 156, percentage: 32.5 },
          { label: 'Ready to Book', value: 45, percentage: 28.8 }
        ],
        stats: [
          '95% Time-wasters filtered',
          '4.5% Conversion rate'
        ]
      }
    },
    {
      number: '4',
      title: 'Fast, intelligent lead engagement',
      description: 'The moment a lead submits, our AI scores their intent and our team reaches out within minutes, not hours. We handle all the follow-up, nurturing, and appointment booking.',
      data: {
        type: 'scoring',
        title: 'AI Intent Scoring',
        items: [
          { label: 'Budget fit', score: 92 },
          { label: 'Timeline', score: 85 },
          { label: 'Authority', score: 88 },
          { label: 'Need', score: 94 }
        ],
        stats: [
          'Lead Score: 89/100',
          'Response: Under 2 min'
        ]
      }
    },
    {
      number: '5',
      title: 'Quality improves every week',
      description: 'We track every lead through your sales process. Our AI learns from your closed deals to find more people with identical characteristics, improving lead quality week over week.',
      data: {
        type: 'growth',
        title: 'Lead Quality Over Time',
        items: [
          { week: 'W1', value: 65 },
          { week: 'W4', value: 78 },
          { week: 'W8', value: 89 },
          { week: 'W12', value: 94 }
        ],
        improvement: '+40% Quality Improvement'
      }
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step system that fills your calendar with qualified appointments
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="text-sm font-semibold text-gray-500 mb-6">{step.data.title}</div>

                  {step.data.type === 'profile' && (
                    <div className="space-y-4">
                      {step.data.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                          <span className="text-gray-600 font-medium">{item.label}:</span>
                          <span className="text-gray-900 font-semibold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.data.type === 'metrics' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {step.data.items.map((item, i) => (
                        <div key={i} className="text-center">
                          <div className="text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
                          <div className="text-sm text-gray-600">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.data.type === 'funnel' && (
                    <div>
                      <div className="space-y-3 mb-6">
                        {step.data.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="flex-1">
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                <span className="text-sm font-bold text-gray-900">{item.value.toLocaleString()}</span>
                              </div>
                              <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                                <div
                                  className="bg-blue-600 h-full transition-all duration-500"
                                  style={{ width: `${item.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6 text-sm font-medium text-gray-600">
                        {step.data.stats.map((stat, i) => (
                          <div key={i}>{stat}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.data.type === 'scoring' && (
                    <div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {step.data.items.map((item, i) => (
                          <div key={i}>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{item.label}</span>
                              <span className="text-sm font-bold text-gray-900">{item.score}</span>
                            </div>
                            <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-green-500 h-full transition-all duration-500"
                                style={{ width: `${item.score}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6 text-sm font-medium text-gray-600 pt-4 border-t border-gray-100">
                        {step.data.stats.map((stat, i) => (
                          <div key={i}>{stat}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.data.type === 'growth' && (
                    <div>
                      <div className="flex items-end justify-between h-48 gap-4 mb-4">
                        {step.data.items.map((item, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div className="w-full flex flex-col items-center">
                              <span className="text-lg font-bold text-gray-900 mb-2">{item.value}%</span>
                              <div
                                className="w-full bg-blue-600 rounded-t-lg transition-all duration-500"
                                style={{ height: `${item.value * 1.6}px` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-600 mt-3">{item.week}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-sm font-semibold text-green-600 pt-4 border-t border-gray-100">
                        {step.data.improvement}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center bg-gray-900 rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a call to see how we can generate qualified appointments for your business
            </p>
            <button
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3"
            >
              <Calendar size={24} />
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
