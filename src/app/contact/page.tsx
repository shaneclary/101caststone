import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Begin a Conversation</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Every commission starts with listening. Share your vision, and we&apos;ll craft something extraordinary together.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="opacity-0 animate-fade-in-up">
          <h3 className="font-display text-2xl mb-8 text-basalt">Contact Information</h3>

          <div className="space-y-6 text-clay">
            <div>
              <div className="font-medium text-basalt mb-1">Studio Location</div>
              <p className="text-[16px] leading-relaxed">
                1720 El Camino Real<br />
                Atascadero, CA 93422
              </p>
            </div>

            <div>
              <div className="font-medium text-basalt mb-1">Phone</div>
              <a
                href="tel:+18056109278"
                className="text-[16px] text-sienna hover:text-basalt transition-colors"
              >
                (805) 610-9278
              </a>
            </div>

            <div>
              <div className="font-medium text-basalt mb-1">Email</div>
              <a
                href="mailto:info@101caststone.com"
                className="text-[16px] text-sienna hover:text-basalt transition-colors"
              >
                info@101caststone.com
              </a>
            </div>

            <div className="pt-4 border-t border-ecru">
              <div className="font-medium text-basalt mb-1">Hours</div>
              <p className="text-[16px] leading-relaxed">
                Monday – Friday: 8am – 5pm<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>

            <div className="pt-4 border-t border-ecru">
              <p className="text-[15px] text-clay/80 italic leading-relaxed">
                Serving California and nationwide since 2001. We welcome visits to our Atascadero studio
                to view samples and discuss your project in person.
              </p>
            </div>
          </div>
        </div>

        {/* Email CTA */}
        <div className="opacity-0 animate-fade-in-up animate-delay-200">
          <div className="rounded-lg border border-[#e3d9c8] bg-[#f7f3ed] p-8 md:p-10 shadow-lintel">
            <h3 className="font-display text-2xl mb-4 text-basalt">Project Inquiry</h3>
            <p className="text-[16px] text-clay mb-6 leading-[1.7]">
              Share details about your vision, including timeline, architectural context, and any
              inspiration images or drawings.
            </p>
            <a
              href="mailto:info@101caststone.com?subject=Project%20Inquiry"
              className="btn no-underline inline-block"
            >
              Send Email
            </a>
            <p className="text-[13px] text-clay/70 mt-4">
              We typically respond within 1-2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
