export const bookingUrl = 'https://calendly.com/acquisition-renvra-group/30min';

const partnerLogoList = [
  { src: '/images/partners/call_cafe_logo.jpg', alt: 'Call Cafe', transparent: false },
  { src: '/images/partners/WRT_logo.png', alt: 'WRT', transparent: true },
  { src: '/images/partners/prism_data_logo.png', alt: 'Prism Data', transparent: true },
  { src: '/images/partners/boiler_installations_logo.png', alt: 'Boiler Install 4 You', transparent: true },
  { src: '/images/partners/tenable_business_support_logo.jpg', alt: 'Tenable Business Support', transparent: false },
  { src: '/images/partners/re_roofs_direct_logo.jpg', alt: 'Re Roofs Direct', transparent: false },
  { src: '/images/partners/sca_consultancy_logo.png', alt: 'SCA Consultancy', transparent: true },
  { src: '/images/partners/moorcroft_consultants_logo.jpg', alt: 'Moorcroft Consultants', transparent: false },
];

export const partnerLogos = [
  ...partnerLogoList,
  ...partnerLogoList,
];

export const heroAvatars = [
  'https://images.pexels.com/photos/6148101/pexels-photo-6148101.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
  'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
  'https://images.pexels.com/photos/8090298/pexels-photo-8090298.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
];

const caseStudySlugs = ['sca-consultancy', 'tenable-business-support', 'sgs-security', 'the-cancer-conversation', 're-roofs-repair'];

export const testimonials = [
  ['CEO', 'SCA Consultancy', 'The campaign delivered a consistent flow of meetings with buyers who genuinely needed our services.', '29 meetings in 32 days'],
  ['Director', 'Tenable Business Support', 'For the first time, we were consistently reaching the decision-makers we actually wanted to work with.', '23 meetings in 28 days'],
  ['Managing Director', 'SGS Security', "Far stronger than any agency we've worked with before. The demand generated was more than we could handle.", '73 enquiries in 28 days'],
  ['Founder', 'The Cancer Conversation', 'We turned a brand-new offer into real revenue within a matter of weeks.', '26 meetings in 30 days'],
  ['Director', 'Re Roofs Repair', 'They understood exactly what we needed and went above and beyond to deliver it.', '3 jobs closed in 28 days'],
] as const;

export const testimonialLinks = caseStudySlugs;

export const faqs = [
  ['What is a Go To Market System?', 'A Go To Market System is a fully connected acquisition engine that generates demand, captures buyer intent and converts it into booked sales conversations. Rather than relying on a single channel, we combine outbound, paid and organic channels with conversion assets and structured nurturing, so your pipeline is predictable and continuously growing.'],
  ['How soon can the system be deployed?', 'Our systems are fully deployed within 14 days. During that window we complete onboarding, define your ideal client profile, build your messaging and conversion assets, and launch your acquisition channels, so you begin generating opportunities quickly without a lengthy setup period.'],
  ['What results can we expect?', 'Results depend on factors such as your market, your offer and your average deal value, so we assess every business individually before making any commitments. As a benchmark, our partners currently average 30 booked calls per month.'],
  ['Do you work with B2B or B2C businesses?', 'Both. We build systems for B2B and B2C businesses and have a proven track record across both. Our approach is tailored to how your buyers make decisions, whether that means reaching senior decision-makers in complex sales cycles or generating high volumes of qualified consumer enquiries.'],
  ['Which channels do you use?', 'Depending on your market, we deploy cold email, paid advertising, LinkedIn outreach, SEO and dialling agents, supported by lead capture pages, pre-call assets and nurture sequences. We select and combine the channels most likely to reach your ideal client.'],
  ['How do we get started?', 'Book a call with our team using the "Discuss Your Project" button. We will review your business, your goals and your current pipeline, and outline how a Go To Market System would be deployed for you.'],
];

