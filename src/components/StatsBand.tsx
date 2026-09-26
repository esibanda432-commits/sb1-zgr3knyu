import { useEffect, useRef, useState } from 'react';

const TARGET = 1_000_000;
const DURATION = 1800; // ms

function formatPipeline(value: number) {
  if (value >= TARGET) return '£1M+';
  return `£${Math.min(Math.round(value / 1000), 999)}k`;
}

// Pipeline figure counts rapidly from £0 to £1M+ when scrolled into view, then pulses.
function PipelineCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(TARGET); setDone(true); return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(TARGET * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
        else setDone(true);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return (
    <span ref={ref} className={`stat-figure ${done ? 'is-pulsing' : ''}`} aria-label="£1M+">
      {formatPipeline(value)}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <div className="container">
        <div className="mx-auto grid max-w-3xl grid-cols-2">
          <div className="px-4 text-center">
            <PipelineCounter />
            <p className="mt-3 text-xs uppercase tracking-[.2em] muted">Pipeline generated</p>
          </div>
          <div className="border-l border-[var(--line)] px-4 text-center">
            <span className="stat-figure">7</span>
            <p className="mt-3 text-xs uppercase tracking-[.2em] muted">Industries served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
