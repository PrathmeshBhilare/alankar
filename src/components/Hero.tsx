import { ArrowRight, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { HERO_MEDIA } from '../data/showroomData';
import { BUSINESS_INFO } from '../utils/whatsapp';

export function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeProps = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="home" className="relative bg-[#FAF8F3] pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Typography Column */}
          <div className="lg:col-span-5 space-y-7 lg:pr-4">
            <motion.div {...fadeProps(0)} className="space-y-3">
              <p className="editorial-eyebrow">
                Your Furniture Destination in Nagthane, Satara
              </p>
              <div className="flex items-center gap-2.5 text-xs font-medium text-[#73745D]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#73745D]" />
                <span>{BUSINESS_INFO.positioning}</span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeProps(0.1)}
              className="editorial-serif text-[2.95rem] sm:text-[4rem] lg:text-[4.4rem] xl:text-[5rem] font-normal leading-[1.01] tracking-[-0.02em] text-[#252521]"
            >
              Comfort, <br />
              <span className="italic text-[#73745D]">Crafted</span> <br />
              Around You.
            </motion.h1>

            <motion.p
              {...fadeProps(0.18)}
              className="text-base sm:text-[17px] leading-[1.7] text-[#252521]/78 max-w-md"
            >
              Discover thoughtfully designed furniture and customised sofas that bring your vision of home to life.
            </motion.p>

            <motion.div {...fadeProps(0.24)} className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#collections"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#252521] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#FAF8F3] transition-all duration-300 hover:bg-[#73745D] shadow-[0_12px_28px_-10px_rgba(37,37,33,0.35)]"
              >
                <span>Explore Collections</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <a
                href="#custom-sofas"
                className="inline-flex items-center gap-2 rounded-full border border-[#252521]/20 bg-[#F5F1E9] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#252521] transition-all duration-300 hover:border-[#252521]/50 hover:bg-[#EDE8DD]"
              >
                <span>Customise Your Sofa</span>
              </a>
            </motion.div>

            <motion.div
              {...fadeProps(0.3)}
              className="pt-5 border-t border-[#252521]/10 flex flex-wrap items-center gap-4 text-xs text-[#756A5B]"
            >
              <a
                href={BUSINESS_INFO.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#252521] hover:text-[#73745D] transition-colors"
              >
                <Star className="h-3.5 w-3.5 fill-[#73745D] text-[#73745D]" aria-hidden="true" />
                <span>Rated {BUSINESS_INFO.googleRating} on Google</span>
                <span className="text-[#756A5B] font-normal">
                  ({BUSINESS_INFO.googleReviewCount} Reviews)
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Sculptural Living Room Sofa Showcase (Sofa Centered Above the Fold) */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[26px] bg-[#EDE8DD] shadow-[0_28px_70px_-25px_rgba(37,37,33,0.22)]">
              <img
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.imageAlt}
                className="h-[360px] sm:h-[480px] lg:h-[580px] xl:h-[620px] w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
