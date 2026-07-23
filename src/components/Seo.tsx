import { useEffect } from 'react';

/**
 * Canonical site origin. This MUST match the domain you actually serve and
 * redirect everything else to (see vercel.json / your Cloudflare redirect rule).
 * We use the non-www form to match the existing www -> non-www redirect.
 */
export const SITE_URL = 'https://tsrcargoservice.com';
export const SITE_NAME = 'TSR Cargo Service';
/** Default social-share image (absolute URL). Ideally replace with a 1200x630 banner. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/photo-1494412574643-ff11b0a5eb19.jpg`;

interface SeoProps {
  /** Page title without the brand suffix (brand is appended automatically). */
  title: string;
  description: string;
  /** Path beginning with "/" — used for canonical + og:url. */
  path: string;
  /** Absolute or root-relative image URL. */
  image?: string;
  /** Open Graph type. */
  type?: 'website' | 'article';
  noindex?: boolean;
  /** JSON-LD structured data for this page. */
  jsonLd?: object | object[];
}

function setMeta(key: string, value: string, useProperty = false) {
  const attr = useProperty ? 'property' : 'name';
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data: object | object[] | undefined) {
  const id = 'seo-page-jsonld';
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  const el = (existing as HTMLScriptElement | null) ?? document.createElement('script');
  el.id = id;
  (el as HTMLScriptElement).type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(el);
}

/**
 * Manages per-page document metadata for this client-rendered SPA:
 * title, description, canonical, Open Graph, Twitter Card, robots and JSON-LD.
 * Tags are upserted (never duplicated) so each route gets a clean, unique head.
 */
export function Seo({ title, description, path, image, type = 'website', noindex = false, jsonLd }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const img = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow');
    setLink('canonical', url);

    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:type', type, true);
    setMeta('og:image', img, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_US', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', img);

    setJsonLd(jsonLd);
  }, [title, description, path, image, type, noindex, jsonLd]);

  return null;
}
