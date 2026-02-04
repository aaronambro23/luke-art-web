export interface PrintSize {
  id: string;
  label: string;
  dimensions: string;
  priceCents: number;
}

export const PRINT_SIZES: PrintSize[] = [
  { id: "small", label: "Small", dimensions: "30 × 30 cm", priceCents: 4500 },
  { id: "medium", label: "Medium", dimensions: "46 × 46 cm", priceCents: 8500 },
  { id: "large", label: "Large", dimensions: "61 × 61 cm", priceCents: 14500 },
  { id: "xlarge", label: "Extra Large", dimensions: "76 × 76 cm", priceCents: 22000 },
];

export interface Artwork {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imagePath: string;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    slug: "cosmic-harmony",
    title: "Cosmic Harmony",
    description: "An exploration of celestial balance and cosmic energy.",
    longDescription:
      "Cosmic Harmony invites viewers into a meditation on balance—where swirling nebulae and structured form meet. Each layer was built to feel both expansive and intimate, reflecting the tension between the infinite and the personal.",
    imagePath: "/images/card-1.png",
  },
  {
    id: 2,
    slug: "urban-rhythms",
    title: "Urban Rhythms",
    description: "Capturing the energy of city life through abstract forms.",
    longDescription:
      "Urban Rhythms distills the pulse of the city into color and motion. The piece captures late-night lights, movement, and the layered stories of urban life without rendering a single literal street.",
    imagePath: "/images/card-2.png",
  },
  {
    id: 3,
    slug: "natures-whisper",
    title: "Nature's Whisper",
    description: "A journey through the subtle beauty of natural landscapes.",
    longDescription:
      "Inspired by the quiet drama of natural forms—petals, skulls, and the cycle of growth and decay. Nature's Whisper honors both the decorative and the organic in a single frame.",
    imagePath: "/images/card-3.png",
  },
  {
    id: 4,
    slug: "digital-dreams",
    title: "Digital Dreams",
    description: "Exploring the intersection of technology and imagination.",
    longDescription:
      "Digital Dreams sits at the border of human and machine vision. Neon palettes and intricate structures suggest both digital artifacts and the inner landscapes of imagination.",
    imagePath: "/images/card-4.png",
  },
  {
    id: 5,
    slug: "mr-schmagee",
    title: "Mr. Schmagee",
    description: "Capturing the ephemeral beauty of sound and light.",
    longDescription:
      "Mr. Schmagee is a portrait of presence—vibrant, slightly surreal, and anchored in the moment where sound and light feel tangible. The piece plays with recognition and distortion.",
    imagePath: "/images/card-5.png",
  },
  {
    id: 6,
    slug: "quantum-canvas",
    title: "Quantum Canvas",
    description: "Visualizing the strange world of quantum physics.",
    longDescription:
      "Quantum Canvas translates the uncanny logic of quantum physics into visual form. Overlapping states, probability, and the collapse of possibility into a single image drive the composition.",
    imagePath: "/images/card-6.png",
  },
  {
    id: 7,
    slug: "chromatic-girl",
    title: "Chromatic Girl",
    description: "A vibrant exploration of color theory and perception.",
    longDescription:
      "Chromatic Girl is a study in how color shapes identity and mood. Bold hues and careful contrast create a figure that feels both classic and entirely of the moment.",
    imagePath: "/images/card-7.png",
  },
  {
    id: 8,
    slug: "birds-of-paradise",
    title: "Birds of Paradise",
    description: "Weaving the past, present, and future in a visual narrative.",
    longDescription:
      "Birds of Paradise weaves myth, nature, and narrative into one dense image. Stylized birds and intricate patterns suggest a story that unfolds differently for every viewer.",
    imagePath: "/images/card-8.png",
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTWORKS.map((a) => a.slug);
}
