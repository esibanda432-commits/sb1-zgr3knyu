import { ArrowDown, ArrowRight, BarChart3, Bot, Check, FileText, Globe2, Linkedin, Mail, Megaphone, Search, Send, Users, Zap } from 'lucide-react';
import { bookingUrl } from '../data/siteData';

const layers = [
  {
    number: '01', title: 'Create Demand',
    intro: 'Reach the people who need you, wherever they are looking.',
    items: [[Mail, 'Cold Email'], [Megaphone, 'Paid Advertising'], [Linkedin, 'LinkedIn Outreach'], [Search, 'SEO'], [Bot, 'Dialling Agents']] as const,
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

const chartBars = [20, 40, 31, 60, 48, 72, 64, 91, 78, 100];

export default function GoToMarketSystems() {
  return (
    <div className="pt-[88px]">
      <section className="section-space relative overflow-hidden">
        <div className="glow -right-60 -top-40" />
        <div className="container relative">
          <p className="eyebrow mb-5">Go To Market Systems</p>
          <h1 className="display max-w-5xl text-5xl font-bold sm:text-6xl md:text-7xl">
            One System. Deployed to acquire sales opportunities and convert them into revenue.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 muted">
            We create demand, capture intent and convert it into booked revenue, all within one connected system.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container max-w-4xl">
          {layers.map((layer, i) => (
            <div key={layer.number} className="relative pb-16">
              <div className="panel relative p-7 sm:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="eyebrow mb-3">Layer {layer.number}</p>
                    <h2 className="display text-3xl font-bold">{layer.title}</h2>
                  </div>
                  <span className="text-3xl font-bold text-[#1d3848]">{layer.number}</span>
                </div>
                <p className="mt-4 max-w-xl muted">{layer.intro}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {layer.items.map(([Icon, label]) => (
                    <div key={label} className="flex items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.02] p-4 text-sm text-[#d8dce3]">
                      <span className="icon-box h-9 w-9"><Icon size={17} /></span>
                      {label}
                    </div>
                  ))}
                </div>

                {i === 0 && <p className="mt-8 text-sm accent-text">We cover every channel so your ideal client doesn't miss you.</p>}

                {i === 2 && (
                  <div className="mt-10 overflow-hidden rounded-xl border border-white/[.1] bg-[#0b0d12] accent-glow-shadow">
                    <div className="flex items-center gap-2 border-b border-white/[.08] px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-[10px] text-[#697384]">revenue-dashboard / overview</span>
                    </div>
                    <div className="grid gap-4 p-5 sm:grid-cols-3">
                      <div className="h-28 rounded-lg bg-[#141923] p-4">
                        <p className="text-[10px] text-[#697384]">PIPELINE VALUE</p>
                        <p className="mt-4 text-2xl font-semibold">£284,600</p>
                      </div>
                      <div className="h-28 rounded-lg bg-[#141923] p-4">
                        <p className="text-[10px] text-[#697384]">OPEN OPPORTUNITIES</p>
                        <p className="mt-4 text-2xl font-semibold accent-text">48</p>
                      </div>
                      <div className="h-28 rounded-lg bg-[#141923] p-4">
                        <p className="text-[10px] text-[#697384]">CONVERSION</p>
                        <p className="mt-4 text-2xl font-semibold text-[#74d6a0]">32.4%</p>
                      </div>
                    </div>
                    <div className="mx-5 mb-5 h-24 rounded-lg bg-gradient-to-t from-[#153040] to-transparent p-4">
                      <div className="flex h-full items-end gap-2">
                        {chartBars.map((h, j) => (
                          <div key={j} className="flex-1 rounded-t accent-bg opacity-80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {i < 2 && (
                <div className="absolute bottom-0 left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-[var(--accent)]/40 bg-[#0a0b0f] accent-text">
                  <ArrowDown size={17} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-24 text-center">
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
