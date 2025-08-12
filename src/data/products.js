// Sample image URLs for testing
const SAMPLE_IMAGES = {
  hydraulic: [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=800&fit=crop"
  ],
  electrical: [
    "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=800&fit=crop"
  ],
  mechanical: [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=800&fit=crop"
  ]
};

export const products = [
  {
    id: 1,
    name: "Hydraulic Main Pump Assembly",
    partNumber: "HMP-LR1300-A1",
    manufacturer: "Liebherr",
    model: "LR 1300",
    price: "$12,450",
    category: "Hydraulic System",
    // inStock: true,
    // stockCount: 8,
    rating: 4.8,
    reviews: 23,
    features: ["OEM Quality", "Direct Replacement", "Tested & Certified"],
    specifications: {
      "Flow Rate": "280 L/min",
      "Pressure": "350 bar",
      "Weight": "145 kg",
      "Warranty": "12 months"
    },
    compatibility: ["LR 1300", "LR 1350", "LR 1400"],
    // Simple image structure
    images: {
      // Main image used in catalogs and cards
      main: "/assets/images/ridaantradingco-20-07-2025-0001.webp",
      // Additional images for product detail gallery
      gallery: [
        {
          url: "/assets/images/ridaantradingco-20-07-2025-0001.webp",
          alt: "Main view of hydraulic pump",
          caption: "Complete assembly view"
        },
        {
          url: "/assets/images/ridaantradingco-20-07-2025-0001.webp",
          alt: "Side view showing connections",
          caption: "Connection points and ports"
        },
        {
          url: "/assets/images/ridaantradingco-20-07-2025-0001.webp",
          alt: "Internal components",
          caption: "Internal mechanism detail"
        }
      ]
    }
  },
  {
    id: 2,
    name: "High Flow Control Valve",
    partNumber: "HCV-LR1300-V1",
    manufacturer: "Liebherr",
    model: "LR 1300",
    price: "$4,850",
    category: "Hydraulic System",
    // inStock: true,
    stockCount: 12,
    rating: 4.7,
    reviews: 18,
    features: ["Precise Control", "High Flow Capacity", "Pressure Compensated"],
    specifications: {
      "Flow Rate": "350 L/min",
      "Max Pressure": "400 bar",
      "Weight": "28 kg",
      "Warranty": "12 months"
    },
    compatibility: ["LR 1300", "LR 1350", "LR 1400"],
    images: {
      main: SAMPLE_IMAGES.hydraulic[1],
      gallery: [
        {
          url: SAMPLE_IMAGES.hydraulic[1],
          alt: "Control valve front view",
          caption: "Main control valve assembly"
        },
        {
          url: SAMPLE_IMAGES.hydraulic[2],
          alt: "Valve internals",
          caption: "Internal components"
        }
      ]
    }
  },
  {
    id: 3,
    name: "Track Chain Assembly Kit",
    partNumber: "TCA-MAN18K-B2",
    manufacturer: "Manitowoc",
    model: "18000",
    price: "$8,750",
    category: "Undercarriage",
    // inStock: true,
    stockCount: 15,
    rating: 4.9,
    reviews: 41,
    features: ["Heavy Duty", "Corrosion Resistant", "Extended Life"],
    specifications: {
      "Length": "3.2 m",
      "Pitch": "280 mm",
      "Material": "Hardened Steel",
      "Warranty": "18 months"
    },
    compatibility: ["18000", "21000", "16000"],
    // Uses only category default images
  },
  {
    id: 4,
    name: "Advanced Control Panel",
    partNumber: "ACP-CC2000-D1",
    manufacturer: "Manitowoc",
    model: "CC2000",
    price: "$15,950",
    category: "Cabin & Controls",
    // inStock: true,
    stockCount: 5,
    rating: 4.9,
    reviews: 28,
    features: ["Touch Screen", "Multi-language Support", "Diagnostic System"],
    specifications: {
      "Display": "12.1\" HD",
      "Input": "Touch + Joystick",
      "Power": "24V DC",
      "Warranty": "24 months"
    },
    compatibility: ["CC2000", "CC2500", "CC3000"],
    // Mixed approach: custom main image but default gallery
    image: "/images/products/cabin/products/acp-cc2000-d1/main.jpg"
  },
  {
    id: 5,
    name: "Electric Winch Motor",
    partNumber: "EWM-LR1350-M2",
    manufacturer: "Liebherr",
    model: "LR 1350",
    price: "$18,750",
    category: "Winch System",
    // inStock: true,
    stockCount: 3,
    rating: 4.7,
    reviews: 15,
    features: ["High Torque", "Variable Speed", "Integrated Brake"],
    specifications: {
      "Power": "75 kW",
      "Speed Range": "0-120 rpm",
      "Weight": "320 kg",
      "Warranty": "18 months"
    },
    compatibility: ["LR 1350", "LR 1400"],
    // Test case with external image URL
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
    gallery: [
      {
        filename: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=1200&fit=crop",
        alt: "Electric winch motor front view",
        labels: ["Front View", "Assembly"]
      },
      {
        filename: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1200&h=1200&fit=crop",
        alt: "Electric winch motor side view",
        labels: ["Side View", "Assembly"]
      }
    ]
  },
  {
    id: 6,
    name: "Boom Cylinder Seal Kit",
    partNumber: "BCSK-TRX275-C3",
    manufacturer: "Terex",
    model: "HC 275",
    price: "$485",
    category: "Boom & Jib",
    // inStock: true,
    stockCount: 3,
    rating: 4.7,
    reviews: 18,
    features: ["Complete Kit", "Easy Installation", "OEM Specifications"],
    specifications: {
      "Bore Size": "160 mm",
      "Rod Size": "110 mm",
      "Material": "Polyurethane",
      "Warranty": "6 months"
    },
    compatibility: ["HC 275", "HC 340", "HC 450"]
    
    
  },
  {
    id: 7,
    name: "Engine Control Module",
    partNumber: "ECM-KOB1000-D4",
    manufacturer: "Kobelco",
    model: "CK1000G",
    price: "$3,250",
    category: "Electrical",
    // inStock: true,
    stockCount: 12,
    rating: 4.6,
    reviews: 12,
    features: ["Plug & Play", "Pre-Programmed", "Diagnostic Ready"],
    specifications: {
      "Voltage": "24V DC",
      "Channels": "32 I/O",
      "Protocol": "CAN Bus",
      "Warranty": "24 months"
    },
    compatibility: ["CK1000G", "CK1200G", "CK850G"]
   
  },
  {
    id: 8,
    name: "Winch Motor Assembly",
    partNumber: "WMA-CAT999-E5",
    manufacturer: "Caterpillar",
    model: "999F",
    price: "$5,890",
    category: "Winch System",
    // inStock: true,
    stockCount: 6,
    rating: 4.5,
    reviews: 15,
    features: ["High Torque", "Weather Resistant", "Long Service Life"],
    specifications: {
      "Power": "45 kW",
      "Torque": "12,000 Nm",
      "Speed": "1,800 rpm",
      "Warranty": "18 months"
    },
    compatibility: ["999F", "992K", "994K"]
    
  },
  {
    id: 9,
    name: "Cabin Air Filter",
    partNumber: "CAF-HIT700-F6",
    manufacturer: "Hitachi",
    model: "KH700-3",
    price: "$89",
    category: "Cabin & Controls",
    // inStock: true,
    stockCount: 25,
    rating: 4.4,
    reviews: 8,
    features: ["HEPA Filter", "Easy Replace", "Dust Protection"],
    specifications: {
      "Filter Type": "HEPA",
      "Dimensions": "300x200x50 mm",
      "Material": "Pleated Paper",
      "Warranty": "6 months"
    },
    compatibility: ["KH700-3", "KH850-3", "KH1000-3"]
    
  }
];

