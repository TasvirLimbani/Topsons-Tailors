import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Topsons Tailors",
  description: "How Topsons Tailors collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <section className="bg-primary px-6 py-20 text-center">
        <h1 className="font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
          Last updated: February 2026
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-2xl text-foreground">1. Information We Collect</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We collect information you provide directly, including your name, email
              address, phone number, shipping address, body measurements, and payment
              information when you place an order. We also collect usage data
              automatically, such as IP address, browser type, and pages visited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">2. How We Use Your Information</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your information is used to process and fulfil orders, communicate with
              you about your purchases, improve our products and services, send
              promotional communications (with your consent), and ensure the security
              of your account. Body measurements are stored securely and used
              exclusively for garment production.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">3. Data Storage & Security</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We implement industry-standard security measures including encryption,
              secure servers, and restricted access to protect your personal data.
              Payment information is processed through PCI-compliant third-party
              payment processors and is never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">4. Sharing of Information</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We do not sell your personal data. We may share your information with
              trusted service providers who assist in order fulfilment, payment
              processing, and delivery. These partners are contractually obligated to
              protect your data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">5. Cookies</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our website uses cookies to enhance your browsing experience, remember
              your preferences, and analyse site traffic. You can control cookie
              settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">6. Your Rights</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You have the right to access, correct, or delete your personal data at
              any time. You may also opt out of marketing communications. To exercise
              any of these rights, please contact us at privacy@Topsonstailors.com.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">7. Contact Us</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy, please reach out
              to us at privacy@Topsonstailors.com or write to us at our registered
              office address.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
