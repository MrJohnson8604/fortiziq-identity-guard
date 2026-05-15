import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  path: string; // route path, e.g. "/credit-report"
  ogType?: string;
};

const SITE = "https://fortiziq.com";

const SEO = ({ title, description, path, ogType = "website" }: Props) => {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

export default SEO;
