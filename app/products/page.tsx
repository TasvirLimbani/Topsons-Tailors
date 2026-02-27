import { Suspense } from "react"
import { ProductGrid } from "@/components/products/product-grid"

export const metadata = {
  title: "Collection | Topsons Tailors",
  description: "Explore our bespoke collection of shirts, trousers, and blazers. Fully customizable, premium fabrics, made to measure.",
}

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
          Bespoke Garments
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Each piece is fully customizable to your exact preferences. Select your style, choose your details, and we bring it to life.
        </p>
      </div>

      <div className="mt-12">
        <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading collection...</div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </main>
  )
}
