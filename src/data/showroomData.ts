/**
 * Editable showroom content for Alankar Home Decor.
 * The shop owner can update image URLs, titles, and short descriptions here
 * without touching component code.
 */

export interface CollectionCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface SofaStyleOption {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  spaceType: string;
  image: string;
  imageAlt: string;
  spanClass: string;
}

export const HERO_MEDIA = {
  image:
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
  imageAlt:
    'Warm contemporary living room featuring a tailored modular sofa, solid wood coffee table, leather ottomans, and brass floor lamp',
};

export const BRAND_STORY_MEDIA = {
  image:
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
  imageAlt:
    'Modern Indian-contemporary living lounge with tailored fabric sofa, carved wooden round coffee tables, and woven pouf',
};

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    id: 'customised-sofas',
    title: 'Customised Sofas',
    subtitle: 'Signature Category',
    description:
      'Tailored proportions, upholstery textures, and colour palettes shaped around your living room layout.',
    image:
      'https://images.pexels.com/photos/13086783/pexels-photo-13086783.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Customised beige fabric sofa arranged in a warm sunlit room',
  },
  {
    id: 'l-shaped-sofas',
    title: 'L-Shaped Sofas',
    subtitle: 'Corner & Lounge',
    description:
      'Generous corner silhouettes designed to anchor family living spaces with effortless everyday comfort.',
    image:
      'https://images.pexels.com/photos/6970027/pexels-photo-6970027.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Spacious L-shaped corner sofa configuration in a modern living room',
  },
  {
    id: 'sofa-sets',
    title: 'Sofa Sets',
    subtitle: 'Coordinated Seating',
    description:
      'Balanced 3+2 and multi-piece seating arrangements crafted for welcoming conversation areas.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Coordinated living room sofa set paired with accent chairs and wooden coffee table',
  },
  {
    id: 'recliners',
    title: 'Recliners',
    subtitle: 'Personal Comfort',
    description:
      'Supportive lounge seating and relaxed silhouettes suited for quiet evenings and reading corners.',
    image:
      'https://images.pexels.com/photos/33646085/pexels-photo-33646085.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Plush brown upholstered lounge recliners in a showroom setting',
  },
  {
    id: 'beds-bedroom',
    title: 'Beds & Bedroom Furniture',
    subtitle: 'Restful Sanctuaries',
    description:
      'Upholstered and wooden beds, bedside tables, and storage wardrobes for calm, well-organised bedrooms.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Tufted upholstered king bed with bedroom bench and bedside tables',
  },
  {
    id: 'dining-furniture',
    title: 'Dining Furniture',
    subtitle: 'Gather Together',
    description:
      'Warm timber dining tables and supportive chairs built for shared meals and understated elegance.',
    image:
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Solid wood dining table surrounded by six upholstered dining chairs',
  },
  {
    id: 'living-room',
    title: 'Living Room Furniture',
    subtitle: 'Complete Ensembles',
    description:
      'Coffee tables, accent chairs, consoles, and focal pieces that bring cohesion to your main gathering space.',
    image:
      'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Modern apartment living and dining furniture ensemble with warm wood cabinetry',
  },
  {
    id: 'home-decor',
    title: 'Home Decor',
    subtitle: 'Finishing Touches',
    description:
      'Textured cushions, ceramic vases, and thoughtful decorative elements that complete the warmth of a room.',
    image:
      'https://images.unsplash.com/photo-1792541844474-e49059c13a25?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Sculptural ceramic vase and decorative tabletop pieces on marble surface',
  },
];

