import { useState } from 'react';
import { ChevronDown, Calendar, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How quickly can we get started?',
          a: 'We can have your first campaigns live within 7-10 days of signing up. The onboarding process includes strategy calls, ICP definition, and campaign setup to ensure we launch with maximum impact.'
        },
        {
          q: 'What information do you need from us?',
          a: "We need your ICP details (industry, company size, job titles), your value proposition, any existing sales materials, and access to your calendar for appointment scheduling. We'll guide you through everything in the onboarding process."
        },
        {
          q: 'Do we need to provide contact lists?',
          a: 'No, we build the prospect lists for you. We use multiple data sources to find and verify contact information for decision-makers that match your ICP criteria.'
        }
      ]
    },
    {
      category: 'Results & Value',
      questions: [
        {
          q: 'What kind of ROI can we expect?',
          a: 'Our clients typically see significant ROI within the first 90 days. Many close deals worth substantially more than the service cost from just one or two appointments. We focus on quality over quantity to maximize your return.'
        },
        {
          q: 'How is pricing structured?',
          a: 'Our pricing is customized based on your specific needs and goals. Book a call with our team to discuss a plan tailored to your business.'
        }
      ]
    },
    {
      category: 'Campaign Details',
      questions: [
        {
          q: 'How do you ensure appointment quality?',
          a: 'We pre-qualify every prospect before booking. We verify they match your ICP, have genuine interest, have budget and authority, and understand what the meeting is about. This ensures your sales team only talks to serious prospects.'
        },
        {
          q: 'Can we review messages before they go out?',
          a: "Absolutely. During onboarding, you'll review and approve all messaging. Throughout the campaign, you can request changes anytime. We want you to be comfortable with every message sent on your behalf."
        },
        {
          q: 'How many appointments should we expect per month?',
          a: 'This varies by industry, ICP, and offer, but most clients receive qualified appointments consistently once campaigns are optimized. We focus on quality leads that match your criteria rather than vanity metrics.'
        }
      ]
    },
    {
      category: 'Technical & Integration',
      questions: [
        {
          q: 'How does calendar integration work?',
          a: 'We integrate with your calendar system (Google Calendar, Outlook, Calendly, etc.) so appointments are automatically scheduled when prospects book. You receive notifications and meeting details instantly.'
        },
        {
          q: 'Do you integrate with our CRM?',
          a: 'Yes, we can integrate with most major CRMs including Salesforce, HubSpot, and Pipedrive. All prospect interactions and appointment data flow directly into your existing systems.'
        },
        {
          q: 'What about data privacy and compliance?',
          a: 'We are fully compliant with GDPR, CAN-SPAM, and other data protection regulations. All prospect data is sourced from legitimate business databases, and we honor all opt-out requests immediately.'
        }
      ]
    },
    {
      category: 'Results & Reporting',
      questions: [
        {
          q: 'How do you track and report results?',
          a: 'You receive weekly performance reports including emails sent, response rates, appointments booked, and show rates. You also get real-time dashboard access to see all campaign metrics and prospect interactions.'
        },
        {
          q: "What if appointments don't show up?",
          a: "We implement confirmation sequences and reminder systems to minimize no-shows. Our average show rate is 75-80%. If a prospect doesn't show, we follow up to reschedule when appropriate."
        },
        {
          q: "What happens if we're not satisfied with results?",
          a: "We work closely with you to optimize until you're seeing results. If after 60 days you're genuinely not satisfied, we'll work with you to make it right. Our success is tied to yours."
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with Renvra Group
            </p>
          </div>

          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded"></span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`text-blue-600 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-16 bg-blue-600 text-white rounded-2xl p-12 text-center">
            <MessageCircle className="mx-auto mb-4 text-white" size={48} />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a call with our team to get all your questions answered
            </p>
            <button
              onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Calendar size={24} />
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
