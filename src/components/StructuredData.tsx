import { shareImage } from "@/app/share-image";

// Only facts the original site states; the founding year and price range are left out until the owner confirms them.
export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://101caststone.com",
    "name": "101 Cast Stone",
    "alternateName": "Maison California",
    "description": "Architectural cast stone from Atascadero, California: fireplace surrounds and mantels, columns, balustrades, architectural trim and stone masonry.",
    "url": "https://101caststone.com",
    "telephone": "+1-805-610-9278",
    "email": "info@101caststone.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1720 El Camino Real",
      "addressLocality": "Atascadero",
      "addressRegion": "CA",
      "postalCode": "93422",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "image": `https://101caststone.com${shareImage.url}`,
    "sameAs": [],
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cast Stone Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Fireplace Mantels",
          "description": "Cast stone fireplace surrounds and mantels in a wide variety of styles"
        },
        {
          "@type": "OfferCatalog",
          "name": "Architectural Elements",
          "description": "Columns, corbels, balustrades, and pilaster caps"
        },
        {
          "@type": "OfferCatalog",
          "name": "Outdoor & Garden",
          "description": "Outdoor fireplaces, fountains, and garden elements"
        },
        {
          "@type": "OfferCatalog",
          "name": "Functional Elements",
          "description": "Kitchen hoods, stair treads, window sills, and wall caps"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
