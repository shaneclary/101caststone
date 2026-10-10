import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhotoGallery from "@/components/PhotoGallery";
import ProductSpec, { ProductOptions } from "@/components/ProductSpec";
import SectionTitle from "@/components/SectionTitle";
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

      <section className="pt-10 md:pt-14 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-clay">
              <li>
                <Link href="/collections" className="text-sienna-700 hover:text-basalt transition-colors">
                  Collections
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">›</span>
                <Link href={collectionHref} className="text-sienna-700 hover:text-basalt transition-colors">
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

          <SectionTitle>{product.name}</SectionTitle>

          {/* /[0.08] not /10: on ivory a 10% tint leaves sienna-700 text at 4.499:1 */}
          <div className="mt-8 text-sm text-sienna-700 bg-sienna/[0.08] px-3 py-1 rounded inline-block">{product.style}</div>

          <div className="mt-8 md:flex md:items-start md:gap-10 lg:gap-14">
            {/* Photos: contained (never cropped) on a toned panel that also shows while they load */}
            <div className="md:w-7/12">
              {product.gallery && product.gallery.length > 0 ? (
                <PhotoGallery
                  photos={product.gallery}
                  label={`${product.name} photos`}
                  frameClassName="aspect-[4/3] rounded-lg"
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority
                />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ivory-200">
                  <Image
                    src={product.image}
                    alt={`${product.name} – ${collection.title}, cast stone`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                  />
                </div>
              )}
            </div>

            <div className="mt-10 md:mt-0 md:w-5/12">
              <p className="text-[18px] text-clay leading-[1.85]">{product.description}</p>

              <ProductOptions isFireplace={isFireplace} headingLevel={2} className="mt-8" />

              <div className="mt-10 flex flex-col items-start gap-5">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}#inquiry`}
                  className="block w-full sm:inline-block sm:w-auto text-center px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
                >
                  Inquire About This Piece
                </Link>
                <Link href={collectionHref} className="text-[15px] text-sienna-700 hover:text-basalt transition-colors">
                  View all {collection.title}&nbsp;<span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full width so the label/value columns have room from md up */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <ProductSpec
            isMantel={isMantel}
            isFireplace={isFireplace}
            headingLevel={2}
            layout="columns"
            headingClassName="font-display text-2xl tracking-normal text-basalt mb-6"
            className="max-w-3xl"
          />
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-[#f5efe4]">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-2xl tracking-normal text-basalt mb-8">More {collection.title}</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(({ slug: relatedSlug, product: other }) => (
                <li key={relatedSlug}>
                  <Link
                    href={`/collections/${relatedSlug}`}
                    className="group block h-full overflow-hidden rounded-lg bg-white border border-[#e8dfcf] no-underline hover:shadow-xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5efe4]"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-clay/5 to-sienna/5">
                      <Image
                        src={other.image}
                        alt=""
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl text-clay">{other.name}</h3>
                      <span className="mt-2 inline-block text-xs text-sienna-700 bg-sienna/10 px-2 py-1 rounded">{other.style}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
