import { useState } from "react";
import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";
import YouTubeEmbed from "../components/YouTubeEmbed";
import InstagramEmbed from "../components/InstagramEmbed";
import { youtubeVideos, instagramVideos } from "../data/videos";
import { ExternalLink } from "lucide-react";

const tabs = ["YouTube", "Instagram"];

export default function Videos() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <SEO
        path="/videos"
        title="Videos"
        description="Watch WECANU's Green Week highlights, trips, and testimonials on YouTube and Instagram."
      />
      <PageHero
        eyebrow="Watch WECANU"
        title="Videos"
        subtitle="Green Week highlights, trips, and testimonials — watch here or on the original platform."
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

        {active === "YouTube" ? (
          <div className="grid sm:grid-cols-2 gap-8">
            {youtubeVideos.map((v) => (
              <div key={v.id}>
                <YouTubeEmbed id={v.id} title={v.title} />
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-ink">{v.title}</h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs text-fern font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    YouTube <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramVideos.map((v) => (
              <div key={v.url}>
                <InstagramEmbed url={v.url} title={v.title} />
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-ink">{v.title}</h3>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs text-fern font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Instagram <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}