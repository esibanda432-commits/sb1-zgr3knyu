import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const SITE_URL = 'https://renvra-group.com';
const distDir = join(process.cwd(), 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

const routes = [
  { path: '/', title: 'Renvra Group | Go To Market Systems For Businesses Ready to Scale', description: 'Renvra Group designs and deploys go-to-market systems for businesses ready to scale.' },
  { path: '/go-to-market-systems', title: 'Go To Market Systems | Renvra Group', description: 'One connected system to create demand, capture intent and convert opportunities into revenue.' },
  { path: '/leadership', title: 'Company Leadership | Renvra Group', description: 'Meet the leadership behind Renvra Group.' },
  { path: '/case-studies', title: 'Case Studies | Renvra Group', description: 'See how Renvra Group builds systems for better conversations and stronger pipelines.' },
  { path: '/blog', title: 'Blog | Renvra Group', description: 'Practical thinking for businesses building better routes to market.' },
  { path: '/about', title: 'About Us | Renvra Group', description: 'Learn about Renvra Group and our approach to building dependable growth systems.' },
];

const blogPosts = [
  { slug: 'the-modern-b2b-growth-system', title: 'The modern B2B growth system' },
  { slug: 'why-outbound-should-feel-more-like-infrastructure', title: 'Why outbound should feel more like infrastructure' },
  { slug: 'a-practical-guide-to-finding-your-best-fit-accounts', title: 'A practical guide to finding your best-fit accounts' },
  { slug: 'the-customer-journey-is-the-product', title: 'The customer journey is the product' },
  { slug: 'how-to-make-every-enquiry-count', title: 'How to make every enquiry count' },
  { slug: 'building-trust-before-the-first-conversation', title: 'Building trust before the first conversation' },
];

function generatePage(route) {
  let html = template;
  const url = SITE_URL + route.path;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${route.description}$2`);
  html = html.replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${route.title}$2`);
  html = html.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${route.description}$2`);
  html = html.replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${route.title}$2`);
  html = html.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${route.description}$2`);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);

  const navSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: ['Go To Market Systems', 'Company Leadership', 'Case Studies', 'Blog', 'About Us'],
    url: [
      `${SITE_URL}/go-to-market-systems`,
      `${SITE_URL}/leadership`,
      `${SITE_URL}/case-studies`,
      `${SITE_URL}/blog`,
      `${SITE_URL}/about`,
    ],
  };

  let schemas = [navSchema];
  if (route.path === '/') {
    schemas.unshift({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Renvra Group',
      url: SITE_URL,
      logo: `${SITE_URL}/Renvra_group_full_logo-removebg-preview.png`,
      sameAs: ['https://www.linkedin.com/'],
    });
  }

  const crumbs = [{ name: 'Home', url: SITE_URL }];
  if (route.path !== '/') {
    const label = route.title.split(' | ')[0];
    crumbs.push({ name: label, url });
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  html = html.replace(/<script\s+id="structured-data"[^>]*>[^<]*<\/script>/, `<script id="structured-data" type="application/ld+json">${JSON.stringify(schemas)}</script>`);
  html = html.replace(/<script\s+id="breadcrumb-data"[^>]*>[^<]*<\/script>/, `<script id="breadcrumb-data" type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`);

  return html;
}

for (const route of routes) {
  const outDir = route.path === '/' ? distDir : join(distDir, route.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), generatePage(route));
  console.log(`Prerendered: ${route.path}`);
}

for (const post of blogPosts) {
  const postPath = `/blog/${post.slug}`;
  const postDir = join(distDir, 'blog', post.slug);
  mkdirSync(postDir, { recursive: true });
  writeFileSync(join(postDir, 'index.html'), generatePage({
    path: postPath,
    title: `${post.title} | Renvra Group`,
    description: 'A considered look at the systems, decisions and commercial habits that create dependable growth.',
  }));
  console.log(`Prerendered: ${postPath}`);
}

console.log('Prerendering complete.');
