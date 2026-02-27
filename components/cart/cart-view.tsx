"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function CartView() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
          <ShoppingBag className="size-8 text-muted-foreground" />
        </div>
        <h2 className="mt-6 font-serif text-2xl text-foreground">Your bag is empty</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Discover our bespoke collection and create something extraordinary.
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
        Continue Shopping
      </Link>

      <h1 className="mt-6 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Your Bag
      </h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-6 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-6 rounded-sm border border-border bg-card p-4"
            >
              <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-sm bg-secondary">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                      {item.product.fabric}
                    </p>
                    <h3 className="mt-1 font-serif text-lg text-foreground">
                      {item.product.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-foreground">
                      {"\u20B9"}
                      {item.product.basePrice.toLocaleString("en-IN")}
                      {item.monogram && " + \u20B9499"}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-muted-foreground transition-colors hover:text-destructive"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {Object.entries(item.mainSelections).map(([key, value]) => (
                    <span
                      key={key}
                      className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] text-foreground"
                    >
                      {key}: {value}
                    </span>
                  ))}
                  {Object.entries(item.advancedSelections)
                    .filter(([, v]) => v)
                    .map(([key, value]) => (
                      <span
                        key={key}
                        className="rounded-sm bg-primary/10 px-2 py-0.5 text-[10px] text-primary"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  {item.monogram && (
                    <span className="rounded-sm bg-accent/30 px-2 py-0.5 text-[10px] text-accent-foreground">
                      Monogram: {item.monogram}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="flex size-8 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-foreground">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="flex size-8 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary"
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="rounded-sm border border-border bg-card p-6">
            <h2 className="font-serif text-xl text-foreground">Order Summary</h2>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">
                  {"\u20B9"}
                  {totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monogram add-ons</span>
                <span className="text-foreground">
                  {"\u20B9"}
                  {(items.filter((i) => i.monogram).length * 499).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tailoring</span>
                <span className="text-foreground">Complimentary</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">Free</span>
              </div>

              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="font-serif text-xl text-foreground">
                    {"\u20B9"}
                    {(totalPrice + items.filter((i) => i.monogram).length * 499).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-sm bg-primary py-4 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90">
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-[10px] leading-relaxed text-muted-foreground">
              Estimated delivery: 2-3 weeks from order confirmation.
              All garments are made to your exact specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
