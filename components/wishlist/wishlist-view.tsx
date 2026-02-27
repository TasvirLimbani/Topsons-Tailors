"use client"

import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"
import { useWishlist } from "@/lib/wishlist-context"
import { ProductCard } from "@/components/products/product-card"

export function WishlistView() {
  const { items } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
          <Heart className="size-8 text-muted-foreground" />
        </div>
        <h2 className="mt-6 font-serif text-2xl text-foreground">Your wishlist is empty</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Browse our collection and save items you love.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Browse Collection
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to Collection
      </Link>

      <h1 className="mt-6 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Your Wishlist
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {items.length} {items.length === 1 ? "item" : "items"} saved
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  )
}
