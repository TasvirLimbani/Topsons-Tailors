import { Ruler, Gem, Scissors, Glasses } from "lucide-react"

const features = [
  {
    icon: Ruler,
    title: "Custom Fit",
    description: "Every measurement tailored to your unique physique for the perfect silhouette.",
  },
  {
    icon: Gem,
    title: "Premium Fabrics",
    description: "Sourced from the finest mills in Italy, England, and Japan for unmatched quality.",
  },
  {
    icon: Scissors,
    title: "Made to Measure",
    description: "Handcrafted by master tailors with decades of bespoke experience.",
  },
  {
    icon: Glasses,
    title: "Virtual Try-On",
    description: "AI-powered fitting technology to visualize your garment before it is crafted.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            The Topsons Difference
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
