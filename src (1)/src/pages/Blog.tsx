import { ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { posts } from '../data/siteData';
import NavLink from '../components/NavLink';

interface Props { navigate: (path: string) => void; }

export default function Blog({ navigate }: Props) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="pt-[88px]">
      <section className="section-space pb-12">
        <div className="container">
          <p className="eyebrow mb-5">Ideas for better growth</p>
          <h1 className="display text-5xl font-bold sm:text-6xl">Blogs &amp; Articles</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 muted">Practical thinking for businesses building better routes to market, better customer journeys and more useful systems.</p>
          <div className="mt-10 flex gap-2">
            {['All', 'B2B', 'B2C'].map(item => (
              <button key={item} onClick={() => setFilter(item)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${filter === item ? 'accent-border accent-bg text-white' : 'border-white/[.1] text-[#9aa0ab] hover:text-white'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-light py-20 sm:py-24">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(post => (
          <article key={post.slug} className="panel group overflow-hidden">
            <div className="surface-dark h-48 bg-gradient-to-br from-[#102838] via-[#101923] to-[#1a1d25] p-6">
              <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider accent-text">{post.category}</span>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 text-xs muted">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-current opacity-50" />
                <span className="inline-flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-8 group-hover:accent-text">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 muted">{post.excerpt}</p>
              <NavLink href={`/blog/${post.slug}`} navigate={navigate} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold accent-text">
                Read article <ArrowRight size={15} />
              </NavLink>
            </div>
          </article>
        ))}
        </div>
      </section>
    </div>
  );
}
