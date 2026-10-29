import { ArrowDown, ArrowRight, BarChart3, Check, FileText, Globe2, Linkedin, Mail, Megaphone, Phone, Search, Send, Users, Zap } from 'lucide-react';
import { bookingUrl } from '../data/siteData';

const layers = [
  {
    number: '01', title: 'Create Demand',
    intro: 'Reach the people who need you, wherever they are looking.',
    items: [[Mail, 'Cold Email'], [Megaphone, 'Paid Advertising'], [Linkedin, 'LinkedIn Outreach'], [Search, 'SEO'], [Phone, 'Dialling Agents']] as const,
  },
  {
    number: '02', title: 'Capture & Convert',
    intro: 'Make every touchpoint useful enough to move the conversation forward.',
    items: [[FileText, 'Lead Capture Pages'], [Users, 'Pre-Call Assets to educate the buyer'], [Send, 'Lead Nurturing through to the discovery call']] as const,
  },
  {
    number: '03', title: 'Close: Booked Revenue',
    intro: 'Give your team qualified opportunities, ready for a commercially useful conversation.',
    items: [[BarChart3, 'Booked Calls'], [Globe2, 'Pipeline'], [Check, 'Closed Revenue']] as const,
  },
];

export default function GoToMarketSystems() {
  return (
    <div className="pt-[88px]">
      <section className="section-space relative overflow-hidden">
        <div className="container relative">
          <p className="eyebrow mb-5">Go To Market Systems</p>
          <h1 className="display max-w-5xl text-5xl font-bold sm:text-6xl md:text-7xl">
            One System. Deployed to convert sales opportunities into revenue.
          </h1>
        </div>
      </section>

      <section className="surface-light py-24 sm:py-28">
        <div className="container max-w-4xl">
          {layers.map((layer, i) => (
            <div key={layer.number} className={`relative ${i < 2 ? 'pb-16' : ''}`}>
              <div className="panel relative p-7 sm:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="eyebrow mb-3">Layer {layer.number}</p>
                    <h2 className="display text-3xl font-bold">{layer.title}</h2>
                  </div>
                  <span className="text-3xl font-bold text-[#c3d3dc]">{layer.number}</span>
                </div>
                <p className="mt-4 max-w-xl muted">{layer.intro}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {layer.items.map(([Icon, label]) => (
                    <div key={label} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-4 text-sm font-medium text-[var(--text)]">
                      <span className="icon-box h-9 w-9"><Icon size={17} /></span>
                      {label}
                    </div>
                  ))}
                </div>

                {i === 0 && <p className="mt-8 text-sm font-medium accent-text">We cover every channel so your ideal client doesn't miss you.</p>}
              </div>

              {i < 2 && (
                <div className="absolute bottom-0 left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-[var(--line)] bg-white accent-text shadow-sm">
                  <ArrowDown size={17} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-24 text-center">
        <div className="mx-auto max-w-xl">
          <div className="icon-box mx-auto mb-5"><Zap size={18} /></div>
          <h2 className="display text-4xl font-bold">Deployed within 14 days</h2>
          <p className="mt-4 muted">A focused, commercially useful system built to start learning quickly.</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary mt-8">
            Discuss Your Project <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}
