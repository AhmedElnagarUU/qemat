export const images = {
  // Hero Section
  hero: {
    main: '/hero.webp',
    background: '/hero2.webp',
  },
  
  // Features Section
  features: {
    equipment: '/image (1).webp',
    expertise: '/image (2).webp',
    quality: '/image (3).webp',
  },
  
  // Services Section
  services: {
    cranes: '/crane.webp',
    forklifts: '/forklifts.webp',
    generators: '/generators.webp',
    transport: '/transpotation.webp',
  },
  
  // Locations Section
  locations: {
    markers: {
      red: '/leaflet/marker-icon-2x.webp',
      blue: '/leaflet/marker-icon-2x.webp',
      green: '/leaflet/marker-icon-2x.webp',
      yellow: '/leaflet/marker-icon-2x.webp',
    },
    default: '/leaflet/marker-icon-2x.webp',
    shadow: '/leaflet/marker-shadow.webp',
  },
  
 equipment : {
  cranes :'/cranes 1.webp',
  forklift:'/forklift 1.webp',
  generators :'/generator 1.webp',
  transportation :'/transport 1.webp'
 },

 gallery : {
  cranes : {
    image1: '/cranes/image (1).webp',
    image2: '/cranes/image (2).webp',
    image3: '/cranes/image (3).webp',
    image4: '/cranes/image (4).webp',
    image5: '/cranes/image (5).webp',
    image6: '/cranes/image (6).webp',
    image7: '/cranes/image (7).webp',
    image8: '/cranes/image (8).webp',
    image9: '/cranes/image (9).webp',
    image10: '/cranes/image (10).webp',
    image11: '/cranes/image (11).webp',
    image12: '/cranes/image (12).webp',
    image13: '/cranes/image (13).webp',
    image14: '/cranes/image (14).webp',
    image15: '/cranes/image (15).webp',
    image16: '/cranes/image (16).webp',
    image17: '/cranes/image (17).webp',
    image18: '/cranes/image (18).webp',
    image19: '/cranes/image (19).webp',
    image20: '/cranes/image (20).webp',
    image21: '/cranes/image (21).webp',
    image22: '/cranes/image (22).webp',
    image23: '/cranes/image (23).webp',
    image24: '/cranes/image (24).webp',
    image25: '/cranes/image (25).webp',
  },
  forklifts : {
    image1: '/forklifts/image (1).webp',
    image2: '/forklifts/image (2).webp',
    image3: '/forklifts/image (3).webp',
    image4: '/forklifts/image (4).webp',
    image5: '/forklifts/image (5).webp',
  },
  generators : {
    image1: '/generators/image (1).webp',
    image2: '/generators/image (2).webp',
    image3: '/generators/image (3).webp',
    image4: '/generators/image (4).webp',
    image5: '/generators/image (5).webp',
  },
  transportation : {
    image1: '/transportation/image (1).webp',
    image2: '/transportation/image (2).webp',
    image3: '/transportation/image (3).webp',
    image4: '/transportation/image (4).webp',
    image5: '/transportation/image (5).webp',
  },
 },
  // Company Logo
  logo: '/logo.webp',
} as const;

// Type for image paths
export type ImagePath = typeof images[keyof typeof images] | string; 