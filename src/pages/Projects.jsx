import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Making an impact"
        title="Projects & Initiatives"
        subtitle=""
      />

      <section className="max-w-4xl mx-auto px-5 py-16">
        <LeafDivider className="mb-10 max-w-xs" />
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink/10 p-7 bg-parchment-dim">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                <span className="text-xs uppercase tracking-wide font-semibold text-fern bg-fern/10 rounded-full px-3 py-1">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-ink/70 leading-relaxed">{p.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
