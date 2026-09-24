export const bookingUrl = '#contact';

export const partnerLogos = [
  { src:'/images/partners/call_cafe_logo.jpg', alt:'Call Cafe' },
  { src:'/images/partners/WRT_logo.png', alt:'WRT' },
  { src:'/images/partners/prism_data_logo.png', alt:'Prism Data' },
  { src:'/images/partners/boiler_installations_logo.png', alt:'Boiler Install 4 You' },
  { src:'/images/partners/call_cafe_logo.jpg', alt:'Call Cafe' },
  { src:'/images/partners/WRT_logo.png', alt:'WRT' },
  { src:'/images/partners/prism_data_logo.png', alt:'Prism Data' },
  { src:'/images/partners/boiler_installations_logo.png', alt:'Boiler Install 4 You' },
];

export const testimonials = [
  ['CEO','SCA Consultancy','The system gave us a clearer route to market and a pipeline we could finally plan around.'],
  ['Director','Tenable Business Support','We stopped guessing where growth would come from. The work is focused, measured and commercially useful.'],
  ['Managing Director','SGS Security','The quality of conversations improved quickly, and our team had more time to focus on closing.'],
  ['Founder','The Cancer Conversation','Renvra helped us turn a strong offer into a much more consistent commercial engine.'],
  ['Director','Re Roofs Repair','A practical, thoughtful partner that understands how to turn attention into real opportunities.'],
] as const;

export const faqs = [
 ['What is a go-to-market system?','A connected set of demand, capture, nurture and sales processes designed to create a dependable flow of qualified opportunities.'],
 ['Can you deploy the system in 14 days?','Yes. We work from a focused launch plan, prioritising the essential infrastructure, messaging and conversion points first.'],
 ['Which channels do you use?','The right mix depends on your market, but can include cold email, paid advertising, LinkedIn, SEO and dialling agents.'],
 ['How do you approach pricing?','Pricing is shaped around the scope of the system, the channels required and the commercial outcome we are working towards.'],
 ['What does onboarding involve?','We clarify your offer, ideal customer, current sales process and goals, then turn those inputs into a practical deployment plan.'],
 ['What results should we expect?','Results vary by market and offer. Our focus is building a measurable system that compounds learning and improves opportunity quality over time.'],
];

export const caseStudies = [
 { id:'sca-consultancy', role:'CEO', name:'SCA Consultancy', industry:'Business consultancy', metrics:['32','£180k','14 days','4.8x'], challenge:'A strong service offer needed a sharper route into conversations with the right decision-makers.', deployed:'A focused demand system with targeted outreach, a conversion asset and a simple qualification path.', results:'The team gained a repeatable flow of relevant conversations and clearer visibility across the pipeline.', quote:'The system gave us a clearer route to market and a pipeline we could finally plan around.' },
 { id:'tenable-business-support', role:'Director', name:'Tenable Business Support', industry:'Business support', metrics:['27','£96k','6 weeks','31%'], challenge:'Growth had been too dependent on referrals and inconsistent founder-led activity.', deployed:'A structured outbound campaign, refined positioning and nurture sequence for warm prospects.', results:'More qualified conversations arrived with context already established, giving the sales team momentum.', quote:'We stopped guessing where growth would come from.' },
 { id:'sgs-security', role:'Managing Director', name:'SGS Security', industry:'Security services', metrics:['41','£240k','90 days','22%'], challenge:'The business needed to reach larger accounts without adding another layer of manual prospecting.', deployed:'Multi-channel demand creation paired with qualification and follow-up workflows.', results:'The quality of opportunities improved while the internal team spent more time in meaningful sales conversations.', quote:'The quality of conversations improved quickly.' },
 { id:'the-cancer-conversation', role:'Founder', name:'The Cancer Conversation', industry:'Health education', metrics:['19','£72k','30 days','3.6x'], challenge:'A differentiated offer was not being seen consistently by the audiences it could help most.', deployed:'Clearer messaging, demand capture pages and an intentional follow-up journey.', results:'The organisation built a more confident commercial rhythm without compromising its mission.', quote:'Renvra helped us turn a strong offer into a much more consistent commercial engine.' },
 { id:'re-roofs-repair', role:'Director', name:'Re Roofs Repair', industry:'Property services', metrics:['36','£118k','8 weeks','28%'], challenge:'Inbound demand was difficult to predict and the team needed a reliable way to create new opportunities.', deployed:'Targeted prospecting, conversion-led assets and a practical pipeline review cadence.', results:'The business gained control over its opportunity flow and a process it could keep improving.', quote:'A practical, thoughtful partner that understands how to turn attention into real opportunities.' },
];

export const posts = [
 ...['The modern B2B growth system','Why outbound should feel more like infrastructure','A practical guide to finding your best-fit accounts'].map((title,i)=>({slug:title.toLowerCase().replace(/ /g,'-'),category:'B2B',title,excerpt:'A considered look at the systems, decisions and commercial habits that create dependable growth.',date:`${12+i} September 2026`,readTime:'6 min read'})),
 ...['The customer journey is the product','How to make every enquiry count','Building trust before the first conversation'].map((title,i)=>({slug:title.toLowerCase().replace(/ /g,'-'),category:'B2C',title,excerpt:'Useful thinking for businesses that want better customer experiences and stronger conversion.',date:`${4+i} August 2026`,readTime:'5 min read'})),
];
