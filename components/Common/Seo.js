// components/SEO.js

import Head from "next/head";

const SEO = ({ title, description, keywords, author, image }) => {
  const siteName = "Reham Emam"; // Your site name

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta
        name="description"
        content={description || "Your default description here."}
      />
      <meta
        name="keywords"
        content={keywords || "local brands, community, diversity"}
      />
      <meta name="author" content={author || "Your Name"} />
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title || siteName} />
      <meta
        property="og:description"
        content={description || "Your default description here."}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourwebsite.com" />{" "}
      {/* Replace with your actual URL */}
      <meta
        property="og:image"
        content={image || "https://yourwebsite.com/og-image.jpg"}
      />{" "}
      {/* Replace with your actual image URL */}
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourtwitterhandle" />{" "}
      {/* Replace with your Twitter handle */}
      <meta name="twitter:title" content={title || siteName} />
      <meta
        name="twitter:description"
        content={description || "Your default description here."}
      />
      <meta
        name="twitter:image"
        content={image || "https://yourwebsite.com/twitter-image.jpg"}
      />{" "}
      {/* Replace with your actual image URL */}
    </Head>
  );
};

export default SEO;
