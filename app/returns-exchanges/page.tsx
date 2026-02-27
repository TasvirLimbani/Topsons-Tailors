import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Returns & Exchanges |Topsons Tailors",
  description:
    "Learn about Topsons Tailors' returns, exchanges, alterations, and refund policy.",
}

export default function ReturnsExchangesPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary px-6 py-20 text-center">
        <h1 className="font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Returns & Exchanges
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
          Last updated: February 2026
        </p>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-2xl text-foreground">
              1. Made-to-Measure Policy
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All garments at Topsons Tailors are made-to-measure or customized based
              on your individual measurements and style preferences. Due to the
              personalized nature of our products, we do not accept returns or
              refunds once an order has been confirmed and production has begun.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              2. Eligibility for Exchanges
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Exchanges are only permitted in cases of manufacturing defects,
              incorrect stitching, fabric damage, or if the final product does not
              match the confirmed order specifications. Requests must be raised
              within 48 hours of delivery along with clear images or videos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              3. Alterations & Fit Adjustments
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Minor alterations may be offered to ensure the best possible fit.
              Depending on the situation, alterations may be done free of charge or
              at a minimal cost. Customers are responsible for shipping the garment
              to our studio unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              4. Non-Returnable Items
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The following items are non-returnable and non-exchangeable: custom
              stitched garments, altered products, discounted or promotional items,
              accessories, and orders placed with incomplete or incorrect
              measurements provided by the customer.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              5. Order Cancellations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Orders may be cancelled within 12 hours of placement, provided the
              production process has not started. Once fabric cutting or stitching
              begins, cancellations are no longer possible.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              6. Refund Policy
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Refunds are issued only in rare cases where an exchange or alteration
              is not feasible. Approved refunds will be processed to the original
              payment method within 7–10 business days after inspection and
              approval.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              7. How to Raise a Request
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              To request an exchange, alteration, or report an issue, please contact
              us at support@Topsonstailors.com with your order number, a brief
              description of the issue, and supporting images or videos.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}