import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
}

export const SEO = ({
  title = 'ПРАВО НА ПРАВДУ - Центар за грађански надзор',
  description = 'ПРАВО НА ПРАВДУ - Центар за грађански надзор помаже грађанима у борби против корупције, мобинга и непотизма у јавним предузећима и државним институцијама.',
  keywords = 'право, правда, корупција, мобинг, непотизам, грађански надзор, јавна предузећа, државне институције',
  image = '/src/assets/logo.png',
  article = false
}: SEOProps) => {
  const { pathname } = useLocation();
  const siteUrl = window.location.origin;

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="ПРАВО НА ПРАВДУ" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content={article ? 'article' : 'website'} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Serbian" />
      <meta name="author" content="ПРАВО НА ПРАВДУ" />
    </Helmet>
  );
};