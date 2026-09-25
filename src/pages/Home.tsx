import { useState } from 'react';
import { ArrowRight, BarChart3, MousePointer2, Plus, Quote, Target } from 'lucide-react';
import { bookingUrl, faqs, partners, heroAvatars, testimonials, testimonialLinks, featuredTestimonialIndices } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';
import NavLink from '../components/NavLink';

interface Props { navigate: (path: string) => void; }

export default function Home({ navigate }: Props) {
  const featured = featuredTestimonialIndices.map(i => testimonials[i]);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pt-[88px]">
      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden">
        <div className="glow left-1/2 top-0 -translate-x-1/2" />
        <div className="container relative text-center">
          <div className="reveal mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-white/[.1] bg-white/[.03] px-4 py-2 text-xs text-[#cdd2dc]" style={{ boxShadow: '0 0 24px var(--accent-glow)' }}>
            <div className="flex items-center">
              {heroAvatars.map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy"
                  className="relative h-7 w-7 rounded-full object-cover border-2 border-[#0a0b0f]"
                  style={{ marginLeft: i === 0 ? 0 : '-17px', zIndex: heroAvatars.length - i }} />
              ))}
            </div>
            <span>100+ Businesses Served</span>
          </div>
          <h1 className="display reveal mx-auto max-w-5xl text-5xl font-bold sm:text-6xl md:text-8xl">
            Go To Market Systems <span className="accent-text">For Businesses Ready to Scale</span>
          </h1>
          <p className="reveal mx-auto mt-7 max-w-2xl text-lg leading-8 muted">
            We create demand, capture intent and convert it into revenue, all within one connected system.
          </p>
          <div className="reveal mt-9">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
              Discuss Your Project <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PARTNER LOGO CAROUSEL */}
      <section className="border-y border-white/[.07] py-14">
        <p className="mb-9 text-center text-xs uppercase tracking-[.2em] text-[#9aa0ab]">Some of the businesses we have partnered with</p>
        <div className="logo-marquee">
          {(['top', 'bottom'] as const).map(row => {
            const items = partners.filter(p => p.row === row);
            return (
              <div key={row} className={`logo-marquee-row ${row === 'bottom' ? 'is-reverse' : ''}`}>
                <div className="logo-marquee-track">
                  {[...items, ...items].map((p, i) => (
                    <div key={`${p.name}-${i}`} className="logo-marquee-item" aria-hidden={i >= items.length ? true : undefined}>
                      <div className="logo-tile">
                        <img src={p.logo} alt={i >= items.length ? '' : p.name} loading="lazy" draggable={false}
                          style={{ height: p.height }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="logo-marquee-blur is-left" aria-hidden="true" />
          <div className="logo-marquee-blur is-right" aria-hidden="true" />
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BUILD */}
      <section className="section-space surface-light">
        <div className="container">
          <SectionHeading eyebrow="What We Build" title="One System. Deployed to convert sales opportunities into revenue." body="We create demand, capture intent and convert it into revenue, all within one connected system." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [Target, '01', 'Create Demand', 'Reach the right people through a considered mix of channels.'],
              [MousePointer2, '02', 'Capture & Convert', 'Turn attention into intent with clear, useful conversion paths.'],
              [BarChart3, '03', 'Close: Booked Revenue', 'Give your team qualified opportunities with context attached.'],
            ].map(([Icon, num, title, body]) => (
              <div className="panel p-7 transition-transform hover:-translate-y-1" key={num as string}>
                <div className="mb-8 flex items-center justify-between">
                  <div className="icon-box"><Icon size={19} /></div>
                  <span className="text-xs muted">{num as string}</span>
                </div>
                <h3 className="text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 muted">{body as string}</p>
              </div>
            ))}
          </div>
          <NavLink href="/go-to-market-systems" navigate={navigate} className="button-ghost mt-8">
            Explore our Go To Market System <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>

      {/* SECTION 4 — FEATURED CASE STUDIES */}
      <section className="section-space surface-dark-2">
        <div className="container">
          <SectionHeading eyebrow="Case Studies" title="Feedback From Client Work" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featured.map(([role, company, quote], fi) => {
              const actualIndex = featuredTestimonialIndices[fi];
              return (
                <a key={company} href={`/case-studies#${testimonialLinks[actualIndex]}`}
                  onClick={e => { e.preventDefault(); navigate(`/case-studies#${testimonialLinks[actualIndex]}`); }}
                  className="panel group p-7 transition-all hover:-translate-y-1 accent-hover-border flex flex-col">
                  <Quote className="mb-6 text-[#3a6a82]" size={23} />
                  <p className="flex-1 text-base leading-7 text-[#e7e9ed]">"{quote}"</p>
                  <div className="mt-6 border-t border-white/[.08] pt-5">
                    <p className="text-sm font-semibold">{role}</p>
                    <p className="text-sm muted">{company}</p>
                    <p className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--accent-light)]">
                      Read the case study <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <NavLink href="/case-studies" navigate={navigate} className="button-ghost">
              View All Case Studies <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQs */}
      <section className="section-space surface-light">
        <div className="container max-w-3xl">
          <SectionHeading align="center" eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="mt-12 border-t border-[var(--line)]">
            {faqs.map(([q, a], i) => (
              <Faq key={q} q={q} a={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Faq({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="icon-box" aria-hidden="true"><Plus size={16} /></span>
      </button>
      <div className="faq-a"><div><p>{a}</p></div></div>
    </div>
  );
}
