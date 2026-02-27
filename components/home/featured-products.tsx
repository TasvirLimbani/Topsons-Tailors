// "use client"

// import Image from "next/image"
// import Link from "next/link"

// const products = [
//   {
//     id: 1,
//     slug: "classic-white-shirt",
//     name: "Classic White Shirt",
//     fabric: "Premium Cotton",
//     basePrice: 1999,
//     images: ["/shirt1.jpg"],
//   },
//   {
//     id: 2,
//     slug: "slim-fit-trouser",
//     name: "Slim Fit Trouser",
//     fabric: "Italian Fabric",
//     basePrice: 2499,
//     images: ["/trouser1.jpg"],
//   },
//   {
//     id: 3,
//     slug: "formal-blazer",
//     name: "Formal Blazer",
//     fabric: "Luxury Blend",
//     basePrice: 4999,
//     images: ["/blazer1.jpg"],
//   },
//   {
//     id: 4,
//     slug: "casual-shirt",
//     name: "Casual Shirt",
//     fabric: "Soft Linen",
//     basePrice: 1799,
//     images: ["/shirt2.jpg"],
//   },
// ]

// export function FeaturedProductsSlider() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-16">

//       <div className="mb-12 text-center">
//         <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
//           Our Picks
//         </p>

//         <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
//           Featured Products
//         </h2>

//         <Link
//           href="/products"
//           className="mt-4 inline-block text-sm underline underline-offset-4"
//         >
//           View All
//         </Link>
//       </div>

//       {/* ✅ FIX: Use map */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((product) => (
//           <Link
//             key={product.id}
//             href={`/products/${product.slug}`}
//             className="group flex flex-col"
//           >
//             <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">

//               <Image
//                 src={product.images[0]}
//                 alt={product.name}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               <div className="absolute top-4 left-4">
//                 <span className="bg-black text-white text-[10px] tracking-wider uppercase px-3 py-1">
//                   Fully Customizable
//                 </span>
//               </div>

//             </div>

//             <div className="mt-4 flex flex-col gap-1">
//               <p className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
//                 {product.fabric}
//               </p>

//               <h3 className="font-serif text-lg transition-colors group-hover:text-gray-600">
//                 {product.name}
//               </h3>

//               <p className="text-sm text-gray-600">
//                 Starting from ₹{product.basePrice.toLocaleString("en-IN")}
//               </p>

//               <span className="mt-2 inline-flex w-fit items-center border-b border-gray-400 pb-0.5 text-xs tracking-widest uppercase text-gray-600 transition-colors group-hover:border-black group-hover:text-black">
//                 Customize
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>

//     </section>
//   )
// }



















"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

/* 🔒 MANUALLY ADDED PRODUCTS */
const products = [
  {
    id: 1,
    slug: "classic-white-shirt",
    name: "Classic White Shirt",
    fabric: "Premium Cotton",
    basePrice: 1999,
    images: ["/shirt1.jpg"],
  },
  {
    id: 2,
    slug: "slim-fit-trouser",
    name: "Slim Fit Trouser",
    fabric: "Italian Wool",
    basePrice: 2499,
    images: ["/trouser1.jpg"],
  },
  {
    id: 3,
    slug: "formal-blazer",
    name: "Formal Blazer",
    fabric: "Luxury Blend",
    basePrice: 4999,
    images: ["/trouser1.jpg"],
  },
  {
    id: 4,
    slug: "casual-shirt",
    name: "Casual Shirt",
    fabric: "Soft Linen",
    basePrice: 1799,
    images: ["/trouser1.jpg"],
  },
  {
    id: 5,
    slug: "tailored-pants",
    name: "Tailored Pants",
    fabric: "Stretch Cotton",
    basePrice: 2899,
    images: ["/trouser1.jpg"],
  },
  {
    id: 6,
    slug: "designer-blazer",
    name: "Designer Blazer",
    fabric: "Premium Wool",
    basePrice: 6999,
    images: ["/trouser1.jpg"],
  },
  {
    id: 7,
    slug: "summer-shirt",
    name: "Summer Shirt",
    fabric: "Breathable Cotton",
    basePrice: 1599,
    images: ["/trouser1.jpg"],
  },
  {
    id: 8,
    slug: "classic-trouser",
    name: "Classic Trouser",
    fabric: "Fine Wool",
    basePrice: 2699,
    images: ["/trouser1.jpg"],
  },
   {
    id: 9,
    slug: "summer-shirt",
    name: "Summer Shirt",
    fabric: "Breathable Cotton",
    basePrice: 1599,
    images: ["/trouser1.jpg"],
  },
  {
    id: 10,
    slug: "classic-trouser",
    name: "Classic Trouser",
    fabric: "Fine Wool",
    basePrice: 2699,
    images: ["/trouser1.jpg"],
  },
]

const ITEMS_PER_ROW = 4
const ROWS = 2
const INITIAL_COUNT = ITEMS_PER_ROW * ROWS

export function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false)

  const visibleProducts = showAll
    ? products
    : products.slice(0, INITIAL_COUNT)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* TITLE */}
      <div className="mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
          Our Collection
        </p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
          Featured Products
        </h2>
      </div>

      {/* PRODUCT GRID (UI SAME) */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group flex flex-col"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 px-2 py-1 text-[10px] tracking-wider uppercase text-primary-foreground">
                  Fully Customizable
                </span>
              </div>

              <button
                onClick={(e) => e.preventDefault()}
                className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-card/80 text-foreground/70 backdrop-blur-sm transition hover:bg-card hover:text-primary"
              >
                <Heart className="size-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                {product.fabric}
              </p>

              <h3 className="font-serif text-lg transition-colors group-hover:text-primary">
                {product.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                Starting from ₹{product.basePrice.toLocaleString("en-IN")}
              </p>

              <span className="mt-2 inline-flex w-fit border-b border-foreground/30 pb-0.5 text-xs tracking-widest uppercase text-foreground/70 transition group-hover:border-primary group-hover:text-primary">
                Customize
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* VIEW ALL / SHOW LESS */}
      {products.length > INITIAL_COUNT && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="border-b border-foreground pb-1 text-sm tracking-widest uppercase transition hover:text-primary"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  )
}