import { BadgeIndianRupee, Layers, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { Reveal, StaggerGrid, StaggerItem } from './Reveal';

const VALUE_PILLARS = [
  {
    title: 'Customised Sofa Options',
    description:
      'Choose seating configurations, upholstery shades, and proportions tailored to match your living room layout.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Furniture for Different Spaces',
    description:
      'Thoughtful options suited for compact apartments, family lounges, bedrooms, and formal dining rooms alike.',
    icon: LayoutGrid,
  },
  {
    title: 'Variety of Designs',
    description:
      'Explore contemporary silhouettes, classic sofa sets, recliners, beds, and home accents across varied aesthetics.',
    icon: Layers,
  },
  {
    title: 'Value for Money',
    description:
      'Balanced everyday quality and honest guidance so you invest confidently in pieces suited to your budget.',
    icon: BadgeIndianRupee,
  },
];

export function WhyChooseAlankar() {
  return (
    <section className="bg-[#F5F1E9] py-20 sm:py-28">
      <div className="editorial-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <Reveal className="max-w-xl">
            <span className="editorial-eyebrow block mb-3">The Alankar Approach</span>
            <h2 className="editorial-serif text-4xl sm:text-5xl font-normal leading-[1.08] text-[#252521]">
              Why Choose <span className="italic text-[#73745D]">Alankar</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-[15px] leading-[1.7] text-[#252521]/72">
              Choosing furniture is personal. We focus on options that feel right in your home rather than one-size-fits-all templates.
            </p>
          </Reveal>
        </div>

        {/* Fluid Architectural 4-Column Strip (No Boxy Rectangles) */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {VALUE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem
                key={pillar.title}
                className="group border-t border-[#252521]/15 pt-7 transition-colors duration-300 hover:border-[#73745D]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF8F3] text-[#73745D] shadow-[0_8px_20px_-10px_rgba(37,37,33,0.18)] transition-colors duration-300 group-hover:bg-[#73745D] group-hover:text-[#FAF8F3]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="editorial-serif italic text-xl text-[#A69A89]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="editorial-serif text-2xl font-normal text-[#252521] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-[1.7] text-[#252521]/72">
                  {pillar.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
