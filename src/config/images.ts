export const images = {
  // Hero Section
  hero: {
    main: '/hero.png',
    background: '/hero.png',
  },
  
  // Features Section
  features: {
    equipment: '/image (1).jfif',
    expertise: '/image (2).jfif',
    quality: '/image (3).jfif',
  },
  
  // Services Section
  services: {
    cranes: '/crane.jfif',
    forklifts: '/forklifts.jfif',
    generators: '/generators.jfif',
    transport: '/transpotation.jfif',
  },
  
  // Locations Section
  locations: {
    markers: {
      red: '/leaflet/marker-icon-2x.png',
      blue: '/leaflet/marker-icon-2x.png',
      green: '/leaflet/marker-icon-2x.png',
      yellow: '/leaflet/marker-icon-2x.png',
    },
    default: '/leaflet/marker-icon-2x.png',
    shadow: '/leaflet/marker-shadow.png',
  },
  
  // Parallax Sections
  parallax: {
    hero: '/hero.png',
    stats: '/image (2).jfif',
    cta: '/image (3).jfif',
  },
  
  // Company Section
  company: {
    message: 'https://www.mena-researchcenter.org/wp-content/uploads/2024/12/Detente-at-the-Gulf-Riyadhs-Foreign-Policy-Balancing-Act.jpg',
    branding: '/company-branding.jpg',
  },
  
  // Company Logo
  logo: '/logo.png',
} as const;

// Type for image paths
export type ImagePath = typeof images[keyof typeof images] | string; 