import { useState } from "react";
import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";

// Each category auto-loads every image dropped into its folder — no code
// changes needed when you add more photos, as long as the filename matches
// the pattern you told Antony (e.g. general1.jpg, general2.jpg, ...) and it
// lands in the right folder below.
const categoryFolders = {
  General: import.meta.glob("../assets/images/gallery/general/*.{jpg,jpeg,JPG,JPEG}", { eager: true }),
  "Clean-Ups & Tree Planting": import.meta.glob("../assets/images/gallery/cleanups/*.{jpg,jpeg,JPG,JPEG}", { eager: true }),
  "Bonfire Nights": import.meta.glob("../assets/images/gallery/bonfire/*.{jpg,jpeg,JPG,JPEG}", { eager: true }),
  "Team Building": import.meta.glob("../assets/images/gallery/teambuilding/*.{jpg,jpeg,JPG,JPEG}", { eager: true }),
  Leaders: import.meta.glob("../assets/images/gallery/leaders/*.{jpg,jpeg,JPG,JPEG}", { eager: true }),
  "Awareness Walks": import.meta.glob("../assets/images/gallery/walks/*.{jpg,jpeg,JPG,JPEG}", { eager: true }),
};

function imagesFor(category) {
  const modules = categoryFolders[category] || {};
  return Object.keys(modules)
    .sort()
    .map((path) => modules[path].default);
}

const categories = Object.keys(categoryFolders);

export default function Gallery() {
  const [active, setActive] = useState(categories[0]);
  const images = imagesFor(active);

     return (
     <>
       <SEO
         path="/gallery"
         title="Gallery"
         description="Photos from WECANU club events, clean-ups, bonfire nights, team building, and Green Week."
       />
       <PageHero
         eyebrow="Moments from the field"
        title="Gallery"
        subtitle="Photos from club events, clean-ups, bonfire nights, and Green Week."
      />

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === c
                  ? "bg-ember text-parchment"
                  : "bg-parchment-dim text-ink/70 hover:bg-parchment-dim/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <LeafDivider className="mt-6 mb-10 max-w-xs" />

        {images.length === 0 ? (
          <p className="text-ink/50 text-sm">
            No photos in this category yet — drop files into{" "}
            <code className="bg-parchment-dim px-1.5 py-0.5 rounded">
              src/assets/images/gallery/
            </code>{" "}
            per the naming guide in PHOTOS.md.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-ink/10">
                <img src={src} alt={`WECANU ${active} photo ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
