import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Amos Kali Foundation" },
      {
        name: "description",
        content:
          "Read the terms governing use of the Amos Kali Foundation website, donations, and digital engagement.",
      },
      { property: "og:title", content: "Terms of Service | Amos Kali Foundation" },
      {
        property: "og:description",
        content: "Website terms and responsibilities for supporters, volunteers, and partners.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Use of the website",
    body:
      "The Amos Kali Foundation website is provided for informational, educational, and engagement purposes. You may use the site to learn about our mission, programmes, and opportunities to support vulnerable communities. You agree not to misuse our digital platforms, interfere with their security, or engage in unlawful activity while using the site.",
  },
  {
    title: "Donations and support",
    body:
      "All donations are voluntary and are handled in accordance with the applicable rules and our donor acknowledgement process. While we aim to use gifts responsibly and transparently, actual use of funds may vary depending on the programme needs, operational requirements, and approved priorities of the organisation.",
  },
  {
    title: "Volunteer and partnership engagement",
    body:
      "When you express interest in volunteering, collaborating, or partnering with the Foundation, the information you share helps us evaluate and coordinate involvement. We may contact you to discuss opportunities, logistics, or next steps in line with our mission.",
  },
  {
    title: "Content and intellectual property",
    body:
      "Text, images, stories, branding, and materials published on this website are owned by Amos Kali Foundation or used with permission. Unless otherwise stated, they may not be copied, reproduced, or republished without prior written consent.",
  },
  {
    title: "External links and third-party content",
    body:
      "Our website may include links to external platforms or partner websites for convenience and informational purposes. We do not control those services and cannot be held responsible for their content, privacy practices, or reliability.",
  },
  {
    title: "Limitations and responsibility",
    body:
      "Amos Kali Foundation makes every effort to keep the website accurate, accessible, and useful. However, we do not guarantee uninterrupted access, error-free content, or that all information will always be complete or current. We are not liable for indirect, incidental, or consequential losses arising from use of the website or reliance on information contained herein.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Website terms for supporters, partners, and visitors"
        description="These terms explain how our website should be used and the responsibilities that accompany engagement with Amos Kali Foundation."
      />

      <main className="container-page py-16">
        <div className="rounded-xl border border-border bg-card p-8 shadow-card">
          <p className="text-sm leading-7 text-muted-foreground">
            By using this website, you agree to the terms below. These terms support our commitment to transparency, respectful engagement, and responsible community stewardship. If you disagree with any part of these terms, please do not use the site.
          </p>

          <div className="mt-8 grid gap-6">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-6 last:border-0 last:pb-0">
                <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-accent-soft p-6">
            <h2 className="text-xl font-semibold text-primary">Changes to these terms</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We may revise these terms from time to time to reflect evolving practices, legal requirements, or improvements to the website experience. Continued use of the site after an update indicates your acceptance of the revised terms.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-green-hover">
            Ask a question
          </Link>
          <Link to="/privacy" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent-soft">
            Review our privacy policy
          </Link>
        </div>
      </main>
    </>
  );
}
