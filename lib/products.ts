export type ProductCategory = string
export type Product = {
  product_id: number
  product_name: string
  price: number
  discounted_price: number
  description: string
  fabric: string
  sku: string
  stock: number
  category_id: number
  category_name: string
  images: string[]
  image : string
  variation: any[]
}

export const products: Product[] = [
]
// export const products: Product[] = [
//   {
//     id: "shirt-001",
//     name: "The Oxford Classic",
//     category: "shirts",
//     basePrice: 2999,
//     description: "A timeless Oxford cloth button-down shirt, crafted from premium Egyptian cotton. Perfect for both formal and smart-casual occasions.",
//     fabric: "Egyptian Cotton",
//     images: ["/images/shirt-white.jpg", "/images/shirt-blue.jpg", "/images/shirt-pink.jpg"],
//     slug: "the-oxford-classic",
//   },
//   {
//     id: "shirt-002",
//     name: "The Royal Blue",
//     category: "shirts",
//     basePrice: 3499,
//     description: "A sophisticated blue dress shirt with a subtle herringbone weave. Made from Italian Albini cotton for supreme comfort.",
//     fabric: "Italian Cotton",
//     images: ["/images/shirt-blue.jpg", "/images/shirt-white.jpg", "/images/shirt-pink.jpg"],
//     slug: "the-royal-blue",
//   },
//   {
//     id: "shirt-003",
//     name: "The Blush Linen",
//     category: "shirts",
//     basePrice: 3999,
//     description: "A delicate pink linen-cotton blend shirt, ideal for summer occasions. Breathable, soft, and effortlessly elegant.",
//     fabric: "Linen-Cotton Blend",
//     images: ["/images/shirt-pink.jpg", "/images/shirt-white.jpg", "/images/shirt-blue.jpg"],
//     slug: "the-blush-linen",
//   },
//   {
//     id: "pants-001",
//     name: "The Boardroom Trouser",
//     category: "pants",
//     basePrice: 3999,
//     description: "Impeccably tailored navy trousers with a refined drape. Crafted from Super 120s wool for year-round comfort.",
//     fabric: "Super 120s Wool",
//     images: ["/images/pants-navy.jpg", "/images/pants-black.jpg"],
//     slug: "the-boardroom-trouser",
//   },
//   {
//     id: "pants-002",
//     name: "The Midnight Chino",
//     category: "pants",
//     basePrice: 3499,
//     description: "Sleek black formal trousers with a modern slim profile. Made from premium stretch wool for all-day comfort.",
//     fabric: "Stretch Wool",
//     images: ["/images/pants-black.jpg", "/images/pants-navy.jpg"],
//     slug: "the-midnight-chino",
//   },
//   {
//     id: "pants-003",
//     name: "The Gentleman's Pleat",
//     category: "pants",
//     basePrice: 4499,
//     description: "Classic pleated trousers with a higher rise for timeless sophistication. Italian wool-cashmere blend.",
//     fabric: "Wool-Cashmere",
//     images: ["/images/pants-navy.jpg", "/images/pants-black.jpg"],
//     slug: "the-gentlemans-pleat",
//   },
//   {
//     id: "blazer-001",
//     name: "The Savile Row",
//     category: "blazers",
//     basePrice: 8999,
//     description: "A distinguished charcoal blazer with a half-canvas construction. Crafted from Italian Loro Piana wool for timeless elegance.",
//     fabric: "Loro Piana Wool",
//     images: ["/images/blazer-charcoal.jpg", "/images/blazer-navy.jpg"],
//     slug: "the-savile-row",
//   },
//   {
//     id: "blazer-002",
//     name: "The Navy Regent",
//     category: "blazers",
//     basePrice: 9999,
//     description: "A premium navy blazer with peak lapels and full-canvas construction. The ultimate statement of refined taste.",
//     fabric: "Super 150s Wool",
//     images: ["/images/blazer-navy.jpg", "/images/blazer-charcoal.jpg"],
//     slug: "the-navy-regent",
//   },
//   {
//     id: "blazer-003",
//     name: "The Heritage Tweed",
//     category: "blazers",
//     basePrice: 10999,
//     description: "A handcrafted tweed blazer with elbow patches and working cuff buttons. British heritage meets modern tailoring.",
//     fabric: "Harris Tweed",
//     images: ["/images/blazer-charcoal.jpg", "/images/blazer-navy.jpg"],
//     slug: "the-heritage-tweed",
//   },
// ]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.product_name === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.product_name === category)
}

