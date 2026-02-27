import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Gentleman wearing bespoke tailored suit"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-card/70">
          Bespoke Tailoring
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-card md:text-7xl md:leading-tight text-balance">
          Crafted for the Modern Gentleman
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-card/80">
          Design your perfect fit. Premium fabrics, expert craftsmanship, delivered to your door.
        </p>
        <Link
          href="/products"
          className="mt-10 inline-flex items-center gap-2 rounded-sm bg-card px-8 py-4 text-sm font-medium tracking-widest uppercase text-foreground transition-all hover:bg-card/90"
        >
          Customize Now
        </Link>
      </div>
    </section>
  )
}
