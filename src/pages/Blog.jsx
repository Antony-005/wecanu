import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";

const posts = [
  {
    title: "Welcome to the new WECANU site",
    date: "Coming soon",
    excerpt: ".",
  },
  {
    title: "Green Week is around the corner",
    date: "Coming soon",
    excerpt: "",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Club news"
        title="Blog"
        subtitle=""
      />

      <section className="max-w-3xl mx-auto px-5 py-16">
        <LeafDivider className="mb-10 max-w-xs" />
        <div className="space-y-8">
          {posts.map((p) => (
            <article key={p.title} className="border-b border-ink/10 pb-8">
              <p className="text-xs uppercase tracking-wide text-ember font-semibold">{p.date}</p>
              <h2 className="font-display text-2xl font-semibold mt-1 text-ink">{p.title}</h2>
              <p className="mt-2 text-ink/70">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
