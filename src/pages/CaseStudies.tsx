import { ArrowRight, Quote, Calendar, Users, Trophy } from 'lucide-react';
import { caseStudies, bookingUrl } from '../data/siteData';
import { useEffect, useRef, useState } from 'react';

const iconMap: Record<string, typeof Calendar> = { calendar: Calendar, users: Users, trophy: Trophy };

function CountUp({ target, durationMs = 1400 }: { target: number; durationMs?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return <span ref={ref}>{val}</span>;
}

export default function CaseStudies() {
  return (
    <div className="pt-[88px]">
      <section className="section-space pb-14">
        <div className="container">
          <p className="eyebrow mb-5">Proof of work</p>
          <h1 className="display text-5xl font-bold sm:text-6xl">Case Studies</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 muted">A selection of commercial systems built to create better conversations, stronger pipelines and more dependable growth.</p>
        </div>
      </section>

      <section className="container space-y-8 pb-28">
        {caseStudies.map(c => {
          const Icon = iconMap[c.icon] || Calendar;
          const maxDays = 32;
          return (
            <article id={c.id} key={c.id} className="scroll-mt-28 panel p-7 sm:p-10">
              {/* Result creative */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[.1] bg-[#0f1419] p-7 sm:p-10 mb-10" style={{ boxShadow: '0 0 40px rgba(40,128,164,.08)' }}>
                <div className="glow -right-32 -top-24 h-72 w-72" />
                <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="icon-box h-14 w-14 shrink-0"><Icon size={26} /></div>
                    <div>
                      <p className="display text-5xl font-bold sm:text-6xl accent-text">
                        <CountUp target={parseInt(c.headlineFigure)} />
                      </p>
                      <p className="mt-1 text-sm uppercase tracking-wider muted">{c.headlineLabel}</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto sm:min-w-[200px]">
                    <p className="text-2xl font-bold text-white">{c.timeframe}</p>
                    <p className="text-xs uppercase tracking-wider muted mb-3">Timeframe</p>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[.08]">
                      <div className="h-full rounded-full accent-bg" style={{ width: `${(c.timeframeNum / maxDays) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-3">{c.industry}</p>
                <h2 className="display text-3xl font-bold sm:text-4xl">{c.name}</h2>
                <p className="mt-2 text-sm muted">{c.role}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mt-8">
                <Info title="The Challenge" text={c.challenge} />
                <Info title="What We Deployed" text={c.deployed} />
                <Info title="The Results" text={c.results} />
              </div>

              <div className="mt-10 border-t border-white/[.08] pt-8">
                <Quote className="mb-4 text-[#3a6a82]" size={22} />
                <p className="max-w-3xl text-xl leading-8 text-[#e6e8ec]">"{c.quote}"</p>
              </div>
            </article>
          );
        })}
      </section>

      <div className="container pb-24 text-center">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
          Discuss Your Project <ArrowRight size={17} />
        </a>
      </div>
    </div>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-[#f5f6f8]">{title}</h3>
      <p className="text-sm leading-7 muted">{text}</p>
    </div>
  );
}
