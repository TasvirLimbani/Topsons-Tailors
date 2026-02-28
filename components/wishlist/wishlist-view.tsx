// "use client"

// import Link from "next/link"
// import { Heart, ArrowLeft } from "lucide-react"
// import { useWishlist } from "@/lib/wishlist-context"
// import { ProductCard } from "@/components/products/product-card"

// export function WishlistView() {
//   const { items } = useWishlist()

//   if (items.length === 0) {
//     return (
//       <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
//         <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
//           <Heart className="size-8 text-muted-foreground" />
//         </div>
//         <h2 className="mt-6 font-serif text-2xl text-foreground">Your wishlist is empty</h2>
//         <p className="mt-2 text-sm text-muted-foreground">
//           Browse our collection and save items you love.
//         </p>
//         <Link
//           href="/products"
//           className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90"
//         >
//           Browse Collection
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="mx-auto max-w-7xl px-6 py-12">
//       <Link
//         href="/products"
//         className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
//       >
//         <ArrowLeft className="size-4" />
//         Back to Collection
//       </Link>

//       <h1 className="mt-6 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
//         Your Wishlist
//       </h1>
//       <p className="mt-2 text-sm text-muted-foreground">
//         {items.length} {items.length === 1 ? "item" : "items"} saved
//       </p>

//       <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {items.map((product) => (
//           <ProductCard key={product.product_id} product={product} />
//         ))}
//       </div>
//     </div>
//   )
// }






// "use client"

// import Link from "next/link"
// import { Heart, ArrowLeft } from "lucide-react"
// import { useEffect, useState } from "react"
// import { ProductCard } from "@/components/products/product-card"
// import { Product } from "@/lib/products"
// import { useAuth } from "@/lib/auth-context"

// // interface WishlistAPIItem {
// //   id: number
// //   user_id: number
// //   product_id: number
// //   created_at: string
// //   product: {
// //     product_name: string
// //     price: number
// //     discounted_price: number
// //     fabric: string
// //     sku: string
// //     stock: number
// //     image: string
// //   }
// // }

// // Transform API product to ProductCard props


// export function WishlistView() {
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)
//   const { user } = useAuth()
//   const user_id = user?.user_id;

//   useEffect(() => {
//     if (!user_id) return

//     const fetchWishlist = async () => {
//       setLoading(true)
//       try {
//         const res = await fetch(`/api/wishlist?user_id=${user_id}`)
//         const data = await res.json()

//         if (!data.status || !Array.isArray(data.wishlist)) {
//           setWishlistItems([])
//           return
//         }

//         // Convert API wishlist items to ProductCard format

//         setWishlistItems(data.wishlist)
//       } catch (error) {
//         console.error("Failed to fetch wishlist:", error)
//         setWishlistItems([])
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchWishlist()
//   }, [user_id])

//   if (loading) {
//     return (
//       <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
//         <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
//           <Heart className="size-8 text-muted-foreground animate-pulse" />
//         </div>
//         <h2 className="mt-6 font-serif text-2xl text-foreground animate-pulse">
//           Loading wishlist...
//         </h2>
//       </div>
//     )
//   }

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
//         <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
//           <Heart className="size-8 text-muted-foreground" />
//         </div>
//         <h2 className="mt-6 font-serif text-2xl text-foreground">Your wishlist is empty</h2>
//         <p className="mt-2 text-sm text-muted-foreground">
//           Browse our collection and save items you love.
//         </p>
//         <Link
//           href="/products"
//           className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90"
//         >
//           Browse Collection
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="mx-auto max-w-7xl px-6 py-12">
//       <Link
//         href="/products"
//         className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
//       >
//         <ArrowLeft className="size-4" />
//         Back to Collection
//       </Link>

//       <h1 className="mt-6 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
//         Your Wishlist
//       </h1>
//       <p className="mt-2 text-sm text-muted-foreground">
//         {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved
//       </p>

//       {/* ✅ ProductCard mapping fixed */}
//       <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {wishlistItems.map((product) => (
//           <ProductCard key={product.product_id} product={product} />
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { ProductCard } from "@/components/products/product-card"
import { Product } from "@/lib/products"
import { useAuth } from "@/lib/auth-context"
import { Button } from "../ui/button"

interface WishlistAPIItem {
  id: number
  user_id: number
  product_id: number
  created_at: string
  product: Product
}


export function WishlistView() {
  const { user, openLogin } = useAuth()

  const [wishlistItems, setWishlistItems] = useState<WishlistAPIItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ⛔ Auth not resolved yet
    if (user === undefined) return

    // 🔐 Not logged in → stop loading, no API call
    if (!user?.user_id) {
      setLoading(false)
      return
    }

    const fetchWishlist = async () => {
      try {
        setLoading(true)

        const res = await fetch(
          `/api/wishlist?user_id=${user.user_id}`,
          { cache: "no-store" }
        )

        const data = await res.json()

        if (data?.status && Array.isArray(data.wishlist)) {
          setWishlistItems(data.wishlist)
        } else {
          setWishlistItems([])
        }
      } catch (err) {
        console.error("Wishlist fetch failed:", err)
        setWishlistItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchWishlist()
  }, [user])

  /* ---------------- UI ---------------- */

  // ⏳ Loading (auth or wishlist)
  if (loading) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
          <Heart className="size-8 animate-pulse text-muted-foreground" />
        </div>
        <h2 className="mt-6 font-serif text-2xl animate-pulse">
          Loading wishlist...
        </h2>
      </div>
    )
  }

  // 🔐 Not logged in
  if (!user?.user_id) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
          <Heart className="size-8 text-muted-foreground" />
        </div>
        <h2 className="mt-6 font-serif text-2xl">You must be signed in</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to view your wishlist.
        </p>
        <Button
          onClick={openLogin}
          className="mt-8 px-8 py-3 uppercase tracking-widest"
        >
          Sign In
        </Button>
      </div>
    )
  }

  // ❤️ Logged in but empty wishlist
  if (!wishlistItems.length) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
          <Heart className="size-8 text-muted-foreground" />
        </div>
        <h2 className="mt-6 font-serif text-2xl">Your wishlist is empty</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Browse our collection and save items you love.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
        >
          Browse Collection
        </Link>
      </div>
    )
  }

  // ✅ Wishlist
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to Collection
      </Link>

      <h1 className="mt-6 font-serif text-3xl md:text-4xl">
        Your Wishlist
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        {wishlistItems.length} items saved
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <ProductCard
            key={item.product_id}
            product={item.product}
          />
        ))}
      </div>
    </div>
  )
}