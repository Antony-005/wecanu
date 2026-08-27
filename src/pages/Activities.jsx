import { useState } from "react";
import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";
import { projects, activities as activityTypes } from "../data/content";
import { firstImage, nthImage } from "../utils/gallery";

const cleanupsImages = import.meta.glob("../assets/images/gallery/cleanups/*.{jpg,jpeg,JPG,JPEG}", { eager: true });
const bonfireImages = import.meta.glob("../assets/images/gallery/bonfire/*.{jpg,jpeg,JPG,JPEG}", { eager: true });

const heroImg = firstImage(cleanupsImages);
const projectsBannerImg = nthImage(cleanupsImages, 1);
const eventsBannerImg = nthImage(bonfireImages, 1);

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

const tabs = ["Projects", "Events", "News"];

function ProjectsPanel() {
  return (
    <div>
      {projectsBannerImg && (
        <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9]">
          <img src={projectsBannerImg} alt="" className="w-full h-full object-cover" />
        </div>
      )}
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
    </div>
  );
}

function EventsPanel() {
  return (
    <div>
      {eventsBannerImg && (
        <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9]">
          <img src={eventsBannerImg} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activityTypes.map((a) => (
          <div key={a.title} className="rounded-2xl border border-ink/10 bg-white p-6">
            {a.cadence && (
              <p className="text-xs uppercase tracking-wide text-ember font-semibold">{a.cadence}</p>
            )}
            <h3 className="font-display text-lg font-semibold mt-1 text-ink">{a.title}</h3>
            <p className="text-sm text-ink/65 mt-1.5">{a.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsPanel() {
  return (
    <div className="max-w-3xl space-y-8">
      {posts.map((p) => (
        <article key={p.title} className="border-b border-ink/10 pb-8">
          <p className="text-xs uppercase tracking-wide text-ember font-semibold">{p.date}</p>
          <h3 className="font-display text-2xl font-semibold mt-1 text-ink">{p.title}</h3>
          <p className="mt-2 text-ink/70">{p.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export default function Activities() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <SEO
        path="/activities"
        title="Projects, Events & News"
        description="WECANU's conservation projects, year-round events and activities, and the latest club news — all in one place."
      />
      <PageHero
        eyebrow="What we're doing"
        title="Projects, Events & News"
        subtitle="From ongoing conservation projects to weekly activities and club announcements."
        bgImage={heroImg}
      />

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === t
                  ? "bg-ember text-parchment"
                  : "bg-parchment-dim text-ink/70 hover:bg-parchment-dim/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <LeafDivider className="mt-6 mb-10 max-w-xs" />

        {active === "Projects" && <ProjectsPanel />}
        {active === "Events" && <EventsPanel />}
        {active === "News" && <NewsPanel />}
      </section>
    </>
  );
}