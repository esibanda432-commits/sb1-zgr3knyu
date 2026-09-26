// Blog and article content.
// Body blocks: { p } paragraph, { h2 } subheading, { list } bullet points ("Lead: detail" bolds the lead).
// Wrap a figure in **double asterisks** to highlight it in the brand blue.

export type Block = { p: string } | { h2: string } | { list: string[] };

export interface Post {
  slug: string;
  category: 'B2B' | 'B2C';
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: Block[];
  sources: string[];
}

const slugify = (title: string) => title.toLowerCase().replace(/ /g, '-');

const raw: Omit<Post, 'slug'>[] = [
  {
    category: 'B2B',
    title: 'The modern B2B growth system',
    excerpt: 'Most B2B businesses do not have a lead problem. They have a continuity problem. Here is how to fix it.',
    date: '12 September 2026',
    readTime: '4 min read',
    body: [
      { p: 'When growth stalls, the instinct is to find more leads. In most B2B businesses, that is rarely the real issue. The issue is continuity: activity happens in bursts, each function works in isolation, and opportunities are lost in the handovers between them. A growth system fixes this by treating demand, conversion and follow-up as one process with a single owner.' },
      { h2: 'Start with the decision your buyer is making' },
      { p: 'Before choosing channels, map the questions your buyer must answer to say yes. Is this problem worth solving now? What are the options? Which supplier can we trust? How do I justify this internally? Every piece of marketing and every sales conversation should help answer one of those questions.' },
      { p: 'This matters because buyers now do most of the work alone. Gartner estimates they spend just **17%** of the buying journey meeting suppliers, shared across every supplier they consider. Your content, website and follow-up are doing the selling the rest of the time, whether you design them to or not.' },
      { h2: 'Four parts that must connect' },
      { list: [
        'Demand: a consistent presence in the channels your buyers use, so you are known before they need you.',
        'Capture: pages and materials that answer buyer questions and make the next step obvious.',
        'Conversion: prompt follow-up, clear qualification and nurturing through to a booked conversation.',
        'Measurement: one view of what each channel contributes to pipeline, so budget follows results.',
      ] },
      { p: 'None of these is unusual on its own. The value lies in the connections. A lead captured without a clear owner goes cold. A great first call without a structured follow-up stalls. A channel judged on clicks instead of pipeline gets funded for the wrong reasons.' },
      { h2: 'Where systems usually break' },
      { list: [
        'Enquiries arrive in a shared inbox with nobody responsible for them.',
        'Marketing reports on lead volume while sales judges lead quality, and neither trusts the other.',
        'Prospects who are interested but not ready are dropped rather than nurtured.',
        'Nobody can say which activity produced last quarter\'s revenue.',
      ] },
      { h2: 'A practical first step' },
      { p: 'Take your last five closed deals and trace each one backwards: where the buyer first heard of you, what they read, who they spoke to, and how long each stage took. The gaps and delays you find are where your system needs work, and they are usually more valuable to fix than any new channel.' },
    ],
    sources: ['Gartner, research on the B2B buying journey.'],
  },
  {
    category: 'B2B',
    title: 'Why outbound should feel more like infrastructure',
    excerpt: 'Outbound is often judged unfairly because it is run like an experiment. Built properly, it becomes a dependable source of pipeline.',
    date: '13 September 2026',
    readTime: '4 min read',
    body: [
      { p: 'Outbound has a reputation problem, and much of it is self-inflicted. Businesses switch it on when the pipeline looks thin, send a few hundred generic messages, see disappointing results and conclude that outbound does not work. What failed was not the channel but the approach. Outbound performs when it is built like infrastructure: permanent, maintained and measured.' },
      { h2: 'Why stop-start outbound fails' },
      { p: 'Timing is the first problem. Research from the Ehrenberg-Bass Institute suggests only around **5%** of B2B buyers are in the market at any one time. A short campaign reaches the few who happen to be ready that month and misses everyone else. There are practical costs too: sending domains lose their reputation when left idle, messaging is never refined because each campaign starts from scratch, and there is no baseline to measure improvement against.' },
      { h2: 'The components that matter' },
      { list: [
        'Data: verified contacts, segmented by industry, role and company size, refreshed regularly.',
        'Deliverability: correctly configured domains, warmed inboxes and sensible daily limits, so messages reach the inbox.',
        'Messaging: one clear problem, one relevant reason for writing now, and one simple question.',
        'Cadence: a sequence of four to six messages spaced over several weeks, each adding something new.',
        'Handover: a clear process for positive replies, so interested prospects are contacted within hours.',
      ] },
      { h2: 'What good messaging looks like' },
      { p: 'Weak outbound talks about the sender: the company, its services, its experience. Strong outbound talks about the recipient\'s situation. Compare "We are a leading provider of growth solutions" with "Noticed you are hiring three new account managers. Is filling their diaries with qualified meetings on your radar yet?" The second is shorter, specific and easy to answer.' },
      { h2: 'Measure what reflects revenue' },
      { p: 'Open rates are unreliable and say little about commercial impact. Track positive reply rate by segment, meetings held and the pipeline those meetings create. Review weekly, keep what works and retire what does not. Over a few months, that discipline turns outbound from a gamble into one of the most predictable sources of new business available.' },
    ],
    sources: ['John Dawes, Ehrenberg-Bass Institute, published by the LinkedIn B2B Institute (2021).'],
  },
  {
    category: 'B2B',
    title: 'A practical guide to finding your best-fit accounts',
    excerpt: 'Defining exactly who you should sell to is the decision that makes every other part of growth easier.',
    date: '14 September 2026',
    readTime: '4 min read',
    body: [
      { p: '"Anyone who needs our service" feels like a safe target market. In practice it is expensive. Broad targeting produces generic messaging, low response rates and long sales conversations with prospects who were never a strong fit. A precise best-fit profile does the opposite: it sharpens every message and lets you spend time where it is most likely to pay back.' },
      { h2: 'Build the profile from evidence' },
      { p: 'Start with your existing clients, not your ambitions. Identify the ones that closed quickly, are profitable to serve and have stayed the longest, then look for what they have in common.' },
      { list: [
        'Firmographics: industry, company size, location and stage of growth.',
        'Triggers: the events that prompted them to act, such as new funding, a leadership change or rapid hiring.',
        'The problem: how they described their challenge before working with you, in their own words.',
        'The buying group: who felt the problem, who approved the spend and who influenced the decision.',
      ] },
      { p: 'Weight longevity heavily. Research by Frederick Reichheld of Bain & Company found that a **5%** increase in customer retention can raise profits by between 25% and 95%. The accounts worth pursuing are the ones that stay, not simply the ones that sign.' },
      { h2: 'Write down who is not a fit' },
      { p: 'Disqualifiers are as useful as qualifiers. Note the characteristics of clients that were slow to close, difficult to serve or quick to leave. Perhaps they were too small to value the service, lacked an internal owner, or needed something outside your core offer. Filtering these out early protects your team\'s time and your margins.' },
      { h2: 'Put the profile to work' },
      { p: 'Summarise the profile on a single page and tier your target list: A accounts match every criterion and receive personalised outreach; B accounts match most and receive tailored messaging by segment; everything else is deprioritised. Review won and lost deals each quarter and update the profile based on what the results show.' },
    ],
    sources: ['Harvard Business Review, "The Value of Keeping the Right Customers" (2014), citing Frederick Reichheld, Bain & Company.'],
  },
  {
    category: 'B2C',
    title: 'The customer journey is the product',
    excerpt: 'For consumers, how easy you are to buy from matters as much as what you sell.',
    date: '4 August 2026',
    readTime: '4 min read',
    body: [
      { p: 'Consumers do not separate a product from the experience of buying it. A slow page, a confusing form or an unexpected fee at checkout can undo a decision that had already been made. For many businesses, improving the journey is a faster route to growth than attracting more visitors.' },
      { h2: 'Walk the journey yourself' },
      { p: 'Most business owners rarely experience their own buying process as a customer does. Set aside an hour and go through it on a phone: find the business through search, browse, enquire or buy, and note every moment of hesitation. Then ask someone unfamiliar with the business to do the same while you watch without helping.' },
      { h2: 'The three types of friction' },
      { list: [
        'Uncertainty: missing prices, unclear delivery times or vague next steps that make customers pause.',
        'Effort: long forms, forced account creation or too many clicks to reach a decision.',
        'Delay: slow pages, slow replies or waiting days for a quote.',
      ] },
      { p: 'The cost of friction is significant. Baymard Institute\'s analysis of 49 studies puts the average online cart abandonment rate at **70.19%**. Not every abandoned basket is recoverable, but a meaningful share are lost to problems the business could fix.' },
      { h2: 'Fix in order of impact' },
      { p: 'Prioritise the steps with the most traffic and the steepest drop-off. Showing costs early, shortening forms and speeding up key mobile pages typically deliver more than any redesign. Make one change at a time and measure the effect, so you know which improvements are actually working.' },
      { h2: 'Keep reviewing' },
      { p: 'Customer expectations shift as competitors improve. Repeat the walkthrough every quarter and read the questions customers ask before buying. Every repeated question is a gap the journey should already have answered.' },
    ],
    sources: ['Baymard Institute, Cart Abandonment Rate Statistics.'],
  },
  {
    category: 'B2C',
    title: 'How to make every enquiry count',
    excerpt: 'Enquiries lose value by the hour. A simple response process protects the demand you have already paid for.',
    date: '5 August 2026',
    readTime: '4 min read',
    body: [
      { p: 'Every enquiry represents money already spent, on advertising, on your website, on building a reputation. Yet many businesses treat incoming enquiries casually, replying when time allows. Customers, meanwhile, are often contacting several businesses at once and will usually choose whoever responds first and most helpfully.' },
      { h2: 'Speed is the biggest lever' },
      { p: 'Research published in Harvard Business Review found that businesses contacting a lead within an hour were nearly **seven times** as likely to qualify it as those that waited even an hour longer. Interest is highest at the moment someone gets in touch, and it fades quickly as they move on with their day or hear from a competitor.' },
      { h2: 'Build a simple response process' },
      { list: [
        'Acknowledge instantly: an automatic reply confirming receipt and explaining what happens next.',
        'Assign an owner: every enquiry has a named person responsible for it.',
        'Reply personally within the hour: during working hours, treat this as a firm standard.',
        'Make booking effortless: include a link to choose a time rather than exchanging emails.',
      ] },
      { h2: 'Make the first reply useful' },
      { p: 'A strong first response does three things: it answers the question that was asked, it shows you understand the customer\'s situation, and it proposes a clear next step. Avoid sending a price list with no context or a generic brochure. A short, specific reply signals that you are attentive, which is exactly what customers are trying to judge.' },
      { h2: 'Do not give up after one attempt' },
      { p: 'Many people who enquire are not ready to decide immediately. A polite follow-up after a couple of days, and another a week later with something genuinely useful, keeps the conversation open without being pushy. Track response times and conversion rates by source each month. Most businesses find their quickest gains come from converting more of the enquiries they already receive.' },
    ],
    sources: ['James B. Oldroyd, Kristina McElheran and David Elkington, "The Short Life of Online Sales Leads", Harvard Business Review (2011).'],
  },
  {
    category: 'B2C',
    title: 'Building trust before the first conversation',
    excerpt: 'Customers decide whether to trust you long before they get in touch. Here is how to earn that trust early.',
    date: '6 August 2026',
    readTime: '4 min read',
    body: [
      { p: 'By the time a customer calls or fills in a form, they have usually already decided whether you seem trustworthy. That judgement is made quickly, from what others say about you, how your website presents you and how easy you are to contact. Businesses that manage these signals deliberately receive more enquiries, and better ones.' },
      { h2: 'Make reviews a habit, not an afterthought' },
      { p: 'Reviews are now part of almost every buying decision. BrightLocal found that **98%** of consumers at least occasionally read online reviews when choosing a local business. The businesses with strong profiles are rarely the ones with the best service; they are the ones that ask consistently.' },
      { list: [
        'Ask at the right moment: straight after a job is completed or a positive comment is made.',
        'Make it effortless: send a direct link, not instructions on how to find your profile.',
        'Respond to every review: thank positive reviewers and answer criticism calmly and specifically.',
      ] },
      { h2: 'Let your website provide the proof' },
      { p: 'Claims such as "high quality" and "trusted service" carry little weight because every competitor makes them. Evidence does. Show photographs of real work, short case studies with outcomes, relevant accreditations and the people customers will actually deal with. Specific detail is far more persuasive than polished language.' },
      { h2: 'Reduce the sense of risk' },
      { p: 'Hesitation usually comes from uncertainty about cost, commitment or what happens next. Give pricing guidance, even as a range. Explain any guarantee in plain terms. Describe the process after someone gets in touch, step by step. Each answer removes a reason to delay.' },
      { h2: 'Be consistent everywhere' },
      { p: 'Your business name, contact details, opening hours and tone should match across your website, Google profile and social channels. Inconsistency creates doubt, while consistency quietly signals an established, well-run business.' },
    ],
    sources: ['BrightLocal, Local Consumer Review Survey 2023.'],
  },
];

export const posts: Post[] = raw.map(p => ({ ...p, slug: slugify(p.title) }));
