import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import LeafDivider from "../components/LeafDivider";
import { club, objectives, threeCs, activities } from "../data/content";
import { firstImage, nthImage } from "../utils/gallery";

const generalImages = import.meta.glob("../assets/images/gallery/general/*.{jpg,jpeg,JPG,JPEG}", { eager: true });
const teambuildingImages = import.meta.glob("../assets/images/gallery/teambuilding/*.{jpg,jpeg,JPG,JPEG}", { eager: true });

const heroImg = firstImage(generalImages);
const objectivesImg = nthImage(teambuildingImages, 0);
const activitiesImg = nthImage(teambuildingImages, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-canopy text-parchment">
        {heroImg && (
          <img
            src={heroImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, var(--color-fern) 0, transparent 45%), radial-gradient(circle at 85% 0%, var(--color-ember) 0, transparent 40%), radial-gradient(circle at 90% 80%, var(--color-gold) 0, transparent 35%)",
          }}
        />
        {heroImg && (
          <div className="absolute inset-0 bg-gradient-to-b from-canopy/75 via-canopy/85 to-canopy/95" />
        )}
        <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-script text-3xl text-gold mb-2"
          >
            Wildlife &amp; Environmental Club
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl font-semibold leading-[1.05] max-w-3xl"
          >
            {club.slogan}.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-parchment/75 text-lg"
          >
            {club.mission} Since {club.founded}, WECANU has brought students from every
            school at Africa Nazarene University together around one cause: conservation.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold hover:bg-ember/90 transition-colors"
            >
              <Leaf size={18} /> Become a member
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-parchment/30 px-6 py-3 font-semibold hover:bg-parchment/10 transition-colors"
            >
              Learn our story <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className={objectivesImg ? "grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start" : ""}>
          <div>
            <p className="font-script text-2xl text-fern mb-1">What we're here to do</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">Our objectives</h2>
            <LeafDivider className="mt-6 max-w-xs" />

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {objectives.map((o, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-display text-2xl text-ember/70 leading-none pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ink/85">{o}</p>
                </div>
              ))}
            </div>
          </div>
          {objectivesImg && (
            <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full">
              <img src={objectivesImg} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* 3 C's */}
      <section className="bg-parchment-dim py-20">
        <div className="max-w-6xl mx-auto px-5">
          <p className="font-script text-2xl text-fern mb-1">Every activity, every time</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">The three C's</h2>
          <LeafDivider className="mt-6 max-w-xs" />

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {threeCs.map((c) => (
              <div key={c.word} className="bg-parchment rounded-2xl p-7 border border-ink/10">
                <span className="font-display text-5xl text-gold">{c.letter}</span>
                <h3 className="font-display text-xl font-semibold mt-2 text-ink">{c.word}</h3>
                <p className="mt-2 text-ink/70 text-sm leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES PREVIEW */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-script text-2xl text-fern mb-1">Out in the field</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">What we get up to</h2>
          </div>
          <Link to="/events" className="text-fern font-semibold inline-flex items-center gap-1.5 hover:underline">
            See all activities <ArrowRight size={16} />
          </Link>
        </div>
        <LeafDivider className="mt-6 max-w-xs" />

        {activitiesImg && (
          <div className="mt-10 rounded-2xl overflow-hidden aspect-[21/9]">
            <img src={activitiesImg} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {activities.slice(0, 3).map((a) => (
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

      {/* CTA */}
      <section className="bg-fern text-parchment py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Passionate about wildlife and conservation?
          </h2>
          <p className="mt-4 text-parchment/85 max-w-xl mx-auto">
            Membership is open to every ANU student, staff member, and alumnus who wants to
            get involved.
          </p>
          <Link
            to="/membership"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-parchment text-ink px-7 py-3 font-semibold hover:bg-parchment/90 transition-colors"
          >
            <Leaf size={18} /> Join WECANU
          </Link>
        </div>
      </section>
    </>
  );
}