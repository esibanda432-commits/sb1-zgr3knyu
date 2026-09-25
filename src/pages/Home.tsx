import { ArrowRight, BarChart3, ChevronDown, MousePointer2, Plus, Quote, Target } from 'lucide-react';
import { bookingUrl, faqs, partnerLogos, heroAvatars, testimonials, testimonialLinks, featuredTestimonialIndices } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';

interface Props { navigate: (path: string) => void; }

export default function Home({ navigate }: Props) {
  const featured = featuredTestimonialIndices.map(i => testimonials[i]);

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
                  className="h-7 w-7 rounded-full object-cover border-2 border-[#0a0b0f]"
                  style={{ marginLeft: i === 0 ? 0 : '-10px' }} />
              ))}
            </div>
            <span className="ml-1">100+ Businesses Served</span>
          </div>
          <h1 className="display reveal mx-auto max-w-5xl text-5xl font-bold sm:text-6xl md:text-8xl">
            Go To Market Systems <span className="accent-text">For Businesses Ready to Scale</span>
          </h1>
          <p className="reveal mx-auto mt-7 max-w-2xl text-lg leading-8 muted">
            We create demand, capture intent and convert it into booked revenue, all within one connected system.
          </p>
          <div className="reveal mt-9">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
              Discuss Your Project <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PARTNER LOGO CAROUSEL */}
      <section className="border-y border-white/[.07] py-10">
        <p className="mb-7 text-center text-xs uppercase tracking-[.2em] text-[#9aa0ab]">Companies that trust us to drive their revenue</p>
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#0a0b0f] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#0a0b0f] after:to-transparent">
          <div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-12">
            {partnerLogos.map((logo, i) => (
              <span key={`${logo.name}-${i}`} className="text-lg font-bold tracking-tight text-[#7a8290] whitespace-nowrap transition-opacity duration-300 hover:text-[#c8ccd2]">
                {logo.name}
              </span>
            ))}
            <style>{'@keyframes marquee{to{transform:translateX(-50%)}}'}</style>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BUILD */}
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="What We Build" title="One System. Deployed to convert sales opportunities into revenue." body="We create demand, capture intent and convert it into booked revenue, all within one connected system." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [Target, '01', 'Create Demand', 'Reach the right people through a considered mix of channels.'],
              [MousePointer2, '02', 'Capture & Convert', 'Turn attention into intent with clear, useful conversion paths.'],
              [BarChart3, '03', 'Close: Booked Revenue', 'Give your team qualified opportunities with context attached.'],
            ].map(([Icon, num, title, body]) => (
              <div className="panel p-7 transition-transform hover:-translate-y-1" key={num as string}>
                <div className="mb-8 flex items-center justify-between">
                  <div className="icon-box"><Icon size={19} /></div>
                  <span className="text-xs text-[#626a78]">{num as string}</span>
                </div>
                <h3 className="text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 muted">{body as string}</p>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/go-to-market-systems')} className="button-ghost mt-8">
            Explore our Go To Market System <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* SECTION 4 — FEATURED CASE STUDIES */}
      <section className="section-space bg-[#0d0f14]">
        <div className="container">
          <SectionHeading eyebrow="Case Studies" title="Feedback From Client Work" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featured.map(([role, company, quote], fi) => {
              const actualIndex = featuredTestimonialIndices[fi];
              return (
                <a key={company} href={`/case-studies#${testimonialLinks[actualIndex]}`}
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
            <button onClick={() => navigate('/case-studies')} className="button-ghost">
              View All Case Studies <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQs */}
      <section className="section-space">
        <div className="container max-w-3xl">
          <SectionHeading align="center" eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="mt-12 divide-y divide-white/[.1] border-y border-white/[.1]">
            {faqs.map(([q, a], i) => <Faq key={q} q={q} a={a} open={i === 0} />)}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/[.1] bg-[#0f1820] px-7 py-16 text-center">
          <div className="glow -right-40 -top-52 h-96 w-96" />
          <div className="relative">
            <p className="eyebrow mb-4">Ready to scale?</p>
            <h2 className="display text-4xl font-bold sm:text-5xl">Build a better route to revenue.</h2>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary mt-8">
              Discuss Your Project <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Faq({ q, a, open }: { q: string; a: string; open: boolean }) {
  return (
    <details open={open} className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold">
        {q}
        <span className="icon-box h-7 w-7 shrink-0">
          <Plus size={16} className="group-open:hidden" />
          <ChevronDown size={16} className="hidden group-open:block" />
        </span>
      </summary>
      <p className="max-w-2xl pt-4 text-sm leading-7 muted">{a}</p>
    </details>
  );
}
