import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Begin a Conversation</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Begin a quiet dialogue about your project. Every commission starts with listening.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="opacity-0 animate-fade-in-up">
          <h3 className="font-display text-2xl mb-6">Contact Information</h3>
          <div className="space-y-4 text-clay">
            <div>
              <div className="font-medium text-basalt">Studio</div>
              <p className="text-[16px]">California · Est. 2001</p>
            </div>
            <div>
              <div className="font-medium text-basalt">Email</div>
              <p className="text-[16px]">contact@101caststone.com</p>
              <p className="text-sm text-clay italic mt-1">Maison California · Est. 2001</p>
            </div>
            <div>
              <div className="font-medium text-basalt">Phone</div>
              <p className="text-[16px]">(555) 101-STONE</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg2 border border-[#e3d9c8] bg-[#f7f3ed] p-10 shadow-lintel opacity-0 animate-fade-in-up animate-delay-200">
          <h3 className="font-display text-xl mb-4">Project Inquiry</h3>
          <p className="text-[16px] text-clay mb-6 leading-[1.7]">
            Share details about your vision, including timeline, architectural context, and any
            inspiration images or drawings.
          </p>
          <a href="mailto:contact@101caststone.com" className="btn no-underline inline-block">
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
