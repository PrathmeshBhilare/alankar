import { ArrowUpRight } from 'lucide-react';
import { COLLECTION_CATEGORIES } from '../data/showroomData';
import { buildCategoryWhatsAppUrl } from '../utils/whatsapp';
import { Reveal, StaggerGrid, StaggerItem } from './Reveal';

export function Collections() {
  return (
    <section id="collections" className="bg-[#FAF8F3] py-20 sm:py-28 lg:py-32">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <Reveal className="max-w-2xl">
            <span className="editorial-eyebrow block mb-3">Curated Categories</span>
            <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-normal leading-[1.08] text-[#252521]">
              Collections for Every <span className="italic text-[#73745D]">Room</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="max-w-md">
            <p className="text-[15px] leading-[1.7] text-[#252521]/72">
              Browse our showroom categories below. Connect with us on WhatsApp to check current floor pieces, custom finishes, and showroom availability.
            </p>
          </Reveal>
        </div>

        {/* 8-Category Borderless Editorial Grid */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12">
          {COLLECTION_CATEGORIES.map((category) => (
            <StaggerItem key={category.id} className="group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden rounded-2xl bg-[#EDE8DD] mb-5 shadow-[0_14px_34px_-18px_rgba(37,37,33,0.18)]">
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                <span className="block text-[10.5px] font-medium uppercase tracking-[0.2em] text-[#756A5B] mb-1.5">
                  {category.subtitle}
                </span>

                <h3 className="editorial-serif text-[1.6rem] font-normal text-[#252521] mb-2 group-hover:text-[#73745D] transition-colors">
                  {category.title}
                </h3>

                <p className="text-sm leading-[1.65] text-[#252521]/72 mb-4">
                  {category.description}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={buildCategoryWhatsAppUrl(category.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#252521] border-b border-[#252521]/25 pb-1 transition-colors hover:text-[#73745D] hover:border-[#73745D]"
                  aria-label={`Explore ${category.title} on WhatsApp`}
                >
                  <span>Explore</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
