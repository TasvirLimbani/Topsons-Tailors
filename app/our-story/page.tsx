import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | Topsons Tailors",
  description: "The heritage, craft, and passion behind Topsons Tailors bespoke tailoring.",
}

export default function OurStoryPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary px-6 py-20 text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50">
          Since 2018
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Our Story
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
          A legacy built on precision, passion, and the relentless pursuit of
          the perfect fit.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-foreground">The Beginning</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Topsons Tailors was born from a simple belief: every gentleman deserves
              clothing that fits as if it were made for him -- because it is.
              Founded in 2018, we set out to bridge the gap between traditional
              bespoke tailoring and the convenience of modern technology.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our founders spent years apprenticing under master tailors in Savile
              Row and Italian ateliers, absorbing centuries of accumulated wisdom
              about fabric, construction, and the art of drape.
            </p>
          </section>

          <div className="h-px bg-border" />

          <section>
            <h2 className="font-serif text-2xl text-foreground">Our Craft</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every garment we create is the result of over 40 individual
              measurements, multiple fittings, and the careful selection of the
              finest fabrics from mills in Italy, England, and Japan. Our master
              tailors bring decades of experience to every stitch, ensuring that each
              piece not only looks exceptional but feels extraordinary against the
              skin.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We believe that true luxury is invisible. It is the hidden hand
              stitching, the perfectly aligned patterns at the seams, the collar that
              rolls just so. These are the details that distinguish a Topsons Tailors
              garment from anything off the rack.
            </p>
          </section>

          <div className="h-px bg-border" />

          <section>
            <h2 className="font-serif text-2xl text-foreground">Our Promise</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We are committed to creating garments that stand the test of time,
              both in style and construction. Sustainability is woven into our
              process -- we source responsibly, produce only what is ordered, and use
              fabrics that age gracefully over years of wear.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From your first consultation to the final fitting, our team ensures
              that every interaction reflects the care and attention we invest in
              every garment. Welcome to the Topsons Tailors experience.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
