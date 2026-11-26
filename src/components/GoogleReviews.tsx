import { ExternalLink, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/whatsapp';
import { Reveal } from './Reveal';

export function GoogleReviews() {
  return (
    <section className="bg-[#EDE8DD] py-20 sm:py-24">
      <div className="editorial-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="editorial-eyebrow block mb-4">Customer Trust</span>

            <div className="flex items-center justify-center gap-1.5 mb-5" aria-label="4.6 out of 5 stars">
              {[0, 1, 2, 3, 4].map((starIndex) => (
                <Star
                  key={starIndex}
                  className={`h-5 w-5 ${
                    starIndex < 4
                      ? 'fill-[#73745D] text-[#73745D]'
                      : 'fill-[#73745D]/60 text-[#73745D]'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-normal text-[#252521] leading-tight">
              Rated {BUSINESS_INFO.googleRating} on Google
            </h2>

            <p className="mt-3 text-base sm:text-lg font-medium tracking-[0.04em] text-[#73745D]">
              {BUSINESS_INFO.googleReviewCount} Customer Reviews
            </p>

            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-[#252521]/75">
              Read authentic feedback shared by homeowners and visitors on our official Google Business Profile.
            </p>

            <div className="mt-8">
              <a
                href={BUSINESS_INFO.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#252521] px-8 py-4 text-xs font-medium uppercase tracking-[0.14em] text-[#FAF8F3] shadow-[0_12px_28px_-10px_rgba(37,37,33,0.3)] transition-all duration-300 hover:bg-[#73745D]"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
