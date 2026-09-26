import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { posts, bookingUrl } from '../data/siteData';

interface Props { slug: string; navigate: (path: string) => void; }

// Renders **figure** as a highlighted statistic in the brand blue.
function highlight(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold accent-text">{part}</strong> : part
  );
}

export default function BlogPost({ slug, navigate }: Props) {
  const post = posts.find(p => p.slug === slug) || posts[0];

  return (
    <div className="pt-[88px]">
      <article className="section-space">
        <div className="container max-w-3xl">
          <button onClick={() => navigate('/blog')} className="mb-12 flex w-fit items-center gap-2 text-sm accent-text">
            <ArrowLeft size={15} /> Back to Blogs &amp; Articles
          </button>
          <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider accent-text">{post.category}</span>
          <h1 className="display mt-6 text-5xl font-bold sm:text-6xl">{post.title}</h1>
          <div className="mt-6 flex items-center gap-3 text-sm muted">
            <span>{post.date}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
          </div>
          <p className="mt-12 text-xl leading-9 text-[#e6e8ec]">{post.excerpt}</p>
          <div className="mt-10 space-y-6 text-[17px] leading-8 text-[#c6cad2]">
            {post.body.map((block, i) => {
              if ('h2' in block) return <h2 key={i} className="display pt-6 text-2xl font-bold text-white sm:text-3xl">{block.h2}</h2>;
              if ('list' in block) return (
                <ul key={i} className="space-y-3">
                  {block.list.map(item => {
                    const [lead, ...rest] = item.split(': ');
                    return (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]" />
                        <span>{rest.length ? <><strong className="font-semibold text-white">{lead}:</strong> {rest.join(': ')}</> : item}</span>
                      </li>
                    );
                  })}
                </ul>
              );
              return <p key={i}>{highlight(block.p)}</p>;
            })}
          </div>
          {post.sources.length > 0 && (
            <div className="mt-14 border-t border-white/[.08] pt-6">
              <p className="mb-3 text-xs uppercase tracking-[.2em] muted">Sources</p>
              <ul className="space-y-1.5 text-sm muted">
                {post.sources.map(src => <li key={src}>{src}</li>)}
              </ul>
            </div>
          )}
          <div className="mt-16 rounded-2xl border border-white/[.1] bg-[#0f1820] p-8">
            <p className="eyebrow mb-3">Continue the conversation</p>
            <h2 className="display text-3xl font-bold">Want to build a better route to revenue?</h2>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary mt-6">
              Discuss Your Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
