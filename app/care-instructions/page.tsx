import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Instructions | Topsonss Tailors",
  description: "How to care for your Topsonss Tailors garments to ensure they last a lifetime.",
}

const careItems = [
  {
    title: "Shirts",
    instructions: [
      "Machine wash in cold water on a gentle cycle or hand wash for best results.",
      "Use a mild, colour-safe detergent. Avoid bleach.",
      "Button all buttons before washing to maintain shape.",
      "Hang dry on a padded hanger or lay flat. Avoid wringing.",
      "Iron on medium heat while slightly damp for a crisp finish. Use steam for stubborn creases.",
      "Store on wooden or padded hangers. Avoid wire hangers that may distort the collar and shoulders.",
    ],
  },
  {
    title: "Trousers",
    instructions: [
      "Dry clean is recommended for wool and wool-blend trousers.",
      "Cotton and linen trousers may be machine washed in cold water on a gentle cycle.",
      "Always turn trousers inside out before washing to protect the outer fabric.",
      "Press with a medium-hot iron using a pressing cloth to avoid shine marks.",
      "Hang from trouser hangers by the cuff to maintain the crease line.",
      "Allow at least 24 hours between wears to let the fabric recover its shape.",
    ],
  },
  {
    title: "Blazers",
    instructions: [
      "Always dry clean blazers. Do not machine wash or hand wash.",
      "After each wear, brush with a soft garment brush to remove dust and lint.",
      "Store on a wide, contoured hanger to preserve the shoulder shape.",
      "Use a garment bag for long-term storage to protect from moths and dust.",
      "Steam rather than iron to remove wrinkles -- this is gentler on the fabric.",
      "Avoid wearing the same blazer on consecutive days. Rotation extends garment life.",
    ],
  },
]

export default function CareInstructionsPage() {
  return (
    <main className="bg-background">
      <section className="bg-primary px-6 py-20 text-center">
        <h1 className="font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Care Instructions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
          Proper care ensures your bespoke garments look and feel exceptional
          for years to come.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-12">
          {careItems.map((item) => (
            <section key={item.title}>
              <h2 className="font-serif text-2xl text-foreground">{item.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {item.instructions.map((instruction, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-border bg-card p-6">
          <h3 className="font-serif text-lg text-foreground">General Tips</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              Treat stains immediately -- blot gently with a clean cloth, do not
              rub.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              Keep garments away from direct sunlight during storage to prevent
              fading.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              Use cedar blocks in your wardrobe for natural moth protection.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              For any garment concerns, contact us at care@tailors.com.
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
