import { ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../utils/whatsapp';
import { BrandMark } from './BrandMark';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerWhatsAppUrl = buildWhatsAppUrl(
    'Hello Alankar Home Decor, I found your website and would like to enquire about furniture and custom sofas.'
  );

  return (
    <footer className="bg-[#302820] text-[#F5F1E9] pt-16 pb-10">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F5F1E9]/12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandMark variant="light" />
            <p className="text-sm leading-relaxed text-[#F5F1E9]/75 max-w-sm pt-1">
              Thoughtfully chosen furniture and customised sofa solutions for homes across Nagthane, Satara, and surrounding regions.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#A69A89] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F5F1E9]/80">
              <li>
                <a href="#home" className="hover:text-[#A69A89] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#A69A89] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#custom-sofas" className="hover:text-[#A69A89] transition-colors">
                  Custom Sofas
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A69A89] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A69A89] transition-colors">
                  Contact &amp; Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#A69A89] mb-4">
              Showroom Contact
            </h3>

            <div className="flex items-start gap-2.5 text-sm text-[#F5F1E9]/80">
              <MapPin className="h-4 w-4 text-[#A69A89] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-1">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-sm text-[#F5F1E9] hover:text-[#A69A89] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#A69A89]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#F5F1E9] hover:text-[#A69A89] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#A69A89]" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#A69A89] hover:text-[#F5F1E9] transition-colors"
              >
                <span>
                  Google Business Profile ({BUSINESS_INFO.googleRating} · {BUSINESS_INFO.googleReviewCount} Reviews)
                </span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5F1E9]/55">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>{BUSINESS_INFO.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
