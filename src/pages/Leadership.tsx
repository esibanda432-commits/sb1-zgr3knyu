import { ArrowUpRight, Linkedin } from 'lucide-react';
import { founderHeadshot } from '../data/siteData';

const linkedInUrl = 'https://www.linkedin.com/in/emmanuel-sibanda-6b39b1244';

const principles = [
  ['Operational discipline', 'Clear plans, defined milestones and accountability at every stage of delivery.'],
  ['Systems thinking', 'Every channel, asset and follow-up designed to work together, not in isolation.'],
  ['Commercial focus', 'Success measured by qualified conversations and revenue, not activity.'],
];

export default function Leadership() {
  return (
    <div className="pt-[88px]">
      {/* Intro + vision (dark) */}
      <section className="section-space relative overflow-hidden">
        <div className="container relative">
          <p className="eyebrow mb-5">Leadership</p>
          <h1 className="display text-5xl font-bold sm:text-6xl">Company Leadership</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 muted">
            Renvra Group is founder-led. The standards of structure and accountability that shaped our founder's career are the same standards behind every system we deploy.
          </p>

          <div className="mt-20 grid gap-10 border-t border-[var(--line)] pt-14 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="eyebrow mb-4">Our vision</p>
              <h2 className="display text-3xl font-bold sm:text-4xl">Growth should run like a system, not a series of experiments.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 muted">
              <p>Too many businesses rely on referrals, one-off campaigns and channels that operate in isolation. The result is a pipeline that rises and falls without warning.</p>
              <p>Our vision is to replace that uncertainty with one connected system: predictable, measurable and built to scale, so leaders can plan growth with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder profile (light) */}
      <section className="section-space surface-light">
        <div className="container">
          <p className="eyebrow mb-4">Founder</p>
          <h2 className="display text-3xl font-bold sm:text-4xl">Meet the founder</h2>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[360px_1fr] lg:gap-20">
            {/* Profile card: photo with name and role attached */}
            <figure className="panel mx-auto w-full max-w-[360px] overflow-hidden lg:sticky lg:top-28">
              <img
                src={founderHeadshot}
                alt="Emmanuel Sibanda, Founder and CEO of Renvra Group"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="p-6">
                <p className="text-xl font-semibold">Emmanuel Sibanda</p>
                <p className="mt-1 text-sm font-medium accent-text">Founder & CEO, Renvra Group</p>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="button-ghost mt-5 w-full justify-center text-sm">
                  <Linkedin size={16} /> Connect on LinkedIn <ArrowUpRight size={14} />
                </a>
              </figcaption>
            </figure>

            {/* Background, kept separate from the photo */}
            <div className="max-w-2xl">
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-semibold">Background</h3>
                  <p className="mt-3 leading-8 muted">
                    Emmanuel began his career in project management with global automotive companies, delivering complex, multi-stakeholder projects in environments where precision, process and accountability are non-negotiable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Approach</h3>
                  <p className="mt-3 leading-8 muted">
                    That experience shaped how he approaches growth. Strong commercial results rarely come from a single tactic. They come from well-designed systems that are measured carefully and improved continuously. He founded Renvra Group to bring that discipline to business development.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Working with partners</h3>
                  <p className="mt-3 leading-8 muted">
                    Emmanuel is closely involved with every partner, from the first strategy conversation through to deployment, making sure each system is built around their market, their offer and their revenue goals.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {principles.map(([title, body]) => (
                  <div key={title} className="rounded-xl border border-[var(--line)] bg-white p-5">
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-2 text-sm leading-6 muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
