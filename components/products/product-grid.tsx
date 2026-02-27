"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "./product-card"
import { ProductFilters } from "./product-filters"

export function ProductGrid() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

const [selectedCategory, setSelectedCategory] = useState<string>(
  categoryParam?.toLowerCase() || "all"
)

  const [products, setProducts] = useState<any[]>([])

  // 🔥 Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/filter?category_id=" + 1)
        const data = await res.json()

        if (data.status) {
          setProducts(data.products)
        }
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchProducts()
  }, [])

  // 🔥 Update category from URL
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  // 🔥 Filter Logic
  const filtered =
  selectedCategory === "all"
    ? products
    : products.filter(
        (p) =>
          p.category_name === selectedCategory
      )

  return (
    <div>
      <ProductFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  )
}