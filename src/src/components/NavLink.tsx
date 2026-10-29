import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  navigate: (path: string) => void;
  children: ReactNode;
}

// A real <a href> (crawlable by search engines) that still navigates instantly in the app.
export default function NavLink({ href, navigate, children, onClick, ...rest }: Props) {
  return (
    <a
      href={href}
      onClick={e => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
