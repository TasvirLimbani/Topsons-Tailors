"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import type { Product } from "@/lib/products"
import { useWishlist } from "@/lib/wishlist-context"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
export function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { user } = useAuth()

  const user_id = user?.user_id;
  // ✅ CHECK WISHLIST
  useEffect(() => {
    if (!product.product_id) return

    const checkWishlist = async () => {
      try {
        const res = await fetch(`/api/wishlist?user_id=${user_id}`)
        const data = await res.json()

        if (data?.wishlist) {
          const found = data.wishlist.some(
            (item: any) => Number(item.product_id) === Number(product.product_id)
          )
          setIsWishlisted(found)
        }
      } catch (err) {
        console.error("Wishlist fetch error:", err)
      }
    }

    checkWishlist()
  }, [product.product_id, user_id])

  // ✅ TOGGLE WISHLIST
  const toggleWishlist = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!product.product_id) return

    try {
      const action = isWishlisted ? "remove" : "add"

      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id,
          product_id: product.product_id,
          action,
        }),
      })

      const data = await res.json()

      if (!data.error) {
        setIsWishlisted(prev => !prev)
      } else {
        console.error(data.error)
      }
    } catch (err) {
      console.error("Wishlist toggle error:", err)
    }
  }
  return (
    <Link
      href={`/products/${product.product_id}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
        <Image
          src={product.image || product.images![0]} // Fallback to main image if images array is empty
          alt={product.product_name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="border-none bg-primary/90 text-primary-foreground text-[10px] tracking-wider uppercase">
            Fully Customizable
          </Badge>
        </div>
        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-card/80 text-foreground/70 backdrop-blur-sm transition-all hover:bg-card hover:text-primary"
          aria-label={isWishlisted ? `Remove ${product.product_name} from wishlist` : `Add ${product.product_name} to wishlist`}
        >
          <Heart
            className={`size-4 ${isWishlisted ? "fill-primary text-primary" : ""}`}
          />
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
          {product.fabric}
        </p>
        <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
          {product.product_name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {"Starting from \u20B9"}
          {product.price.toLocaleString("en-IN")}
        </p>
        <span className="mt-2 inline-flex w-fit items-center border-b border-foreground/30 pb-0.5 text-xs tracking-widest uppercase text-foreground/70 transition-colors group-hover:border-primary group-hover:text-primary">
          Customize
        </span>
      </div>
    </Link>
  )
}



