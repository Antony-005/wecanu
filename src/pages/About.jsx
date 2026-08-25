import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import { club, meetingSchedule, partners } from "../data/content";
import { Download } from "lucide-react";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Since 2009"
        title="About WECANU"
        subtitle="Two clubs, one mission — how a merger became Africa Nazarene University's home for conservation."
      />

      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink">Our story</h2>
        <p className="mt-4 text-ink/80 leading-relaxed">{club.history}</p>

        <LeafDivider className="my-12 max-w-xs" />

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-parchment-dim rounded-2xl p-7">
            <h3 className="font-display text-xl font-semibold text-fern">Mission</h3>
            <p className="mt-2 text-ink/80">{club.mission}</p>
          </div>
          <div className="bg-parchment-dim rounded-2xl p-7">
            <h3 className="font-display text-xl font-semibold text-ember">Vision</h3>
            <p className="mt-2 text-ink/80">{club.vision}</p>
          </div>
        </div>

        <LeafDivider className="my-12 max-w-xs" />

        <h2 className="font-display text-2xl font-semibold text-ink">A university-wide club</h2>
        <p className="mt-4 text-ink/80 leading-relaxed">
          WECANU sits within Students Services, guided by the Environment and Natural
          Resource Management Department, but membership isn't limited to one school —
          students from Law, Religion, Science &amp; Technology, Business, and Humanities &amp;
          Social Sciences all take part.
        </p>
        <p className="mt-4 text-ink/80 leading-relaxed">
          Every year, the club renews its membership with the Wildlife Clubs of Kenya (WCK),
          which brings recognition and access to forums and activities run by the Kenya
          Wildlife Service and WCK.
        </p>

        <LeafDivider className="my-12 max-w-xs" />

        <h2 className="font-display text-2xl font-semibold text-ink">Club constitution</h2>
        <p className="mt-4 text-ink/80 leading-relaxed">
          Read WECANU's full constitution — membership rules, office bearer duties, and how
          the club is run.
        </p>
        <a
          href="/documents/wecanu-constitution.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-fern text-parchment px-6 py-3 font-semibold hover:bg-fern/90 transition-colors"
        >
          <Download size={18} /> Download the Constitution (PDF)
        </a>

        <LeafDivider className="my-12 max-w-xs" />

        <h2 className="font-display text-2xl font-semibold text-ink">Meetings</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {meetingSchedule.map((m) => (
            <div key={m.day} className="border border-ink/10 rounded-xl p-5">
              <p className="text-xs uppercase tracking-wide text-ember font-semibold">{m.type}</p>
              <p className="font-display text-lg font-semibold mt-1 text-ink">{m.day}</p>
              <p className="text-ink/65 text-sm mt-1">{m.time} · {m.where}</p>
            </div>
          ))}
        </div>

        <LeafDivider className="my-12 max-w-xs" />

        <h2 className="font-display text-2xl font-semibold text-ink">Partners & collaborations</h2>
        <p className="mt-4 text-ink/80 leading-relaxed">
          WECANU's work is made possible in part through collaboration with organisations
          across Kenya's conservation and environmental sector.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {partners.map((p) =>
            p.url ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="border border-ink/10 rounded-xl px-4 py-3 text-sm text-fern bg-parchment-dim hover:bg-parchment-dim/70 hover:underline transition-colors"
              >
                {p.name}
              </a>
            ) : (
              <div
                key={p.name}
                className="border border-ink/10 rounded-xl px-4 py-3 text-sm text-ink/75 bg-parchment-dim"
              >
                {p.name}
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}