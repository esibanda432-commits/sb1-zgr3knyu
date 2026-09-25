import { ArrowUpRight, Linkedin } from 'lucide-react';
import { founderHeadshot } from '../data/siteData';

export default function Leadership() {
  return (
    <div className="pt-[88px]">
      <section className="section-space">
        <div className="container">
          <p className="eyebrow mb-5">The people behind the system</p>
          <h1 className="display text-5xl font-bold sm:text-6xl">Company Leadership</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 muted">Renvra Group exists to make growth feel less like a collection of tactics and more like a system the whole business can understand.</p>

          <div className="mt-24 grid items-center gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="glow -left-24 -top-20 h-80 w-80" />
              <img
                src={founderHeadshot}
                alt="Emmanuel Sibanda, Founder and CEO of Renvra Group"
                className="relative aspect-[4/5] w-full rounded-2xl border border-white/[.12] object-cover"
                style={{ maxWidth: '360px' }}
              />
            </div>
            <div>
              <p className="eyebrow mb-4">Vision</p>
              <h2 className="display text-4xl font-bold">Make the path to growth clearer.</h2>
              <p className="mt-6 leading-8 muted">Renvra Group exists to make growth feel less like a collection of tactics and more like a system the whole business can understand. We believe strong commercial outcomes are built on strong systems, and our work is grounded in bringing that discipline to every partner we serve.</p>

              <div className="mt-10 border-t border-white/[.1] pt-8">
                <h3 className="text-2xl font-semibold">Emmanuel Sibanda</h3>
                <p className="mt-1 accent-text">Founder & CEO</p>
                <p className="mt-5 leading-7 muted">Emmanuel Sibanda is the Founder and CEO of Renvra Group. He brings a background in project management within global automotive companies, where he delivered complex projects in some of the most demanding, process-driven environments in the world.</p>
                <p className="mt-4 leading-7 muted">That experience shaped his core conviction: strong commercial outcomes are built on strong systems. At Renvra Group, Emmanuel applies the same discipline, structure and attention to detail to business growth, designing acquisition systems that are precise, measurable and built to scale.</p>
                <p className="mt-4 leading-7 muted">Passionate about improving systems and dedicated to delivering tangible results, Emmanuel works closely with every partner to ensure their Go To Market System drives real, lasting revenue growth.</p>
                <a href="https://www.linkedin.com/in/emmanuel-sibanda-6b39b1244" target="_blank" rel="noopener noreferrer" className="button-ghost mt-7">
                  <Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
