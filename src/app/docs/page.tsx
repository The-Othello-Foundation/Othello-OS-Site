import Link from "next/link";
import { Container } from "../../components/Container";
import { Card, CardBody } from "../../components/ui/Card";

const cards = [
  {
    href: "/docs/getting-started",
    title: "Getting Started",
    desc: "Prereqs, build scripts, and running in QEMU.",
  },
  {
    href: "/docs/readme",
    title: "README (Live)",
    desc: "Rendered directly from the GitHub repo.",
  },
  {
    href: "/roadmap",
    title: "Roadmap",
    desc: "Where Othello OS is headed next.",
  },
];

export default function DocsIndex() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Docs</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Everything you need to build, run, and explore Othello OS.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.href} href={c.href}>
              <Card>
                <CardBody>
                  <div className="text-base font-semibold text-white">{c.title}</div>
                  <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
