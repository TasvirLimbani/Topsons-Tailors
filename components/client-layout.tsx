// "use client"

// import type { ReactNode } from "react"
// import { CartProvider } from "@/lib/cart-context"
// import { WishlistProvider } from "@/lib/wishlist-context"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// export function ClientLayout({ children }: { children: ReactNode }) {
//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <Navbar />
//         <div className="pt-[73px]">
//           {children}
//         </div>
//         <Footer />
//       </WishlistProvider>
//     </CartProvider>
//   )
// }




"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { AuthProvider } from "@/lib/auth-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AuthModal } from "@/components/AuthModal"

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
  <CartProvider>
    <WishlistProvider>
      <Navbar />
      {children}
      <Footer />
      <AuthModal />
    </WishlistProvider>
  </CartProvider>
</AuthProvider>
  )
}