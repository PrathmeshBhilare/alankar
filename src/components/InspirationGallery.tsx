import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { GALLERY_INSPIRATIONS, GalleryItem } from '../data/showroomData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';

export function InspirationGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const activeItem: GalleryItem | null =
    activeIndex !== null ? GALLERY_INSPIRATIONS[activeIndex] : null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_INSPIRATIONS.length) % GALLERY_INSPIRATIONS.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_INSPIRATIONS.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id="inspiration" className="bg-[#FAF8F3] py-20 sm:py-28 lg:py-32">
      <div className="editorial-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <Reveal className="max-w-2xl">
            <span className="editorial-eyebrow block mb-3">Lookbook &amp; Spaces</span>
            <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-normal leading-[1.08] text-[#252521]">
              Living Room <span className="italic text-[#73745D]">Inspirations</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-[15px] text-[#252521]/72 leading-[1.7]">
              Explore spatial compositions, tonal palettes, and furniture pairings to help envision how pieces come together at home. Click any photograph to inspect closer.
            </p>
          </Reveal>
        </div>

        {/* Fluid Asymmetrical Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {GALLERY_INSPIRATIONS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.05} className={item.spanClass}>
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-[#EDE8DD] text-left shadow-[0_16px_40px_-20px_rgba(37,37,33,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73745D]"
                aria-label={`View larger photo: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241E18]/85 via-[#241E18]/30 to-transparent p-5 sm:p-6 text-[#FAF8F3]">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-[#FAF8F3]/75 mb-1">
                        {item.spaceType}
                      </span>
                      <h3 className="editorial-serif text-2xl font-normal leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3]/18 backdrop-blur-sm text-[#FAF8F3] transition-transform duration-300 group-hover:scale-110">
                      <Expand className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#241E18]/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl bg-[#FAF8F3] overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#252521]/80 text-[#FAF8F3] hover:bg-[#73745D] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative lg:col-span-8 bg-[#241E18]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.imageAlt}
                    className="max-h-[68vh] w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F3]/90 text-[#252521] hover:bg-[#FAF8F3] transition-colors shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F3]/90 text-[#252521] hover:bg-[#FAF8F3] transition-colors shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="lg:col-span-4 p-7 sm:p-9 flex flex-col justify-between bg-[#FAF8F3] text-[#252521]">
                  <div>
                    <span className="editorial-eyebrow block mb-2">
                      {activeItem.spaceType} · {activeIndex + 1} / {GALLERY_INSPIRATIONS.length}
                    </span>
                    <h3 className="editorial-serif text-3xl font-normal text-[#252521] mb-3">
                      {activeItem.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#252521]/75">
                      {activeItem.caption}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#252521]/10">
                    <a
                      href={buildWhatsAppUrl(
                        `Hello Alankar Home Decor, I liked the "${activeItem.title}" look on your website and would like to explore similar furniture options.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#252521] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-[#FAF8F3] hover:bg-[#73745D] transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Enquire About This Look</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
