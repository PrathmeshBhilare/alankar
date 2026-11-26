import { ArrowUpRight } from 'lucide-react';
import { BRAND_STORY_MEDIA } from '../data/showroomData';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';

export function BrandStory() {
  const visitUrl = buildWhatsAppUrl(
    'Hello Alankar Home Decor, I would like to know more about visiting your showroom in Nagthane, Satara.'
  );

  return (
    <section id="about" className="bg-[#F5F1E9] py-20 sm:py-28 lg:py-32">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Fluid Editorial Photography */}
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] bg-[#EDE8DD] shadow-[0_24px_60px_-24px_rgba(37,37,33,0.18)]">
                <img
                  src={BRAND_STORY_MEDIA.image}
                  alt={BRAND_STORY_MEDIA.imageAlt}
                  loading="lazy"
                  className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-1 text-[11px] uppercase tracking-[0.18em] text-[#756A5B]">
                <span>Showroom Perspective</span>
                <span>{BUSINESS_INFO.locationShort}</span>
              </div>
            </div>
          </Reveal>

          {/* Editorial Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 lg:pl-6">
            <Reveal>
              <span className="editorial-eyebrow block mb-4">About Alankar Home Decor</span>
              <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-normal leading-[1.08] text-[#252521] mb-8">
                More Than Furniture. <br />
                <span className="italic text-[#73745D]">A Feeling of Home.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-5 border-l-2 border-[#73745D]/45 pl-6 sm:pl-8">
                <p className="text-lg sm:text-xl leading-[1.65] text-[#252521]/90">
                  Every home has its own personality. Discover furniture that complements your space, your taste and the way you live.
                </p>
                <p className="text-[15px] sm:text-base leading-[1.75] text-[#252521]/72">
                  Located at Ghot Jugaiwadi in Nagthane, Satara, Alankar Home Decor offers a calm, welcoming showroom experience—helping households explore sofa proportions, seating arrangements, bedroom furnishings, and decor pieces tailored to everyday living.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 pt-8 border-t border-[#252521]/10 flex flex-wrap items-center gap-7">
                <a
                  href="#custom-sofas"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#252521] hover:text-[#73745D] transition-colors"
                >
                  <span>Explore Custom Sofa Options</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#73745D] hover:text-[#252521] transition-colors"
                >
                  <span>Connect on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
