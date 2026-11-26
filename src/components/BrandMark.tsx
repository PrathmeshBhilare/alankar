interface BrandMarkProps {
  variant?: 'dark' | 'light';
}

export function BrandMark({ variant = 'dark' }: BrandMarkProps) {
  const primaryText = variant === 'dark' ? 'text-[#252521]' : 'text-[#F5F1E9]';
  const secondaryText = variant === 'dark' ? 'text-[#756A5B]' : 'text-[#A69A89]';
  const strokeColor = variant === 'dark' ? '#252521' : '#F5F1E9';
  const accentColor = '#73745D';

  return (
    <div className="inline-flex items-center gap-3.5">
      {/* Bespoke Architectural Arch & Sofa Crest (non-boxy) */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M7 33V19C7 11.8203 12.8203 6 20 6C27.1797 6 33 11.8203 33 19V33"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12.5 25.5C12.5 23.0147 14.5147 21 17 21H23C25.4853 21 27.5 23.0147 27.5 25.5V28.5H12.5V25.5Z"
          stroke={accentColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 28.5H29.5M14.5 28.5V31.5M25.5 28.5V31.5"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`editorial-serif text-[1.3rem] sm:text-[1.45rem] font-medium tracking-[0.02em] ${primaryText}`}>
          Alankar <span className="italic font-normal text-[#73745D]">Home Decor</span>
        </span>
        <span className={`mt-1 text-[9.5px] font-medium uppercase tracking-[0.26em] ${secondaryText}`}>
          Nagthane · Satara
        </span>
      </div>
    </div>
  );
}
