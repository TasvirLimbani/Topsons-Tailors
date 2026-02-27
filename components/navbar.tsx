"use client"

import Link from "next/link"
import {
  ShoppingBag,
  Heart,
  Menu,
  X,
  Search,
  User,
} from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useAuth } from "@/lib/auth-context"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Navbar() {
  const { totalItems } = useCart()
  const { totalWishlist } = useWishlist()
  const { user, openLogin, openSignup, logout } = useAuth()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [query, setQuery] = useState("")

  const router = useRouter()
  const pathname = usePathname()

  // ✅ CLOSE ALL ON ROUTE CHANGE
  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
    setAuthOpen(false)
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/products?search=${encodeURIComponent(query)}`)
    setQuery("")
    setSearchOpen(false)
  }

  const toggleSearch = () => {
    setSearchOpen(v => !v)
    setAuthOpen(false)
    setMobileOpen(false)
  }

  const toggleAuth = () => {
    setAuthOpen(v => !v)
    setSearchOpen(false)
    setMobileOpen(false)
  }

  const toggleMobile = () => {
    setMobileOpen(v => !v)
    setSearchOpen(false)
    setAuthOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-wide text-primary">
          {/* Topsons Tailors */}
          <img src="/hlogo.png" alt="Topsons Tailors Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm tracking-widest uppercase text-foreground/80 hover:text-primary">
            Home
          </Link>

          <Link href="/products" className="text-sm tracking-widest uppercase text-foreground/80 hover:text-primary">
            Collection
          </Link>

          <button onClick={toggleSearch}>
            <Search className="size-5 text-foreground/80 hover:text-primary" />
          </button>

          <Link href="/wishlist" className="relative">
            <Heart className="size-5" />
            {totalWishlist > 0 && <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">{totalWishlist}</span>}
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingBag className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>

          <button onClick={toggleAuth}>
            <User className="size-5 text-foreground/80 hover:text-primary" />
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleSearch}>
            <Search className="size-5" />
          </button>

          <button onClick={toggleAuth}>
            <User className="size-5" />
          </button>

          <button onClick={toggleMobile}>
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Search Panel */}
      {searchOpen && (
        <div className="border-t border-border bg-background px-6 py-4">
          <form onSubmit={handleSearch} className="mx-auto flex max-w-7xl gap-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="flex-1 rounded-md border border-border px-4 py-2 text-sm"
            />
            <button type="submit">
              <Search className="size-5" />
            </button>
            <button type="button" onClick={() => setSearchOpen(false)}>
              <X className="size-5" />
            </button>
          </form>
        </div>
      )}

      {/* ✅ AUTH PANEL (OLD UI + NEW LOGIC) */}
      {authOpen && (
        <div className="border-t border-border bg-background px-6 py-6">
          <div className="mx-auto max-w-sm space-y-4 text-center">

            {user ? (
              <>
                <h3 className="font-serif text-xl">
                  Welcome, {user.name}
                </h3>

                <Link
                  href="/profile"
                  onClick={() => setAuthOpen(false)}
                  className="block w-full rounded-md border border-border py-2 text-sm"
                >
                  View Profile
                </Link>

                <button
                  onClick={() => {
                    logout()
                    setAuthOpen(false)
                  }}
                  className="block w-full rounded-md bg-primary py-2 text-sm text-primary-foreground"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <h3 className="font-serif text-xl">Welcome</h3>
                <p className="text-sm text-muted-foreground">
                  Login or create an account to continue
                </p>

                <button
                  onClick={() => {
                    setAuthOpen(false)
                    openLogin()
                  }}
                  className="block w-full rounded-md bg-primary py-2 text-sm text-primary-foreground"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    setAuthOpen(false)
                    openSignup()
                  }}
                  className="block w-full rounded-md border border-border py-2 text-sm"
                >
                  Sign Up
                </button>
              </>
            )}

          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/products">Collection</Link>
            <Link href="/wishlist">Wishlist</Link>
          </div>
        </div>
      )}
    </header>
  )
}






