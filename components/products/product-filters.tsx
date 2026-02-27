"use client"

import { useEffect, useState } from "react"

interface Category {
  category_id: string
  category_name: string
  image: string
}

interface ProductFiltersProps {
  selectedCategory: string
  onCategoryChange: (cat: string) => void
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category")
        const data = await res.json()

        if (data.status) {
          setCategories(data.categories)
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {/* Default All Button */}
      <button
        onClick={() => onCategoryChange("all")}
        className={`rounded-sm px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all ${selectedCategory === "all"
            ? "bg-primary text-primary-foreground"
            : "border border-border bg-card text-foreground hover:bg-secondary"
          }`}
      >
        All
      </button>

      {/* Dynamic Categories */}
      {categories.map((cat) => (
        <button
          key={cat.category_id}
          onClick={() => onCategoryChange(cat.category_name)}
          className={`rounded-sm px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all ${selectedCategory === cat.category_name
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-foreground hover:bg-secondary"
            }`}
        >
          {cat.category_name}
        </button>
      ))}
    </div>
  )
}