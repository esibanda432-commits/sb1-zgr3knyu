import { ArrowRight, Target, Link2, Rocket } from 'lucide-react';
import { bookingUrl } from '../data/siteData';

export default function About() {
  const values = [
    [Target, 'Results-Driven', 'Every system we build is measured against one outcome: revenue.'],
    [Link2, 'Fully Connected', 'One integrated system, not a collection of disconnected services.'],
    [Rocket, 'Rapid Deployment', 'Fully operational within 14 days, so momentum starts immediately.'],
  ];

  return (
    <div className="pt-[88px]">
      <section className="section-space">
        <div className="container">
          <p className="eyebrow mb-5">The company</p>
          <h1 className="display max-w-4xl text-5xl font-bold sm:text-6xl">About Renvra Group</h1>

          <div className="mt-10 max-w-3xl space-y-6">
            <p className="text-lg leading-8 muted">Founded in 2024, Renvra Group builds Go To Market Systems for businesses ready to scale. We exist to solve one of the most persistent challenges in growth: generating a consistent, predictable flow of qualified sales opportunities.</p>
            <p className="leading-8 muted">Since our founding, we have partnered with businesses across a wide range of industries and markets, from technology and IT to professional services and consultancy, security, healthcare and home services, in both B2B and B2C. That breadth has given us a deep understanding of how different buyers think, search and make decisions, and how to reach them effectively.</p>
            <p className="leading-8 muted">Our approach is simple. Rather than offering isolated services, we deploy one connected system that creates demand, captures intent and converts it into booked revenue. Every channel, asset and touchpoint works together towards a single outcome: more of the right conversations with the right clients.</p>
            <p className="leading-8 muted">We measure our success by our partners' results, and we are proud to have served more than 100 businesses to date.</p>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {values.map(([Icon, title, body]) => (
              <div key={title as string} className="panel p-7">
                <div className="icon-box mb-7"><Icon size={19} /></div>
                <h3 className="text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 muted">{body as string}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-white/[.1] bg-[#0f1820] p-10 text-center">
            <h2 className="display text-4xl font-bold">Ready to make growth more predictable?</h2>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary mt-8">
              Discuss Your Project <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