export const CUSTOM_SOFA_STYLES: SofaStyleOption[] = [
  {
    id: 'l-shaped',
    name: 'L-shaped sofa',
    tagline: 'Corner Architecture',
    idealFor: 'Open living rooms & family lounges',
    image:
      'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Deep espresso L-shaped corner sofa with adjustable headrests',
  },
  {
    id: '3-seater',
    name: '3-seater sofa',
    tagline: 'Classic Proportion',
    idealFor: 'Balanced primary living spaces',
    image:
      'https://images.pexels.com/photos/35373121/pexels-photo-35373121.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Warm ivory 3-seater fabric sofa with plush textured cushions',
  },
  {
    id: '2-seater',
    name: '2-seater sofa',
    tagline: 'Compact Poise',
    idealFor: 'Intimate apartments & study corners',
    image:
      'https://images.pexels.com/photos/4740494/pexels-photo-4740494.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Compact warm camel 2-seater sofa styled with patterned cushion',
  },
  {
    id: 'modern-sectional',
    name: 'Modern sectional sofa',
    tagline: 'Modular Living',
    idealFor: 'Flexible multi-seat configurations',
    image:
      'https://images.pexels.com/photos/6510974/pexels-photo-6510974.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Spacious modular sectional sofa in soft neutral upholstery',
  },
  {
    id: 'contemporary',
    name: 'Contemporary sofa',
    tagline: 'Clean Silhouettes',
    idealFor: 'Minimalist and modern homes',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Deep forest green velvet contemporary sofa on solid wood legs',
  },
  {
    id: 'premium-fabric',
    name: 'Premium fabric sofa',
    tagline: 'Tactile Warmth',
    idealFor: 'Custom texture & colour-matched interiors',
    image:
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?fm=jpg&q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Soft upholstered fabric sofa in warm natural light',
  },
];

export const GALLERY_INSPIRATIONS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Refined Seating & Cane Accents',
    caption: 'Plush velvet sofa paired with cane-back accent seating and sculptural table decor.',
    spaceType: 'Living Room',
    image:
      'https://images.unsplash.com/photo-1669387448840-610c588f003d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Contemporary living room with dark velvet sofa and cane accent chair',
    spanClass: 'md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    id: 'gal-2',
    title: 'Warm Timber & Dining',
    caption: 'Solid wood dining silhouettes paired with soft linen drapery for effortless hosting.',
    spaceType: 'Dining Space',
    image:
      'https://images.unsplash.com/photo-1694967336919-707c84ebacf2?fm=jpg&q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Sunlit wooden dining table and chairs with linen styling',
    spanClass: 'md:col-span-5 aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'Open Living Composition',
    caption: 'Warm walnut cabinetry paired with neutral upholstered seating and pendant lighting.',
    spaceType: 'Living & Console',
    image:
      'https://images.unsplash.com/photo-1786564026100-7ad7ae7654b2?fm=jpg&q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Modern sunlit living room with wooden credenza and lounge sofa',
    spanClass: 'md:col-span-5 aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'Quiet Reading Corner',
    caption: 'Statement ochre armchair beside dark cabinetry and warm brass floor lighting.',
    spaceType: 'Accent Seating',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Upholstered yellow accent chair with brass floor lamp and cabinet',
    spanClass: 'md:col-span-4 aspect-[4/5]',
  },
  {
    id: 'gal-5',
    title: 'Restful Bedroom Sanctuary',
    caption: 'Tufted upholstered headboard, warm bedroom lighting, and tailored storage.',
    spaceType: 'Bedroom Suite',
    image:
      'https://images.pexels.com/photos/7546276/pexels-photo-7546276.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Modern luxury bedroom with upholstered bed and wardrobe mirrors',
    spanClass: 'md:col-span-4 aspect-[4/5]',
  },
  {
    id: 'gal-6',
    title: 'Architectural Timber Craft',
    caption: 'Clean joinery and warm wood finishes across everyday dining and accent chairs.',
    spaceType: 'Craft & Detail',
    image:
      'https://images.pexels.com/photos/29917912/pexels-photo-29917912.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Warm teak wooden chairs close-up showing joinery',
    spanClass: 'md:col-span-4 aspect-[4/5]',
  },
];
