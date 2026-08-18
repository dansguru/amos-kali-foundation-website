import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCheck, ShieldCheck, UserRoundSearch, LockKeyhole } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Amos Kali Foundation" },
      {
        name: "description",
        content:
          "Learn how Amos Kali Foundation handles personal information, secure communications, and donor data.",
      },
      { property: "og:title", content: "Privacy Policy | Amos Kali Foundation" },
      {
        property: "og:description",
        content: "Our commitments around privacy, data protection, and responsible stewardship.",
      },
    ],
  }),
  component: PrivacyPage,
});

const principles = [
  {
    icon: LockKeyhole,
    title: "We protect what is entrusted to us",
    text: "We treat personal information, donor records, and beneficiary stories with care and respect. Our goal is to use data only for the work it was collected for and to keep it secure.",
  },
  {
    icon: UserRoundSearch,
    title: "We collect only what we need",
    text: "We collect information required to respond to enquiries, process donations, coordinate volunteers, and support programme delivery. We do not keep unnecessary personal data.",
  },
  {
    icon: ShieldCheck,
    title: "We respect consent and choice",
    text: "Where applicable, we give people clear opportunities to opt in or opt out of marketing communications, newsletters, and follow-up outreach.",
  },
  {
    icon: BookCheck,
    title: "We are transparent and accountable",
    text: "We explain how information is used, who it may be shared with, and how people can contact us to ask questions or request updates to their data.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Responsible stewardship of personal information"
        description="This policy explains how Amos Kali Foundation handles information across our website, programmes, donor communications, and community outreach."
      />

      <main className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section className="rounded-xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-primary">Who we are</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Amos Kali Foundation is a Christian faith-based non-profit organisation working with communities in Kenya and beyond to support children, families, youth, and local initiatives. We are committed to protecting the privacy and dignity of the people we serve, partner with, and engage online.
              </p>
            </section>

            <section className="rounded-xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-primary">Information we may collect</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>• Contact details such as name, phone number, email address, and mailing address.</li>
                <li>• Donation information needed to process gifts and send acknowledgement receipts.</li>
                <li>• Volunteer and partnership information, including skills, interests, and availability.</li>
                <li>• Programme registration data, beneficiary needs assessments, and follow-up notes where necessary for service delivery.</li>
                <li>• Website usage information, such as browser type, basic traffic data, and pages visited, to improve site performance and usability.</li>
              </ul>
            </section>

            <section className="rounded-xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-primary">How we use your information</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We use personal information to respond to enquiries, process donations, support programme delivery, coordinate volunteers, communicate with partners, and maintain lawful records. We also use anonymised or aggregated information to understand engagement with our website and improve the experience for our supporters and communities.
              </p>
            </section>

            <section className="rounded-xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-primary">How we protect information</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We apply reasonable administrative, organisational, and technical safeguards to reduce the risk of unauthorised access, misuse, loss, or disclosure. This includes secure internal workflows, restricted access, and careful handling of sensitive records. While no system can be completely risk-free, we take the protection of personal information seriously and continue to review our practices.
              </p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">Our principles</h3>
              <div className="mt-5 space-y-4">
                {principles.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                      <p className="mt-1 text-xs leading-6 text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">Contact us</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>📍 Kali House, Ngong Road, Nairobi, Kenya</li>
                <li>📧 hello@amoskalifoundation.org</li>
                <li>📞 +254 799 116 963</li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-8 rounded-xl border border-border bg-card p-7 shadow-card">
          <h2 className="text-2xl font-semibold text-primary">Sharing, retention, and your rights</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              We do not sell personal data. We may share information with trusted service providers where necessary to deliver support services, process donations, or maintain digital systems. These partners are expected to operate under confidentiality obligations and appropriate security standards.
            </p>
            <p>
              We keep personal information only for as long as necessary to fulfil the purpose for which it was collected, comply with legal obligations, or support legitimate organisational operations. If you wish to update your information, request deletion, or ask how we are using your data, please contact us using the details above.
            </p>
            <p>
              We may update this policy from time to time to reflect changes in how we operate or new legal obligations. Any material updates will be posted here with a revised date.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-green-hover">
            Contact our team
          </Link>
          <Link to="/terms" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent-soft">
            Read our Terms of Service
          </Link>
        </div>
      </main>
    </>
  );
}
