import { useState } from "react";
import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";
import { executiveRoles, exOfficio, teamsByYear } from "../data/content";
import { firstImage } from "../utils/gallery";
import { teamPhoto } from "../utils/teamPhotos";
import { UserRound } from "lucide-react";

const leadersImages = import.meta.glob("../assets/images/gallery/leaders/*.{jpg,jpeg,JPG,JPEG}", { eager: true });
const heroImg = firstImage(leadersImages);

const team2025Images = import.meta.glob("../assets/images/team/2025-26/*.{jpg,jpeg,JPG,JPEG}", { eager: true });

const photosByYear = {
  "2025/26": team2025Images,
};

const roleSlugs = {
  "Chairperson": "chairperson",
  "Vice Chairperson": "vice-chairperson",
  "Secretary": "secretary",
  "Organising Secretary": "organising-secretary",
  "Treasurer": "treasurer",
  "Club Welfare & International Students Relation": "welfare",
  "Mr. Environment": "mr-environment",
  "Miss Environment": "miss-environment",
};

function dutiesFor(role) {
  return executiveRoles.find((r) => r.role === role);
}

export default function Team() {
  const [activeYear, setActiveYear] = useState(teamsByYear[0]?.year);
  const roster = teamsByYear.find((t) => t.year === activeYear);
  const yearImages = photosByYear[activeYear];

  return (
    <>
      <SEO
        path="/team"
        title="Leadership & Team"
        description="Meet WECANU's elected leadership: annual rosters from 2022 to 2026, plus the club's Patron, Dean of Students, and Alumni Representative."
      />
      <PageHero
        eyebrow="Elected every September"
        title="Leadership & Team"
        subtitle="Eight offices, re-elected each year. Browse past and present rosters below."
        bgImage={heroImg}
      />

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex flex-wrap gap-2">
          {teamsByYear.map((t) => (
            <button
              key={t.year}
              onClick={() => setActiveYear(t.year)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeYear === t.year
                  ? "bg-ember text-parchment"
                  : "bg-parchment-dim text-ink/70 hover:bg-parchment-dim/70"
              }`}
            >
              {t.year}
            </button>
          ))}
        </div>

        <LeafDivider className="mt-6 mb-10 max-w-xs" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roster?.members.map((m) => {
            const info = dutiesFor(m.role);
            const photo = yearImages ? teamPhoto(yearImages, roleSlugs[m.role]) : null;
            return (
              <div key={m.role} className="rounded-2xl border border-ink/10 overflow-hidden bg-white">
                <div className="aspect-square bg-parchment-dim flex items-center justify-center text-ink/25">
                  {photo ? (
                    <img src={photo} alt={m.name || m.role} className="w-full h-full object-cover" />
                  ) : (
                    <UserRound size={40} strokeWidth={1.5} />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {m.name || <span className="text-ink/40">Name to be confirmed</span>}
                  </h3>
                  <p className="text-xs text-ember font-medium mt-0.5">{m.role}</p>
                  {info?.subtitle && (
                    <p className="text-xs text-ink/50 mt-0.5">{info.subtitle}</p>
                  )}
                  <p className="text-sm text-ink/65 mt-2 leading-relaxed">{info?.duties}</p>
                </div>
              </div>
            );
          })}
        </div>

        <LeafDivider className="my-14 max-w-xs" />

        <h2 className="font-display text-2xl font-semibold text-ink">Ex-officio & advisors</h2>
        <p className="mt-2 text-ink/60 text-sm max-w-xl">
          These roles sit outside the annual election cycle.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          {exOfficio.map((p) => (
            <div key={p.role} className="rounded-2xl border border-ink/10 p-6 bg-parchment-dim">
              <p className="text-xs uppercase tracking-wide text-fern font-semibold">{p.role}</p>
              <p className="font-display text-xl font-semibold mt-1 text-ink">{p.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}