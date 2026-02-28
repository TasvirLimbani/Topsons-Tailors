"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ShoppingBag, Settings2, Minus, Plus, Heart } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { OptionSelector } from "./option-selector"
import { CustomizeDrawer } from "./customize-drawer"
import { VrTryOnButton } from "@/components/vr-try-on"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { getCustomizationForCategory, Product } from "@/lib/products"
import { useAuth } from "@/lib/auth-context"

// ✅ Interface outside component
interface WishlistButtonProps {
  product_id: number
  user_id: number
}

export function ProductDetail({ id }: { id: string }) {
  const router = useRouter()
  const { addItem, getItemQuantity, updateQuantity } = useCart()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  // ✅ All hooks at top level
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mainSelections, setMainSelections] = useState<Record<string, string>>({})
  const [advancedSelections, setAdvancedSelections] = useState<Record<string, string>>({})
  const [monogram, setMonogram] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { user, openLogin, openSignup, logout } = useAuth()

  const user_id = user?.user_id;
  // ✅ Fetch product by ID
  useEffect(() => {
    if (!id) return

    let ignore = false

    const fetchProduct = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `/api/productdetail?product_id=${encodeURIComponent(id)}`,
          { cache: "no-store" }
        )
        if (!res.ok) throw new Error("Network error")
        const data = await res.json()
        if (!ignore) setProduct(data?.product || null)
      } catch (err) {
        if (!ignore) setProduct(null)
        console.error("Fetch error:", err)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchProduct()
    return () => { ignore = true }
  }, [id])

  // ✅ Fetch wishlist status
  useEffect(() => {
    if (!id) return
    const checkWishlist = async () => {
      try {
        const res = await fetch(`/api/wishlist?user_id=${user_id}`)
        const data = await res.json()
        if (data.wishlist) {
          const found = data.wishlist.some((item: any) => item.product_id == id)
          setIsWishlisted(found)
        }
      } catch (err) {
        console.error("Wishlist fetch error:", err)
      }
    }
    checkWishlist()
  }, [id])

  // ✅ Compute customization
  const customization = useMemo(() => {
    if (!product) return null
    return getCustomizationForCategory(product.category_name)
  }, [product])

  // ✅ Initialize selections
  useEffect(() => {
    if (!customization) return

    const mainDefaults: Record<string, string> = {}
    customization.main.forEach((opt) => {
      mainDefaults[opt.label] = opt.choices[0]
    })

    const advancedDefaults: Record<string, string> = {}
    customization.advanced.forEach((opt) => {
      advancedDefaults[opt.label] = opt.choices[0]
    })

    setMainSelections(mainDefaults)
    setAdvancedSelections(advancedDefaults)
  }, [customization])

  // ✅ Add to Bag
  const handleAddToBag = () => {
    if (!product) return
    addItem({
      product,
      quantity: 1,
      mainSelections,
      advancedSelections,
      monogram: monogram || undefined,
    })
  }

  // ✅ Wishlist toggle function
  const toggleWishlist = async () => {
    if (!id) return
    if(user_id === undefined) return                         openLogin()

    try {
      const action = isWishlisted ? "remove" : "add"
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, product_id: id, action }),
      })
      const data = await res.json()
      if (!data.error) {
        setIsWishlisted(!isWishlisted)
      } else {
        console.error(data.error)
      }
    } catch (err) {
      console.error("Wishlist toggle error:", err)
    }
  }

  // ✅ Loading skeleton
  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8 animate-pulse">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-sm bg-gray-200" />
            <div className="flex gap-3">
              <div className="w-20 aspect-square bg-gray-200 rounded-sm" />
              <div className="w-20 aspect-square bg-gray-200 rounded-sm" />
              <div className="w-20 aspect-square bg-gray-200 rounded-sm" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-8 w-64 bg-gray-200 rounded" />
            <div className="h-6 w-40 bg-gray-200 rounded" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>
            <div className="h-12 w-full bg-gray-200 rounded" />
            <div className="h-12 w-full bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (!product || !customization) return <div className="p-10">Product not found.</div>

  const wishlisted = isWishlisted
  const quantity = getItemQuantity(id as string)
  const categoryLabel =
    product.category_name.toLowerCase() === "shirts"
      ? "Shirt"
      : product.category_name.toLowerCase() === "pants"
        ? "Trousers"
        : "Blazer"

  const showMonogram = product.category_name.toLowerCase() !== "pants"
  const advancedCount = Object.keys(advancedSelections).length

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <button onClick={() => router.push("/")}>Home</button>
          <span>/</span>
          <button onClick={() => router.push("/products")}>Collection</button>
          <span>/</span>
          <span className="text-foreground">{product.product_name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
              <Image
                src={product.images[selectedImage]}
                alt={product.product_name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {(
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative aspect-square w-20 overflow-hidden rounded-sm border-2 ${selectedImage === i
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.product_name} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details & Customization */}
          <div className="flex flex-col">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
              {product.fabric}
            </p>
            <h1 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              {product.product_name}
            </h1>
            <div className="flex row">
              <p className="mt-2 text-2xl font-light text-foreground">
                {"\u20B9"}
                {product.discounted_price.toLocaleString("en-IN")}
                {monogram && showMonogram && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {"+\u20B9499 monogram"}
                  </span>
                )}
              </p>
              <p className="ml-2 mt-2 text-1xl font-light text-muted-foreground content-center line-through">
                {"\u20B9"}
                {product.price.toLocaleString("en-IN")}
                {monogram && showMonogram && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {"+\u20B9499 monogram"}
                  </span>
                )}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Main Customization Panel */}
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                  {categoryLabel} Details
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {customization.main.map((option) => (
                <OptionSelector
                  key={option.label}
                  label={option.label}
                  choices={option.choices}
                  selected={mainSelections[option.label]}
                  onSelect={(v) =>
                    setMainSelections((prev) => ({ ...prev, [option.label]: v }))
                  }
                />
              ))}
            </div>

            {/* Size Guide Toggle */}
            <div className="mt-6">
              <Tabs defaultValue="standard">
                <TabsList className="w-full bg-secondary">
                  <TabsTrigger value="standard" className="flex-1 text-xs">
                    Standard Size
                  </TabsTrigger>
                  <TabsTrigger value="custom" className="flex-1 text-xs">
                    Custom Measurements
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="standard" className="mt-4">
                  <p className="text-xs text-muted-foreground">
                    Select your standard size above. We recommend checking our size guide for the best fit.
                  </p>
                </TabsContent>
                <TabsContent value="custom" className="mt-4">
                  <div className="grid grid-cols-2 gap-3">
                    {product.category_name.toLowerCase() === "shirts" && (
                      <>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Neck (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 15.5"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Chest (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 40"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Sleeve (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 34"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Body Length (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 30"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                      </>
                    )}
                    {product.category_name.toLowerCase() === "pants" && (
                      <>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Waist (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 32"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Hip (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 38"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Inseam (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 32"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Thigh (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 23"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                      </>
                    )}
                    {product.category_name.toLowerCase() === "blazers" && (
                      <>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Chest (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 40"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Shoulder (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 18"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Sleeve (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 25"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                            Jacket Length (inches)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 30"
                            className="mt-1 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3">
              {/* Add to Bag / Quantity Selector */}
              {quantity === 0 ? (
                <button
                  onClick={handleAddToBag}
                  className="flex items-center justify-center gap-2 rounded-sm bg-primary py-4 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <ShoppingBag className="size-4" />
                  Add to Bag
                </button>
              ) : (
                <div className="flex items-center justify-between rounded-sm border border-primary bg-primary/5 px-4 py-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-primary">
                    In Your Bag
                  </span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(product.product_id as unknown as string, quantity - 1)}
                      className="flex size-10 items-center justify-center rounded-sm border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="w-8 text-center text-lg font-semibold text-primary">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.product_id as unknown as string, quantity + 1)}
                      className="flex size-10 items-center justify-center rounded-sm border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={toggleWishlist}
                className={`flex items-center justify-center gap-2 rounded-sm border py-4 text-sm font-medium tracking-widest uppercase transition-all ${wishlisted
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
              >
                <Heart
                  className={`size-4 ${isWishlisted ? "fill-primary text-primary" : ""}`}
                />
                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
              </button>


              {/* Try On Yourself */}
              <VrTryOnButton productImageUrl={product.image || product.images![selectedImage]} />

              {/* Customize Further */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center justify-center gap-2 rounded-sm border border-primary py-4 text-sm font-medium tracking-widest uppercase text-primary transition-all hover:bg-primary/5"
              >
                <Settings2 className="size-4" />
                Customize Further
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium">
                  {advancedCount} options
                </span>
              </button>
            </div>

            {/* Selected summary */}
            <div className="mt-8 rounded-sm border border-border bg-card p-4">
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                Your Selections
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {Object.entries(mainSelections).map(([key, value]) => (
                  <span
                    key={key}
                    className="rounded-sm bg-secondary px-2.5 py-1 text-[11px] text-foreground"
                  >
                    {key}: <span className="font-medium">{value}</span>
                  </span>
                ))}
                {Object.entries(advancedSelections)
                  .filter(([, value]) => value)
                  .map(([key, value]) => (
                    <span
                      key={key}
                      className="rounded-sm bg-primary/10 px-2.5 py-1 text-[11px] text-primary"
                    >
                      {key}: <span className="font-medium">{value}</span>
                    </span>
                  ))}
                {monogram && showMonogram && (
                  <span className="rounded-sm bg-accent/30 px-2.5 py-1 text-[11px] text-accent-foreground">
                    Monogram: <span className="font-medium">{monogram}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomizeDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        options={customization.advanced}
        selections={advancedSelections}
        onSelectionChange={(label, value) =>
          setAdvancedSelections((prev) => ({
            ...prev,
            [label]: value,
          }))
        }
        monogram={monogram}
        onMonogramChange={setMonogram}
        categoryLabel={categoryLabel}
        showMonogram={showMonogram}
      />
    </>
  )
}