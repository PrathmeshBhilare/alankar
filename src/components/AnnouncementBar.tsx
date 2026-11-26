import { MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/whatsapp';

export function AnnouncementBar() {
  return (
    <div className="bg-[#302820] text-[#F5F1E9] border-b border-[#A69A89]/20">
      <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-1.5 py-2.5 text-[11px] sm:text-xs tracking-[0.06em]">
        <p className="font-normal text-[#F5F1E9]/90 text-center sm:text-left">
          {BUSINESS_INFO.tagline}
        </p>
        <div className="flex items-center gap-1.5 text-[#A69A89] font-medium uppercase tracking-[0.14em] text-[10px] sm:text-[11px]">
          <MapPin className="h-3 w-3 text-[#A69A89]" aria-hidden="true" />
          <span>{BUSINESS_INFO.locationShort}</span>
        </div>
      </div>
    </div>
  );
}
