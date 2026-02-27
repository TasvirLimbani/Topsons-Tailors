import type { Metadata } from "next"
import { WishlistView } from "@/components/wishlist/wishlist-view"

export const metadata: Metadata = {
  title: "Wishlist | Topsons Tailors",
  description: "Your saved items from the Topsons Tailors bespoke collection.",
}

export default function WishlistPage() {
  return (
    <main>
      <WishlistView />
    </main>
  )
}
