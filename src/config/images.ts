export const images = {
  // Hero Section
  hero: {
    main: '/hero.png',
    background: '/hero2.png',
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
  
  
  
 equipment : {
  cranes :'/cranes 1.png',
  forklift:'/forklift 1.png',
  generators :'/generator 1.png',
  transportation :'/transport 1.png'

 },

 gallery : {
  cranes : {
    image1: '/cranes/image (1).jfif',
    image2: '/cranes/image (2).jfif',
    image3: '/cranes/image (3).jfif',
    image4: '/cranes/image (4).jfif',
    image5: '/cranes/image (5).jfif',
    image6: '/cranes/image (6).jfif',
    image7: '/cranes/image (7).jfif',
    image8: '/cranes/image (8).jfif',
    image9: '/cranes/image (9).jfif',
    image10: '/cranes/image (10).jfif',
    image11: '/cranes/image (11).jfif',
    image12: '/cranes/image (12).jfif',
    image13: '/cranes/image (13).jfif',
    image14: '/cranes/image (14).jfif',
    image15: '/cranes/image (15).jfif',
    image16: '/cranes/image (16).jfif',
    image17: '/cranes/image (17).jfif',
    image18: '/cranes/image (18).jfif',
    image19: '/cranes/image (19).jfif',
    image20: '/cranes/image (20).jfif',
    image21: '/cranes/image (21).jfif',
    image22: '/cranes/image (22).jfif',
    image23: '/cranes/image (23).jfif',
    image24: '/cranes/image (24).jfif',
    image25: '/cranes/image (25).jfif',
   
  },
  forklifts : {
    image1: '/forklifts/image (1).jfif',
    image2: '/forklifts/image (2).jfif',
    image3: '/forklifts/image (3).jfif',
    image4: '/forklifts/image (4).jfif',
    image5: '/forklifts/image (5).jfif',
  },
  generators : {
    image1: '/generators/image (1).jfif',
    image2: '/generators/image (2).jfif',
    image3: '/generators/image (3).jfif',
    image4: '/generators/image (4).jfif',
    image5: '/generators/image (5).jfif',
  },
  transportation : {
    image1: '/transportation/image (1).jfif',
    image2: '/transportation/image (2).jfif',
    image3: '/transportation/image (3).jfif',
    image4: '/transportation/image (4).jfif',
    image5: '/transportation/image (5).jfif',
  },
 },
  // Company Logo
  logo: '/logo.png',
} as const;

// Type for image paths
export type ImagePath = typeof images[keyof typeof images] | string; 