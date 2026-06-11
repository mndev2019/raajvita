import { Helmet } from 'react-helmet';

const Seo = ({ title, description, keywords, image, url }) => {
    const finalUrl = url || "https://www.holsolindia.com/";

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow" />

                {/* ✅ CANONICAL (MOST IMPORTANT) */}
                <link rel="canonical" href={finalUrl} />

                {/* ✅ Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image ?? "https://www.holsolindia.com/assets/newlogocolored-CtaEOQ9B.png"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={finalUrl} />

                <meta name="keywords" content={keywords} />
            </Helmet>

            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "${title}",
                  "description": "${description}",
                  "url": "${finalUrl}"
                }
                `}
            </script>
        </>
    );
};

export default Seo;
