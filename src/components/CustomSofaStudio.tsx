import { FormEvent, useRef, useState } from 'react';
import { ArrowUpRight, Check, CheckCircle2, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { CUSTOM_SOFA_STYLES } from '../data/showroomData';
import {
  buildCustomSofaEnquiryMessage,
  buildSofaStyleWhatsAppUrl,
  buildWhatsAppUrl,
} from '../utils/whatsapp';
import { Reveal } from './Reveal';

interface FormErrors {
  customerName?: string;
  phoneNumber?: string;
  sofaType?: string;
}

export function CustomSofaStudio() {
  const formRef = useRef<HTMLFormElement>(null);

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sofaType, setSofaType] = useState(CUSTOM_SOFA_STYLES[0].name);
  const [preferredFabricColour, setPreferredFabricColour] = useState('');
  const [approximateSize, setApproximateSize] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);
  const [preparedSummary, setPreparedSummary] = useState<string>('');

  const handleSelectStyle = (styleName: string) => {
    setSofaType(styleName);
    setErrors((prev) => ({ ...prev, sofaType: undefined }));
    setPreparedWhatsAppUrl(null);
  };

  const handleCustomiseStyleClick = (styleName: string) => {
    handleSelectStyle(styleName);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (customerName.trim().length < 2) {
      nextErrors.customerName = 'Please enter your name.';
    }

    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const isValidIndianPhone =
      digitsOnly.length === 10 ||
      (digitsOnly.length === 11 && digitsOnly.startsWith('0')) ||
      (digitsOnly.length === 12 && digitsOnly.startsWith('91'));

    if (!isValidIndianPhone) {
      nextErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    if (!sofaType.trim()) {
      nextErrors.sofaType = 'Please select a sofa type.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPreparedWhatsAppUrl(null);
      return;
    }

    setErrors({});
    const formattedMessage = buildCustomSofaEnquiryMessage({
      customerName,
      phoneNumber,
      sofaType,
      preferredFabricColour,
      approximateSize,
      additionalRequirements,
    });

    const whatsappUrl = buildWhatsAppUrl(formattedMessage);
    setPreparedWhatsAppUrl(whatsappUrl);
    setPreparedSummary(formattedMessage);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setCustomerName('');
    setPhoneNumber('');
    setPreferredFabricColour('');
    setApproximateSize('');
    setAdditionalRequirements('');
    setErrors({});
    setPreparedWhatsAppUrl(null);
    setPreparedSummary('');
  };

  return (
    <section
      id="custom-sofas"
      className="relative bg-[#302820] text-[#F5F1E9] py-20 sm:py-28 lg:py-32"
    >
      <div className="editorial-container">
        {/* Top Atelier Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 lg:pb-16 border-b border-[#F5F1E9]/12">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#3D3329] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#EDE8DD] mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#A69A89]" aria-hidden="true" />
              <span>Bespoke Sofa Studio · Nagthane, Satara</span>
            </div>
            <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-[3.85rem] font-normal leading-[1.04] text-[#F5F1E9]">
              Your Sofa. <span className="italic text-[#A69A89]">Your Style.</span> Your Space.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-base sm:text-[17px] leading-[1.7] text-[#F5F1E9]/80">
              Looking for something that fits your home perfectly? Explore customised sofa possibilities designed around your preferences.
            </p>
          </Reveal>
        </div>

        {/* Main Studio Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-14 pt-12 lg:pt-16 items-start">
          {/* Left: 6 Borderless Editorial Sofa Style Cards */}
          <div className="xl:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#A69A89]">
                1. Choose a Sofa Silhouette
              </h3>
              <span className="text-xs text-[#F5F1E9]/60">
                Select any style to sync with your enquiry
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {CUSTOM_SOFA_STYLES.map((style) => {
                const isSelected = sofaType.toLowerCase() === style.name.toLowerCase();
                return (
                  <div key={style.id} className="group flex flex-col">
                    <button
                      type="button"
                      onClick={() => handleCustomiseStyleClick(style.name)}
                      className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A69A89] rounded-2xl"
                    >
                      <div
                        className={`relative overflow-hidden rounded-2xl bg-[#241E18] transition-all duration-300 ${
                          isSelected
                            ? 'ring-2 ring-[#F5F1E9] ring-offset-4 ring-offset-[#302820]'
                            : 'ring-1 ring-[#F5F1E9]/10 group-hover:ring-[#A69A89]/50'
                        }`}
                      >
                        <img
                          src={style.image}
                          alt={style.imageAlt}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        {isSelected && (
                          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-[#FAF8F3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#252521] shadow-md">
                            <Check className="h-3 w-3" aria-hidden="true" />
                            Selected
                          </span>
                        )}
                      </div>

                      <div className="pt-4 px-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="editorial-serif text-2xl font-normal capitalize text-[#F5F1E9] group-hover:text-[#A69A89] transition-colors">
                            {style.name}
                          </h4>
                          <span className="text-[10.5px] uppercase tracking-[0.18em] text-[#A69A89] shrink-0">
                            {style.tagline}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[#F5F1E9]/68 leading-relaxed">
                          Ideal for {style.idealFor.toLowerCase()}
                        </p>
                      </div>
                    </button>

                    <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] uppercase tracking-[0.14em]">
                      <button
                        type="button"
                        onClick={() => handleCustomiseStyleClick(style.name)}
                        className={`font-medium transition-colors ${
                          isSelected ? 'text-[#F5F1E9]' : 'text-[#A69A89] hover:text-[#F5F1E9]'
                        }`}
                      >
                        {isSelected ? '✓ Active in Form' : 'Select Style'}
                      </button>
                      <a
                        href={buildSofaStyleWhatsAppUrl(style.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#F5F1E9]/70 hover:text-[#F5F1E9] transition-colors"
                      >
                        <span>Quick Chat</span>
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Refined Atelier Enquiry Sheet (No Cramped Boxes, No Misaligned Labels) */}
          <div className="xl:col-span-5 xl:sticky xl:top-24">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-[#FAF8F3] text-[#252521] p-7 sm:p-9 lg:p-10 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-7">
                <span className="editorial-eyebrow block mb-2">2. Customisation Brief</span>
                <h3 className="editorial-serif text-3xl sm:text-[2.1rem] font-normal text-[#252521] leading-tight">
                  Tailor Your Sofa
                </h3>
                <p className="mt-2 text-sm text-[#252521]/68 leading-relaxed">
                  Share your space preferences below to start a tailored WhatsApp conversation with our showroom team.
                </p>
              </div>

              <div className="space-y-5">
                {/* Customer Name */}
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-xs font-medium text-[#252521]/85 mb-1.5"
                  >
                    Your Name <span className="text-[#73745D]">*</span>
                  </label>
                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (errors.customerName) setErrors((p) => ({ ...p, customerName: undefined }));
                    }}
                    placeholder="e.g., Rohan Kulkarni"
                    className="w-full rounded-xl border border-[#252521]/15 bg-[#F5F1E9]/70 px-4 py-3 text-[15px] text-[#252521] placeholder:text-[#756A5B]/60 focus:border-[#73745D] focus:bg-white focus:outline-none transition-all"
                    aria-invalid={Boolean(errors.customerName)}
                  />
                  {errors.customerName && (
                    <p className="mt-1.5 text-xs text-red-700" role="alert">
                      {errors.customerName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-medium text-[#252521]/85 mb-1.5"
                  >
                    Phone / WhatsApp Number <span className="text-[#73745D]">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors((p) => ({ ...p, phoneNumber: undefined }));
                    }}
                    placeholder="e.g., 98220 XXXXX"
                    className="w-full rounded-xl border border-[#252521]/15 bg-[#F5F1E9]/70 px-4 py-3 text-[15px] text-[#252521] placeholder:text-[#756A5B]/60 focus:border-[#73745D] focus:bg-white focus:outline-none transition-all"
                    aria-invalid={Boolean(errors.phoneNumber)}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1.5 text-xs text-red-700" role="alert">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Sofa Type */}
                <div>
                  <label
                    htmlFor="sofaType"
                    className="block text-xs font-medium text-[#252521]/85 mb-1.5"
                  >
                    Sofa Type <span className="text-[#73745D]">*</span>
                  </label>
                  <select
                    id="sofaType"
                    name="sofaType"
                    value={sofaType}
                    onChange={(e) => handleSelectStyle(e.target.value)}
                    className="w-full rounded-xl border border-[#252521]/15 bg-[#F5F1E9]/70 px-4 py-3 text-[15px] text-[#252521] focus:border-[#73745D] focus:bg-white focus:outline-none transition-all"
                  >
                    {CUSTOM_SOFA_STYLES.map((style) => (
                      <option key={style.id} value={style.name}>
                        {style.name.charAt(0).toUpperCase() + style.name.slice(1)}
                      </option>
                    ))}
                    <option value="Custom Configuration">Other / Custom Configuration</option>
                  </select>
                  {errors.sofaType && (
                    <p className="mt-1.5 text-xs text-red-700" role="alert">
                      {errors.sofaType}
                    </p>
                  )}
                </div>

                {/* Aligned 2-Column Row (Single-Line Labels + items-end) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                  <div>
                    <label
                      htmlFor="preferredFabricColour"
                      className="block text-xs font-medium text-[#252521]/85 mb-1.5 whitespace-nowrap"
                    >
                      Fabric / Colour
                    </label>
                    <input
                      id="preferredFabricColour"
                      name="preferredFabricColour"
                      type="text"
                      value={preferredFabricColour}
                      onChange={(e) => setPreferredFabricColour(e.target.value)}
                      placeholder="e.g., Warm Ivory Linen"
                      className="w-full rounded-xl border border-[#252521]/15 bg-[#F5F1E9]/70 px-4 py-3 text-[15px] text-[#252521] placeholder:text-[#756A5B]/60 focus:border-[#73745D] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="approximateSize"
                      className="block text-xs font-medium text-[#252521]/85 mb-1.5 whitespace-nowrap"
                    >
                      Approximate Size
                    </label>
                    <input
                      id="approximateSize"
                      name="approximateSize"
                      type="text"
                      value={approximateSize}
                      onChange={(e) => setApproximateSize(e.target.value)}
                      placeholder="e.g., 8 ft × 6 ft"
                      className="w-full rounded-xl border border-[#252521]/15 bg-[#F5F1E9]/70 px-4 py-3 text-[15px] text-[#252521] placeholder:text-[#756A5B]/60 focus:border-[#73745D] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label
                    htmlFor="additionalRequirements"
                    className="block text-xs font-medium text-[#252521]/85 mb-1.5"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalRequirements"
                    name="additionalRequirements"
                    rows={3}
                    value={additionalRequirements}
                    onChange={(e) => setAdditionalRequirements(e.target.value)}
                    placeholder="Corner direction (left/right), seating depth, or room dimensions..."
                    className="w-full rounded-xl border border-[#252521]/15 bg-[#F5F1E9]/70 px-4 py-3 text-[15px] text-[#252521] placeholder:text-[#756A5B]/60 focus:border-[#73745D] focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#252521] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF8F3] shadow-[0_12px_28px_-10px_rgba(37,37,33,0.35)] transition-all duration-300 hover:bg-[#73745D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73745D]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Discuss Your Custom Sofa</span>
                </button>
              </div>

              {/* Transparent Confirmation Panel */}
              {preparedWhatsAppUrl && (
                <div
                  className="mt-6 rounded-2xl border border-[#73745D]/30 bg-[#F5F1E9] p-5 space-y-3"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#73745D] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-[#252521]">
                        Your WhatsApp enquiry message is ready
                      </p>
                      <p className="mt-1 text-xs text-[#252521]/75 leading-relaxed">
                        WhatsApp should open in a new tab with your details pre-filled. Please press Send in WhatsApp to share this directly with Alankar Home Decor.
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap rounded-xl bg-[#FAF8F3] p-3.5 text-[11.5px] text-[#252521]/80 font-sans leading-relaxed">
                    {preparedSummary}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={preparedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#73745D] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#FAF8F3] hover:bg-[#5B5C48] transition-colors"
                    >
                      <span>Open WhatsApp</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#756A5B] hover:text-[#252521] transition-colors"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
