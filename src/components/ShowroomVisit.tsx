import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';

export function ShowroomVisit() {
  const showroomWhatsAppUrl = buildWhatsAppUrl(
    'Hello Alankar Home Decor, I would like to visit your showroom in Nagthane, Satara. Could you share directions or assist me?'
  );

  return (
    <section id="contact" className="bg-[#FAF8F3] py-20 sm:py-28 lg:py-32">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Showroom Details */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="editorial-eyebrow block mb-3">Visit Our Showroom</span>
              <h2 className="editorial-serif text-4xl sm:text-5xl font-normal leading-[1.08] text-[#252521] mb-6">
                Come Experience <br />
                <span className="italic text-[#73745D]">It Yourself.</span>
              </h2>
              <p className="text-[15px] leading-[1.7] text-[#252521]/75 mb-8">
                See sofa proportions, compare seating comfort, and discuss custom upholstery in person at our showroom in Nagthane, Satara.
              </p>

              <div className="space-y-6 border-t border-[#252521]/10 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F1E9] text-[#73745D]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#756A5B] mb-1">
                      Showroom Address
                    </p>
                    <p className="text-base text-[#252521] leading-relaxed">
                      {BUSINESS_INFO.addressLine1}
                      <br />
                      Maharashtra 415519
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F1E9] text-[#73745D]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#756A5B] mb-1">
                      Telephone
                    </p>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="text-lg font-medium text-[#252521] hover:text-[#73745D] transition-colors"
                    >
                      {BUSINESS_INFO.phoneLocalDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-9 pt-6 border-t border-[#252521]/10 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#252521] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#FAF8F3] transition-colors hover:bg-[#73745D]"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Call Showroom</span>
              </a>

              <a
                href={showroomWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#73745D] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#FAF8F3] transition-colors hover:bg-[#5B5C48]"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#252521]/20 bg-[#F5F1E9] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#252521] transition-colors hover:bg-[#EDE8DD]"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </Reveal>

          {/* Rounded Architectural Map Preview */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="h-full min-h-[360px] sm:min-h-[450px] overflow-hidden rounded-3xl bg-[#EDE8DD] shadow-[0_24px_60px_-24px_rgba(37,37,33,0.18)] flex flex-col">
              <div className="relative flex-1 min-h-[330px]">
                <iframe
                  title="Alankar Home Decor Showroom Location Map"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full min-h-[330px] border-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F5F1E9] px-6 py-4 text-xs text-[#252521]/80">
                <span>{BUSINESS_INFO.fullAddress}</span>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium uppercase tracking-[0.14em] text-[#73745D] hover:text-[#252521] transition-colors shrink-0"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
