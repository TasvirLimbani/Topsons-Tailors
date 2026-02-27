import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-wide">Topsons Tailors</h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Crafted luxury for the modern gentleman. Every stitch tells a story of
              precision and elegance.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary-foreground/50">
              Collection
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/products?category=shirts" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Shirts
                </Link>
              </li>
              <li>
                <Link href="/products?category=pants" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Trousers
                </Link>
              </li>
              <li>
                <Link href="/products?category=blazers" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Blazers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary-foreground/50">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/our-story" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary-foreground/50">
              Support
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/size-guide" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care-instructions" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/returns-exchanges" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/40">
            {'© 2026 Topsons Tailors. All rights reserved.'}
          </p>
          <p className="mt-2 text-center text-[11px] text-primary-foreground/30">
            Designed and managed by Radhe Software Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
