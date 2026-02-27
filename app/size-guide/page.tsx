import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Size Guide | Topsons Tailors",
  description: "Find your perfect fit with our comprehensive size guide for shirts, trousers, and blazers.",
}

const shirtSizes = [
  { size: "S", neck: '14.5"', chest: '36"', sleeve: '32"', body: '28"' },
  { size: "M", neck: '15"', chest: '38"', sleeve: '33"', body: '29"' },
  { size: "L", neck: '15.5"', chest: '40"', sleeve: '34"', body: '30"' },
  { size: "XL", neck: '16"', chest: '42"', sleeve: '35"', body: '31"' },
  { size: "XXL", neck: '16.5"', chest: '44"', sleeve: '36"', body: '32"' },
]

const pantSizes = [
  { size: "28", waist: '28"', hip: '35"', inseam: '30"', thigh: '21"' },
  { size: "30", waist: '30"', hip: '37"', inseam: '31"', thigh: '22"' },
  { size: "32", waist: '32"', hip: '39"', inseam: '32"', thigh: '23"' },
  { size: "34", waist: '34"', hip: '41"', inseam: '32"', thigh: '24"' },
  { size: "36", waist: '36"', hip: '43"', inseam: '33"', thigh: '25"' },
]

const blazerSizes = [
  { size: "36", chest: '36"', shoulder: '17"', sleeve: '24"', length: '28"' },
  { size: "38", chest: '38"', shoulder: '17.5"', sleeve: '24.5"', length: '29"' },
  { size: "40", chest: '40"', shoulder: '18"', sleeve: '25"', length: '30"' },
  { size: "42", chest: '42"', shoulder: '18.5"', sleeve: '25.5"', length: '30.5"' },
  { size: "44", chest: '44"', shoulder: '19"', sleeve: '26"', length: '31"' },
]

function SizeTable({ title, headers, rows }: { title: string; headers: string[]; rows: Record<string, string>[] }) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 text-left text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/50 transition-colors hover:bg-secondary/50">
                {Object.values(row).map((val, j) => (
                  <td key={j} className={`px-4 py-3 text-foreground ${j === 0 ? "font-medium" : ""}`}>
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function SizeGuidePage() {
  return (
    <main className="bg-background">
      <section className="bg-primary px-6 py-20 text-center">
        <h1 className="font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Size Guide
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
          All measurements are in inches. For the best fit, we recommend our
          custom measurement option on the product page.
        </p>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-16">
          <SizeTable
            title="Shirts"
            headers={["Size", "Neck", "Chest", "Sleeve", "Body Length"]}
            rows={shirtSizes}
          />

          <div className="h-px bg-border" />

          <SizeTable
            title="Trousers"
            headers={["Size", "Waist", "Hip", "Inseam", "Thigh"]}
            rows={pantSizes}
          />

          <div className="h-px bg-border" />

          <SizeTable
            title="Blazers"
            headers={["Size", "Chest", "Shoulder", "Sleeve", "Length"]}
            rows={blazerSizes}
          />
        </div>

        <div className="mt-16 rounded-sm border border-border bg-card p-6">
          <h3 className="font-serif text-lg text-foreground">How to Measure</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Neck:</span> Measure
              around the base of your neck, where the collar sits. Add half an
              inch for comfort.
            </li>
            <li>
              <span className="font-medium text-foreground">Chest:</span> Measure
              around the fullest part of your chest, under your arms, keeping the
              tape level.
            </li>
            <li>
              <span className="font-medium text-foreground">Waist:</span> Measure
              around your natural waistline, where you would normally wear your
              trousers.
            </li>
            <li>
              <span className="font-medium text-foreground">Sleeve:</span> Measure
              from the centre back of your neck, across the shoulder, and down to
              your wrist.
            </li>
            <li>
              <span className="font-medium text-foreground">Inseam:</span> Measure
              from the crotch seam to the bottom of the leg.
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
