import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GoToMarketSystems from './pages/GoToMarketSystems';
import Leadership from './pages/Leadership';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import { pageMeta, getBlogPostMeta, getStructuredData, getBreadcrumbs } from './seo';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  const navigate = (next: string) => {
    if (next.startsWith('#')) {
      document.querySelector(next)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const [pathname, hash] = next.split('#');
    window.history.pushState({}, '', pathname + (hash ? `#${hash}` : ''));
    setPath(pathname);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const isBlogPost = path.startsWith('/blog/') && path !== '/blog';
    const base = isBlogPost ? '/blog' : path;
    const meta = isBlogPost ? getBlogPostMeta(path.slice(6)) : pageMeta[base] || pageMeta['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', window.location.origin + path);

    const sd = document.getElementById('structured-data');
    if (sd) sd.textContent = JSON.stringify(getStructuredData(path));
    const bc = document.getElementById('breadcrumb-data');
    if (bc) bc.textContent = JSON.stringify(getBreadcrumbs(path));
  }, [path]);

  const content =
    path === '/' ? <Home navigate={navigate} /> :
    path === '/go-to-market-systems' ? <GoToMarketSystems /> :
    path === '/leadership' ? <Leadership /> :
    path === '/case-studies' ? <CaseStudies /> :
    path === '/blog' ? <Blog navigate={navigate} /> :
    path.startsWith('/blog/') ? <BlogPost slug={path.slice(6)} navigate={navigate} /> :
    path === '/about' ? <About /> :
    <Home navigate={navigate} />;

  return (
    <div className="page-shell">
      <Header path={path} navigate={navigate} />
      <main>{content}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
