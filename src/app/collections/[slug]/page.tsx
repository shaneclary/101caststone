import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClosingCta from "@/components/ClosingCta";
import PhotoGallery from "@/components/PhotoGallery";
import ProductSpec from "@/components/ProductSpec";
import { getProductEntry, isFireplaceProduct, productEntries, relatedProducts } from "@/data/products";

const SITE_URL = "https://101caststone.com";

type Params = { slug: string };

// Every piece is generated at build time; any other /collections/<slug> is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return productEntries.map(({ slug }) => ({ slug }));
}

// Overrides the "/collections" canonical set by the segment layout.
export function generateMetadata({ params }: { params: Params }): Metadata {
  const entry = getProductEntry(params.slug);
  if (!entry) return {};
  return {
    title: `${entry.product.name} — ${entry.collection.title}`,
    description: entry.product.description,
    alternates: { canonical: `/collections/${entry.slug}` },
  };
}

export default function ProductPage({ params }: { params: Params }) {
  const entry = getProductEntry(params.slug);
  if (!entry) notFound();

  const { product, collection, collectionKey, slug } = entry;
  const isMantel = collectionKey === "mantels";
  const isFireplace = isFireplaceProduct(slug);
  const collectionHref = `/collections#${collectionKey}`;
  const related = relatedProducts(entry);

  // Product facts only: no offers, prices or ratings.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.image, ...(product.gallery ?? []).map((photo) => photo.src)].map((src) => `${SITE_URL}${src}`),
    brand: { "@type": "Brand", name: "101 Cast Stone" },
    category: collection.title,
    url: `${SITE_URL}/collections/${slug}`,
  };

  return (
    <div className="bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
      />

      <section className="pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-clay">
              <li>
                <Link href="/collections" className="text-link">
                  Collections
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">›</span>
                <Link href={collectionHref} className="text-link">
                  {collection.title}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">›</span>
                <span aria-current="page" className="text-basalt">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-8 md:grid md:grid-cols-12 md:items-start md:gap-12 lg:gap-16">
            {/* Photos: contained (never cropped) on a toned panel that also shows while they load */}
            <div className="md:col-span-7">
              {product.gallery && product.gallery.length > 0 ? (
                <PhotoGallery
                  photos={product.gallery}
                  label={`${product.name} photos`}
                  frameClassName="aspect-[4/3] rounded"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
                  <Image
                    src={product.image}
                    alt={`${product.name} – ${collection.title}, cast stone`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
                  />
                </div>
              )}
            </div>

            <div className="mt-10 md:col-span-5 md:mt-0">
              <p className="eyebrow">
                {product.style} · {collection.title}
              </p>
              <h1 className="mt-3 text-balance">{product.name}</h1>
              <p className="mt-6 text-lead text-clay">{product.description}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/contact?product=${encodeURIComponent(product.name)}#inquiry`} className="btn btn-primary">
                  Inquire About This Piece
                </Link>
                <a href="#specification" className="btn btn-secondary">
                  Specification
                </a>
              </div>
              <p className="mt-6 text-small">
                <Link href={collectionHref} className="text-link font-medium">
                  All {collection.title}&nbsp;<span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full width so the label/value columns have room from md up */}
      <section id="specification" className="border-t border-ecru bg-ecru/50 py-16 md:py-24">
        <div className="wrap">
          <ProductSpec
            isMantel={isMantel}
            isFireplace={isFireplace}
            headingLevel={2}
            layout="columns"
            headingClassName="mb-8"
            className="max-w-3xl"
          />
          <p className="mt-6 max-w-3xl text-small text-clay">
            Architects and installers:{" "}
            <Link href="/technical-info" className="text-link underline decoration-nickel underline-offset-4">
              technical documents
            </Link>
            .
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="wrap">
            <h2 className="mb-10 text-heading md:text-heading">More {collection.title}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
              {related.map(({ slug: relatedSlug, product: other }) => (
                <li key={relatedSlug}>
                  <Link href={`/collections/${relatedSlug}`} className="group block no-underline">
                    <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
                      <Image
                        src={other.image}
                        alt=""
                        fill
                        className="img-drift object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                      />
                    </div>
                    <p className="eyebrow mt-4">{other.style}</p>
                    <h3 className="mt-1 text-xl text-basalt group-hover:text-sienna-700">{other.name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ClosingCta
        heading={`Begin a conversation about the ${product.name}.`}
        body="Tell us about the room and the opening, or the garden and the site. Our design team will work through the piece with you, in the color and texture you choose."
      />
    </div>
  );
}
