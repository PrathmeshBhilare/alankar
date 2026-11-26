export const BUSINESS_INFO = {
  name: 'Alankar Home Decor',
  shortName: 'ALANKAR HOME DECOR',
  tagline: 'Thoughtfully chosen furniture for beautiful homes.',
  positioning: 'Best Customised Sofa in Satara',
  locationShort: 'Nagthane, Satara',
  addressLine1: 'Ghot Jugaiwadi, Nagthane',
  addressLine2: 'Maharashtra 415519, India',
  fullAddress: 'Ghot Jugaiwadi, Nagthane, Maharashtra 415519, India',
  phoneDisplay: '+91 94211 17828',
  phoneLocalDisplay: '094211 17828',
  phoneHref: 'tel:+919421117828',
  whatsappBase: 'https://wa.me/919421117828',
  googleRating: '4.6/5',
  googleReviewCount: 69,
  googleBusinessProfileUrl: 'https://share.google/5IGGaeaaGZSvwWgzi',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Alankar+Home+Decor+Ghot+Jugaiwadi+Nagthane+Satara+415519',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Alankar+Home+Decor+Ghot+Jugaiwadi+Nagthane+Satara+415519&output=embed',
} as const;

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `${BUSINESS_INFO.whatsappBase}?text=${encoded}`;
}

export function buildCategoryWhatsAppUrl(categoryTitle: string): string {
  return buildWhatsAppUrl(
    `Hello Alankar Home Decor, I would like to explore options for ${categoryTitle}. Please share more details or showroom availability.`
  );
}

export function buildSofaStyleWhatsAppUrl(styleName: string): string {
  return buildWhatsAppUrl(
    `Hello Alankar Home Decor, I am interested in a customised ${styleName}. Could you guide me on fabric, colour, and sizing options?`
  );
}

export interface CustomSofaFormPayload {
  customerName: string;
  phoneNumber: string;
  sofaType: string;
  preferredFabricColour: string;
  approximateSize: string;
  additionalRequirements: string;
}

export function buildCustomSofaEnquiryMessage(data: CustomSofaFormPayload): string {
  const lines = [
    'Hello Alankar Home Decor,',
    'I would like to discuss a Customised Sofa requirement:',
    '',
    `• Name: ${data.customerName.trim()}`,
    `• Phone: ${data.phoneNumber.trim()}`,
    `• Sofa Type: ${data.sofaType}`,
  ];

  if (data.preferredFabricColour.trim()) {
    lines.push(`• Preferred Fabric / Colour: ${data.preferredFabricColour.trim()}`);
  }
  if (data.approximateSize.trim()) {
    lines.push(`• Approximate Size: ${data.approximateSize.trim()}`);
  }
  if (data.additionalRequirements.trim()) {
    lines.push(`• Additional Notes: ${data.additionalRequirements.trim()}`);
  }

  lines.push('', 'Sent via Alankar Home Decor digital showroom (Nagthane, Satara).');
  return lines.join('\n');
}
