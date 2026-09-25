import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { bookingUrl } from '../data/siteData';

export const navItems = [
  ['Go To Market Systems', '/go-to-market-systems'],
  ['Company Leadership', '/leadership'],
  ['Case Studies', '/case-studies'],
  ['Blog', '/blog'],
  ['About Us', '/about'],
];

interface HeaderProps { path: string; navigate: (path: string) => void; }

export default function Header({ path, navigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const go = (href: string) => { setOpen(false); navigate(href); };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[.06] bg-[#0a0b0f]/80 backdrop-blur-xl">
      <div className="container flex h-[88px] items-center justify-between gap-8">
        <button onClick={() => go('/')} aria-label="Renvra Group home" className="shrink-0">
          <img src="/Renvra_group_logo_trimmed.png" alt="Renvra Group" className="h-[44px] sm:h-[58px] w-auto max-w-none" />
        </button>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(([label, href]) => (
            <button key={href} onClick={() => go(href)}
              className={`text-[13px] transition-colors ${path === href ? 'text-white' : 'text-[#9aa0ab] hover:text-white'}`}>
              {label}
            </button>
          ))}
        </nav>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex button-primary py-2.5 px-4 text-[13px]">
          Discuss Your Project <ArrowUpRight size={15} />
        </a>
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/[.06] bg-[#0a0b0f] px-5 py-5">
          <nav className="container flex flex-col gap-5">
            {navItems.map(([label, href]) => (
              <button key={href} onClick={() => go(href)} className="text-left text-sm text-[#c7cbd3]">{label}</button>
            ))}
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary justify-center">
              Discuss Your Project <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