export const categories = [
  { id: 1, name: "Hydraulic System", slug: "hydraulic-system" },
  { id: 2, name: "Undercarriage", slug: "undercarriage" },
  { id: 3, name: "Boom & Jib", slug: "boom-jib" },
  { id: 4, name: "Electrical", slug: "electrical" },
  { id: 5, name: "Winch System", slug: "winch-system" },
  { id: 6, name: "Cabin & Controls", slug: "cabin-controls" },
  { id: 7, name: "Engine Components", slug: "engine-components" },
  { id: 8, name: "Counterweight", slug: "counterweight" }
];

export const manufacturers = [
  { id: 1, name: "Liebherr", slug: "liebherr" },
  { id: 2, name: "Manitowoc", slug: "manitowoc" },
  { id: 3, name: "Terex", slug: "terex" },
  { id: 4, name: "Kobelco", slug: "kobelco" },
  { id: 5, name: "Caterpillar", slug: "caterpillar" },
  { id: 6, name: "Hitachi", slug: "hitachi" }
];

export const filterOptions = {
  categories,
  manufacturers,
  availability: [
    { id: 1, name: "In Stock", slug: "in-stock", count: 567 },
    { id: 2, name: "Limited Stock", slug: "limited", count: 89 },
    { id: 3, name: "Backorder", slug: "backorder", count: 23 }
  ]
};