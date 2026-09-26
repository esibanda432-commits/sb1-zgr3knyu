import { ArrowRight, Target, Link2, Rocket } from 'lucide-react';
import { bookingUrl } from '../data/siteData';

const facts = [
  ['2024', 'Founded'],
  ['100+', 'Businesses served'],
  ['£1M+', 'Pipeline generated'],
];
const markets = ['Technology', 'Healthcare', 'Professional Services', 'Security', 'Home Services'];

const values = [
  [Target, 'Results-driven', 'We judge our work by the revenue it produces, not the activity it generates.'],
  [Link2, 'Fully connected', 'Every channel, asset and follow-up works as part of one system.'],
  [Rocket, 'Rapid deployment', 'Your system is live within 14 days, so momentum builds from the start.'],
] as const;

export default function About() {
  return (
    <div className="pt-[88px]">
      {/* Intro (dark) */}
      <section className="section-space relative overflow-hidden">
        <div className="container relative">
          <p className="eyebrow mb-5">About us</p>
          <h1 className="display max-w-4xl text-5xl font-bold sm:text-6xl">About Renvra Group</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 muted">
            Renvra Group designs and deploys go-to-market systems that give businesses a consistent, predictable flow of qualified sales opportunities.
          </p>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
            {facts.map(([value, label]) => (
              <div key={label} className="bg-[var(--bg)] p-6 sm:p-8">
                <dt className="text-xs muted">{label}</dt>
                <dd className="display mt-2 text-3xl font-bold sm:text-4xl">{value}</dd>
              </div>
            ))}
            <div className="bg-[var(--bg)] p-6 sm:p-8">
              <dt className="text-xs muted">Markets served</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {markets.map(m => (
                  <span key={m} className="whitespace-nowrap rounded-full border border-[var(--line)] px-2.5 py-1 text-xs font-medium">{m}</span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Story (light) */}
      <section className="section-space surface-light">
        <div className="container grid gap-14 lg:grid-cols-3">
          <div>
            <h2 className="display text-2xl font-bold">Why we exist</h2>
            <p className="mt-4 leading-8 muted">
              Most businesses don't struggle for lack of effort. They struggle because marketing, outreach and sales follow-up run separately, and opportunities are lost in the gaps between them. We were founded in 2024 to close those gaps.
            </p>
          </div>
          <div>
            <h2 className="display text-2xl font-bold">How we work</h2>
            <p className="mt-4 leading-8 muted">
              Rather than selling isolated services, we deploy one connected system. It creates demand across the right channels, captures intent with assets built for your buyers, and nurtures every lead through to a booked conversation.
            </p>
          </div>
          <div>
            <h2 className="display text-2xl font-bold">Who we work with</h2>
            <p className="mt-4 leading-8 muted">
              We have partnered with businesses in technology and IT, professional services and consultancy, security, healthcare and home services. That range has given us a clear understanding of how different buyers research, evaluate and decide.
            </p>
          </div>
        </div>
      </section>

      {/* Values (dark) */}
      <section className="section-space">
        <div className="container">
          <p className="eyebrow mb-4">What we stand for</p>
          <h2 className="display max-w-2xl text-3xl font-bold sm:text-4xl">The principles behind every system we build</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map(([Icon, title, body]) => (
              <div key={title} className="panel p-7">
                <div className="icon-box mb-7"><Icon size={19} /></div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 muted">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[var(--line)] pt-12 sm:flex-row sm:items-center">
            <h2 className="display text-3xl font-bold">Ready to make growth more predictable?</h2>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary shrink-0">
              Discuss Your Project <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
