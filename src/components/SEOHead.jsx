import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEO_CONFIG = {
  siteName: 'KMTech',
  siteUrl: 'https://kmtechn.github.io',
  defaultImage: '/logo.png',
  twitterHandle: '@kmtechn',
};

const PAGE_META = {
  '/': {
    titleKey: 'hero_title',
    descriptionKey: 'hero_subtitle',
  },
  '/about': {
    titleKey: 'nav_about',
    descriptionKey: 'about_ideology_desc',
  },
  '/business': {
    titleKey: 'nav_business',
    descriptionKey: 'tpl_biz_desc',
  },
  '/partners': {
    titleKey: 'nav_partners',
    descriptionKey: 'core_customers_title',
  },
  '/contact': {
    titleKey: 'nav_contact',
    descriptionKey: 'contact_form_desc',
  },
};

const SEOHead = ({ pathname = '/' }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  useEffect(() => {
    const pageMeta = PAGE_META[pathname] || PAGE_META['/'];
    const title = `${t(pageMeta.titleKey)} | ${SEO_CONFIG.siteName}`;
    const description = t(pageMeta.descriptionKey);
    const canonicalUrl = `${SEO_CONFIG.siteUrl}${pathname}`;
    const imageUrl = `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;

    // Update document title
    document.title = title;

    // Update lang attribute
    document.documentElement.lang = currentLang;

    // Helper function to update or create meta tag
    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to update or create link tag
    const setLink = (rel, href, hreflang = null) => {
      let link = document.querySelector(
        hreflang
          ? `link[rel="${rel}"][hreflang="${hreflang}"]`
          : `link[rel="${rel}"]:not([hreflang])`
      );
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Standard meta tags
    setMeta('description', description);
    setMeta('author', SEO_CONFIG.siteName);

    // Open Graph tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', imageUrl, true);
    setMeta('og:site_name', SEO_CONFIG.siteName, true);
    setMeta('og:locale', currentLang === 'ko' ? 'ko_KR' : currentLang === 'zh' ? 'zh_CN' : currentLang === 'de' ? 'de_DE' : 'en_US', true);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', SEO_CONFIG.twitterHandle);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', imageUrl);

    // Canonical URL
    setLink('canonical', canonicalUrl);

    // Alternate language links
    const languages = ['en', 'ko', 'zh', 'de'];
    languages.forEach((lang) => {
      setLink('alternate', `${SEO_CONFIG.siteUrl}${pathname}?lang=${lang}`, lang);
    });
    setLink('alternate', canonicalUrl, 'x-default');

  }, [pathname, t, currentLang]);

  return null;
};

export default SEOHead;
