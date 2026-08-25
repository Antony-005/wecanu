import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import { activities } from "../data/content";
import { firstImage, nthImage } from "../utils/gallery";

const bonfireImages = import.meta.glob("../assets/images/gallery/bonfire/*.{jpg,jpeg,JPG,JPEG}", { eager: true });
const heroImg = firstImage(bonfireImages);
const bannerImg = nthImage(bonfireImages, 1);

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Out in the field"
        title="Events & Activities"
        subtitle="What WECANU does year-round — from weekly meetings to Green Week."
        bgImage={heroImg}
      />

      <section className="max-w-6xl mx-auto px-5 py-16">
        <LeafDivider className="mb-10 max-w-xs" />

        {bannerImg && (
          <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9]">
            <img src={bannerImg} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a) => (
            <div key={a.title} className="rounded-2xl border border-ink/10 bg-white p-6">
              {a.cadence && (
                <p className="text-xs uppercase tracking-wide text-ember font-semibold">{a.cadence}</p>
              )}
              <h3 className="font-display text-lg font-semibold mt-1 text-ink">{a.title}</h3>
              <p className="text-sm text-ink/65 mt-1.5">{a.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}