export const caseStudies = [
  {
    id: 'sca-consultancy', role: 'CEO', name: 'SCA Consultancy', industry: 'Business consultancy',
    headlineFigure: '29', headlineLabel: 'Meetings Booked', timeframe: '32 Days', timeframeNum: 32, icon: 'calendar',
    challenge: 'A strong service offer needed a sharper route into conversations with the right decision-makers.',
    deployed: 'A focused demand system with targeted outreach, a conversion asset and a simple qualification path.',
    results: 'The team gained a repeatable flow of relevant conversations and clearer visibility across the pipeline.',
    quote: 'The campaign delivered a consistent flow of meetings with buyers who genuinely needed our services.',
  },
  {
    id: 'tenable-business-support', role: 'Director', name: 'Tenable Business Support', industry: 'Business support',
    headlineFigure: '23', headlineLabel: 'Meetings Booked', timeframe: '28 Days', timeframeNum: 28, icon: 'calendar',
    challenge: 'Growth had been too dependent on referrals and inconsistent founder-led activity.',
    deployed: 'A structured outbound campaign, refined positioning and nurture sequence for warm prospects.',
    results: 'More qualified conversations arrived with context already established, giving the sales team momentum.',
    quote: 'For the first time, we were consistently reaching the decision-makers we actually wanted to work with.',
  },
  {
    id: 'sgs-security', role: 'Managing Director', name: 'SGS Security', industry: 'Security services',
    headlineFigure: '73', headlineLabel: 'Student Enquiries', timeframe: '28 Days', timeframeNum: 28, icon: 'users',
    challenge: 'The business needed to reach larger accounts without adding another layer of manual prospecting.',
    deployed: 'Multi-channel demand creation paired with qualification and follow-up workflows.',
    results: 'The quality of opportunities improved while the internal team spent more time in meaningful sales conversations.',
    quote: "Far stronger than any agency we've worked with before. The demand generated was more than we could handle.",
  },
  {
    id: 'the-cancer-conversation', role: 'Founder', name: 'The Cancer Conversation', industry: 'Health education',
    headlineFigure: '26', headlineLabel: 'Meetings Booked', timeframe: '30 Days', timeframeNum: 30, icon: 'calendar',
    challenge: 'A differentiated offer was not being seen consistently by the audiences it could help most.',
    deployed: 'Clearer messaging, demand capture pages and an intentional follow-up journey.',
    results: 'The organisation built a more confident commercial rhythm without compromising its mission.',
    quote: 'We turned a brand-new offer into real revenue within a matter of weeks.',
  },
  {
    id: 're-roofs-repair', role: 'Director', name: 'Re Roofs Repair', industry: 'Property services',
    headlineFigure: '3', headlineLabel: 'High-Ticket Jobs Closed', timeframe: '28 Days', timeframeNum: 28, icon: 'trophy',
    challenge: 'Inbound demand was difficult to predict and the team needed a reliable way to create new opportunities.',
    deployed: 'Targeted prospecting, conversion-led assets and a practical pipeline review cadence.',
    results: 'The business gained control over its opportunity flow and a process it could keep improving.',
    quote: 'They understood exactly what we needed and went above and beyond to deliver it.',
  },
];

export const posts = [
  ...['The modern B2B growth system', 'Why outbound should feel more like infrastructure', 'A practical guide to finding your best-fit accounts'].map((title, i) => ({
    slug: title.toLowerCase().replace(/ /g, '-'), category: 'B2B', title,
    excerpt: 'A considered look at the systems, decisions and commercial habits that create dependable growth.',
    date: `${12 + i} September 2026`, readTime: '6 min read',
  })),
  ...['The customer journey is the product', 'How to make every enquiry count', 'Building trust before the first conversation'].map((title, i) => ({
    slug: title.toLowerCase().replace(/ /g, '-'), category: 'B2C', title,
    excerpt: 'Useful thinking for businesses that want better customer experiences and stronger conversion.',
    date: `${4 + i} August 2026`, readTime: '5 min read',
  })),
];
