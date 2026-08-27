import { useState } from "react";
import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";
import { membershipTiers } from "../data/content";
import { CheckCircle2 } from "lucide-react";

export default function Membership() {
  const [form, setForm] = useState({ name: "", admission: "", course: "", year: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to EmailJS (or another backend) to actually send
    // the application through — same pattern used on your other client sites.
    console.log("Membership application:", form);
    setSubmitted(true);
  }

     return (
     <>
       <SEO
         path="/membership"
         title="Become a Member"
         description="Join WECANU — open to current ANU students, staff, and alumni passionate about wildlife and environmental conservation."
       />
       <PageHero
         eyebrow="Get involved"
        title="Become a member"
        subtitle="Open to any current ANU student, staff member, or alumnus passionate about conservation."
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
                Application received
              </p>
              <p className="mt-1 text-ink/70 text-sm">
                We'll follow up by email. Karibu WECANU!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
