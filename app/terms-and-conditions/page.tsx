import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Maison Tailors",
  description: "Terms and conditions governing the use of Topsons Tailors services.",
}

export default function TermsPage() {
  return (
    <main className="bg-background">
      <section className="bg-primary px-6 py-20 text-center">
        <h1 className="font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
          Last updated: February 2026
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-2xl text-foreground">1. General Terms</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              By accessing and using the Topsons Tailors website and services, you
              agree to be bound by these Terms and Conditions. If you do not agree
              with any part of these terms, you should discontinue use of our website
              and services immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">2. Products & Customization</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All garments are made-to-order based on the specifications and
              measurements you provide. Due to the bespoke nature of our products,
              colours, fabrics, and finishes may have slight natural variations from
              what is displayed on screen. Custom-made garments cannot be returned
              unless there is a manufacturing defect.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">3. Pricing & Payment</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All prices are listed in Indian Rupees and are inclusive of applicable
              taxes unless stated otherwise. Payment is required in full at the time
              of placing your order. We accept all major credit and debit cards, UPI,
              and net banking.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">4. Order Processing & Delivery</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Bespoke orders typically take 2-4 weeks for production. Delivery
              timelines vary based on your location and will be communicated at the
              time of order confirmation. We are not liable for delays caused by
              unforeseen circumstances such as natural disasters or courier service
              disruptions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">5. Alterations & Warranty</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We offer one complimentary alteration within 30 days of delivery if the
              garment does not fit as expected due to measurement discrepancies on
              our part. Our garments carry a 6-month warranty against manufacturing
              defects.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">6. Intellectual Property</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All content on this website, including text, images, logos, and design
              elements, is the property of Topsons Tailors and is protected by
              applicable intellectual property laws. Unauthorised reproduction or
              distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">7. Limitation of Liability</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Topsons Tailors shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or products.
              Our total liability shall not exceed the amount paid for the specific
              product in question.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">8. Governing Law</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These terms are governed by the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in our registered
              city of operation.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
