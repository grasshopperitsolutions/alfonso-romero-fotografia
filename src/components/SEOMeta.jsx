import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEOMeta = ({ page = 'home' }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'es';
  
  const seoData = t(`seo.${page}`, { returnObjects: true });
  const siteData = t('seo.site', { returnObjects: true });
  const personData = t('seo.person', { returnObjects: true });
  
  const url = `${siteData.url}${page !== 'home' ? `/${page}` : ''}`;
  const canonicalUrl = url;
  
  // Generate hreflang links
  const hreflangLinks = [
    { lang: 'es', url: `${siteData.url}${page !== 'home' ? `/${page}` : ''}` },
    { lang: 'en', url: `${siteData.url}${currentLang === 'en' ? `/${page}` : `/${page}`}` }
  ];

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": personData.name,
        "alternateName": personData.alternateName,
        "jobTitle": personData.jobTitle,
        "description": personData.description,
        "url": siteData.url,
        "sameAs": [
          "https://instagram.com/alfonsoromero",
          "https://linkedin.com/in/alfonsoromero"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": siteData.name,
        "description": siteData.description,
        "url": siteData.url,
        "image": `${siteData.url}/assets/home.jpeg`,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.4168",
          "longitude": "-3.7038"
        }
      },
      {
        "@type": "WebSite",
        "name": siteData.name,
        "description": siteData.description,
        "url": siteData.url,
        "inLanguage": currentLang,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteData.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content={personData.name} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags */}
      {hreflangLinks.map((link) => (
        <link 
          key={link.lang} 
          rel="alternate" 
          hrefLang={link.lang} 
          href={link.url} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={siteData.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteData.name} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={`${siteData.url}/assets/home.jpeg`} />
      <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={`${siteData.url}/assets/home.jpeg`} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOMeta;