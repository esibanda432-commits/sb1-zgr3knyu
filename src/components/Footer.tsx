import { Linkedin } from 'lucide-react';
import { navItems } from './Header';

interface FooterProps { navigate: (path: string) => void; }

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-white/[.08] bg-[#08090c]" id="contact">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] pb-14">
          <div>
            <img src="/Renvra_group_full_logo-removebg-preview.png" alt="Renvra Group" className="h-[56px] w-auto mb-5" />
            <p className="max-w-sm text-sm leading-7 muted">We design and deploy go-to-market systems for businesses ready to create more predictable growth.</p>
          </div>
          <div>
            <p className="eyebrow mb-5">Explore</p>
            <div className="grid gap-3">
              {navItems.map(([label, href]) => (
                <button key={href} onClick={() => navigate(href)} className="text-left text-sm text-[#b0b5bf] hover:text-white transition-colors">{label}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Connect</p>
            <p className="text-sm leading-7 muted mb-5">Follow Renvra Group on LinkedIn for insights and updates.</p>
            <a href="https://www.linkedin.com/company/renvra-group/" target="_blank" rel="noopener noreferrer"
              aria-label="Renvra Group on LinkedIn"
              className="inline-flex items-center gap-2 text-sm text-[#b0b5bf] hover:text-[var(--accent-light)] transition-colors">
              <Linkedin size={19} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/[.08] pt-7">
          <p className="text-xs muted">© {new Date().getFullYear()} Renvra Group</p>
          <a href="https://www.linkedin.com/company/renvra-group/" target="_blank" rel="noopener noreferrer"
            aria-label="Renvra Group on LinkedIn"
            className="text-[#9aa0ab] hover:text-[var(--accent-light)] transition-colors">
            <Linkedin size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
