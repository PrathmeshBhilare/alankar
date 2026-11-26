import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../utils/whatsapp';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Custom Sofas', href: '#custom-sofas' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const generalEnquiryUrl = buildWhatsAppUrl(
    'Hello Alankar Home Decor, I would like to enquire about your furniture and customised sofa options.'
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#252521]/10 shadow-[0_8px_30px_-20px_rgba(37,37,33,0.18)]'
          : 'bg-[#FAF8F3]/95 border-b border-transparent'
      }`}
    >
      <div className="editorial-container flex h-[78px] items-center justify-between gap-4">
        <a
          href="#home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73745D] rounded-md"
          aria-label="Alankar Home Decor Home"
        >
          <BrandMark variant="dark" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[13.5px] font-medium tracking-[0.02em] text-[#252521]/80 transition-colors hover:text-[#252521] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#73745D] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={generalEnquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#252521] px-6 py-2.5 text-xs font-medium tracking-[0.06em] text-[#FAF8F3] transition-all duration-300 hover:bg-[#73745D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73745D]"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Enquire Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#252521]/15 text-[#252521] transition-colors hover:bg-[#EDE8DD] lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-x-0 top-[78px] bottom-0 z-50 bg-[#FAF8F3] border-t border-[#252521]/10 lg:hidden overflow-y-auto"
          >
            <div className="editorial-container flex flex-col justify-between min-h-full py-8">
              <nav className="flex flex-col divide-y divide-[#252521]/10" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="editorial-serif py-5 text-3xl font-normal text-[#252521] transition-colors hover:text-[#73745D]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-10 border-t border-[#252521]/10 pt-6 space-y-3.5">
                <a
                  href={generalEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#252521] px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-[#FAF8F3] transition-colors hover:bg-[#73745D]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex w-full items-center justify-center rounded-full border border-[#252521]/20 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#252521]"
                >
                  Call {BUSINESS_INFO.phoneLocalDisplay}
                </a>
                <p className="text-center text-xs text-[#756A5B] pt-1">
                  {BUSINESS_INFO.fullAddress}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
