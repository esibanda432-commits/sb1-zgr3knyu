import { posts } from './data/siteData';

const SITE_URL = 'https://renvra-group.com';

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Renvra Group | GTM Systems, Automation & Lead Generation', description: 'Renvra Group builds Go-To-Market systems that generate demand, capture intent and convert it into revenue. Deployed within 14 days.' },
  '/go-to-market-systems': { title: 'Go To Market Systems | Renvra Group', description: 'One connected system to create demand, capture intent and convert opportunities into revenue.' },
  '/leadership': { title: 'Company Leadership | Renvra Group', description: 'Meet the leadership behind Renvra Group.' },
  '/case-studies': { title: 'Case Studies | Renvra Group', description: 'See how Renvra Group builds systems for better conversations and stronger pipelines.' },
  '/blog': { title: 'Blogs & Articles | Renvra Group', description: 'Practical thinking for businesses building better routes to market.' },
  '/about': { title: 'About Us | Renvra Group', description: 'Learn about Renvra Group and our approach to building dependable growth systems.' },
};

export function getBlogPostMeta(slug: string) {
  const post = posts.find(p => p.slug === slug);
  if (!post) return pageMeta['/blog'];
  return { title: `${post.title} | Renvra Group`, description: post.excerpt };
}

export function getStructuredData(path: string): object[] {
  const data: object[] = [];

  if (path === '/') {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Renvra Group',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon-512.png`,
      sameAs: ['https://www.linkedin.com/company/renvra-group/'],
    });
  }

  data.push({
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: ['Go To Market Systems', 'Company Leadership', 'Case Studies', 'Blogs & Articles', 'About Us'],
    url: [
      `${SITE_URL}/go-to-market-systems`,
      `${SITE_URL}/leadership`,
      `${SITE_URL}/case-studies`,
      `${SITE_URL}/blog`,
      `${SITE_URL}/about`,
    ],
  });

  return data;
}

export function getBreadcrumbs(path: string): object {
  const isBlogPost = path.startsWith('/blog/') && path !== '/blog';
  const items: { name: string; url: string }[] = [{ name: 'Home', url: SITE_URL }];

  if (path !== '/') {
    if (isBlogPost) {
      items.push({ name: 'Blogs & Articles', url: `${SITE_URL}/blog` });
      const post = posts.find(p => p.slug === path.slice(6));
      items.push({ name: post?.title || 'Article', url: `${SITE_URL}${path}` });
    } else {
      const label = pageMeta[path]?.title.split(' | ')[0] || 'Page';
      items.push({ name: label, url: `${SITE_URL}${path}` });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
