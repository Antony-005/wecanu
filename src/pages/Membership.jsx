import { useState } from "react";
import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";
import { membershipTiers, club } from "../data/content";
import { CheckCircle2 } from "lucide-react";
import { firstImage } from "../utils/gallery";

const teambuildingImages = import.meta.glob("../assets/images/gallery/teambuilding/*.{jpg,jpeg,JPG,JPEG}", { eager: true });
const heroImg = firstImage(teambuildingImages);

export default function Membership() {
  const [form, setForm] = useState({ name: "", admission: "", course: "", year: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`WECANU Membership Application — ${form.name}`);
    const body = encodeURIComponent(
      `Full name: ${form.name}\n` +
      `Admission number: ${form.admission}\n` +
      `Course: ${form.course}\n` +
      `Year of study: ${form.year}`
    );

    window.location.href = `mailto:${club.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        path="/membership"
        title="Become a Member"
        description="Join WECANU; open to current ANU students, staff, and alumni passionate about wildlife and environmental conservation."
      />
      <PageHero
        eyebrow="Get involved"
        title="Become a member"
        subtitle="Open to any current ANU student, staff member, or alumnus passionate about conservation."
        bgImage={heroImg}
      />

      <section className="max-w-5xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">Membership tiers</h2>
          <LeafDivider className="my-6 max-w-xs" />
          <div className="space-y-6">
            {membershipTiers.map((t) => (
              <div key={t.name} className="border border-ink/10 rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-fern">{t.name}</h3>
                <p className="text-xs text-ink/50 uppercase tracking-wide mt-0.5">{t.audience}</p>
                <ul className="mt-3 space-y-2">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-ink/75">
                      <CheckCircle2 size={16} className="text-ember shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">Apply now</h2>
          <LeafDivider className="my-6 max-w-xs" />

          {submitted ? (
            <div className="bg-fern/10 border border-fern/30 rounded-2xl p-8 text-center">
              <CheckCircle2 className="mx-auto text-fern" size={36} />
              <p className="mt-3 font-display text-xl font-semibold text-ink">
                Almost done!
              </p>
              <p className="mt-1 text-ink/70 text-sm">
                Your email app should have opened with your application ready to go -
                just hit send there to complete it. If nothing opened, email{" "}
                {club.email} directly with your details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs text-ink/50 bg-parchment-dim rounded-lg px-4 py-3">
                Submitting opens your email app with everything pre-filled, just hit
                send there to finish.
              </p>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1.5">Full name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-fern"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1.5">Admission number</label>
                <input
                  required
                  name="admission"
                  value={form.admission}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-fern"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1.5">Course</label>
                <input
                  required
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-fern"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1.5">Year of study</label>
                <select
                  required
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-fern"
                >
                  <option value="" disabled>Select year</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-ember text-parchment font-semibold py-3 hover:bg-ember/90 transition-colors"
              >
                Submit application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}