export interface CustomizationOption {
  label: string
  choices: string[]
}

export interface CategoryCustomization {
  main: CustomizationOption[]
  advanced: CustomizationOption[]
}

export const shirtCustomization: CategoryCustomization = {
  main: [
    { label: "Fit", choices: ["Slim", "Regular", "Relaxed"] },
    { label: "Collar", choices: ["Spread", "Mandarin", "Button Down"] },
    { label: "Sleeve", choices: ["Long Sleeve", "Short Sleeve", "3/4 Sleeve"] },
    { label: "Sleeve Length", choices: ["Standard", "Short (+0)", "Long (+1)", "Extra Long (+2)"] },
    { label: "Size", choices: ["XS", "S", "M", "L", "XL", "XXL"] },
  ],
  advanced: [
    { label: "Cuffs", choices: ["Single Button", "Double Button", "French Cuff"] },
    { label: "Placket", choices: ["Standard", "Concealed", "Front Placket"] },
    { label: "Pocket", choices: ["No Pocket", "Single Patch Pocket", "Double Pocket"] },
    { label: "Buttons", choices: ["White Mother of Pearl", "Black Matte", "Metallic", "Horn"] },
    { label: "Hem Style", choices: ["Curved", "Straight", "Side Slit"] },
    { label: "Back Style", choices: ["Plain", "Box Pleat", "Side Pleats", "Darted"] },
  ],
}

export const pantsCustomization: CategoryCustomization = {
  main: [
    { label: "Fit", choices: ["Slim", "Regular", "Relaxed", "Tapered"] },
    { label: "Rise", choices: ["Low Rise", "Mid Rise", "High Rise"] },
    { label: "Waist Size", choices: ["28", "30", "32", "34", "36", "38", "40"] },
    { label: "Length", choices: ["28", "30", "32", "34", "36"] },
  ],
  advanced: [
    { label: "Pleats", choices: ["Flat Front", "Single Pleat", "Double Pleat"] },
    { label: "Waistband", choices: ["Standard", "Extended Tab", "Side Adjusters", "Belt Loops"] },
    { label: "Pockets", choices: ["Side Pockets", "Slanted Pockets", "Back Welt Pockets", "Coin Pocket"] },
    { label: "Bottom", choices: ["Plain", "Cuffed", "Tapered"] },
    { label: "Closure", choices: ["Button & Zip", "Hook & Bar", "Extended Closure"] },
    { label: "Lining", choices: ["Unlined", "Half Lined", "Fully Lined"] },
  ],
}

export const blazerCustomization: CategoryCustomization = {
  main: [
    { label: "Fit", choices: ["Slim", "Regular", "Relaxed"] },
    { label: "Lapel", choices: ["Notch", "Peak", "Shawl"] },
    { label: "Buttons", choices: ["Single (1)", "Single (2)", "Double (4)", "Double (6)"] },
    { label: "Size", choices: ["36", "38", "40", "42", "44", "46", "48"] },
  ],
  advanced: [
    { label: "Vent", choices: ["Single Vent", "Double Vent", "No Vent"] },
    { label: "Pocket Style", choices: ["Flap Pockets", "Patch Pockets", "Jetted Pockets", "Ticket Pocket"] },
    { label: "Breast Pocket", choices: ["Welt Pocket", "Patch Pocket", "No Pocket"] },
    { label: "Lining", choices: ["Full Lining", "Half Lining", "Unlined"] },
    { label: "Shoulder", choices: ["Natural", "Structured", "Soft Roll"] },
    { label: "Sleeve Buttons", choices: ["3 Buttons", "4 Buttons", "Working Buttonholes"] },
  ],
}

export function getCustomizationForCategory(
  category: string
): CategoryCustomization | null {
  switch (category.toLowerCase()) {
    case "shirts":
      return shirtCustomization
    case "pants":
    case "trousers":
      return pantsCustomization
    case "blazers":
      return blazerCustomization
    default:
      return null
  }
}
