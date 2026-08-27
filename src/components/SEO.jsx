import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/content";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.defaultTitle;
  const desc = description || siteConfig.defaultDescription;
  const url = `${siteConfig.siteUrl}${path === "/" ? "" : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={siteConfig.ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={siteConfig.ogImage} />
    </Helmet>
  );
}