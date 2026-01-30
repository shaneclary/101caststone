export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://101caststone.com",
    "name": "101 Cast Stone",
    "alternateName": "Maison California",
    "description": "Architectural cast stone from California. Hand-crafted fireplace mantels, columns, balustrades, and custom stonework since 2001.",
    "url": "https://101caststone.com",
    "telephone": "+1-805-610-9278",
    "email": "info@101caststone.com",
    "foundingDate": "2001",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1720 El Camino Real",
      "addressLocality": "Atascadero",
      "addressRegion": "CA",
      "postalCode": "93422",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.4894,
      "longitude": -120.6707
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$$",
    "image": "https://101caststone.com/images/hero/winecountry.jpg",
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
          "description": "Hand-carved limestone mantels with classical proportions"
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
