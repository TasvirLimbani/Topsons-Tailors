import { CartView } from "@/components/cart/cart-view"

export const metadata = {
  title: "Your Bag | Topsons Tailors",
  description: "Review your bespoke garment selections before checkout.",
}

export default function CartPage() {
  return (
    <main>
      <CartView />
    </main>
  )
}
