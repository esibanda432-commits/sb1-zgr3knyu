import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { posts, bookingUrl } from '../data/siteData';

interface Props { slug: string; navigate: (path: string) => void; }

export default function BlogPost({ slug, navigate }: Props) {
  const post = posts.find(p => p.slug === slug) || posts[0];

  return (
    <div className="pt-[88px]">
      <article className="section-space">
        <div className="container max-w-3xl">
          <button onClick={() => navigate('/blog')} className="mb-12 inline-flex items-center gap-2 text-sm accent-text">
            <ArrowLeft size={15} /> Back to Blog
          </button>
          <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider accent-text">{post.category}</span>
          <h1 className="display mt-6 text-5xl font-bold sm:text-6xl">{post.title}</h1>
          <div className="mt-6 flex items-center gap-3 text-sm muted">
            <span>{post.date}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
          </div>
          <div className="mt-16 space-y-7 text-lg leading-9 text-[#c6cad2]">
            <p>{post.excerpt}</p>
            <p>[PLACEHOLDER: Replace this sample introduction with the full article content. Use this space for an insightful, practical perspective that helps readers make a clearer commercial decision.]</p>
            <h2 className="display pt-5 text-3xl font-bold text-white">A clearer system creates better decisions</h2>
            <p>[PLACEHOLDER: Add the body of the post here. New articles can be added to the shared post data without changing this layout.]</p>
            <p>[PLACEHOLDER: Add a closing perspective, practical next steps and any relevant examples or supporting detail.]</p>
          </div>
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
