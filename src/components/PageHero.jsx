import LeafDivider from "./LeafDivider";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-canopy text-parchment">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-14">
        {eyebrow && (
          <p className="font-script text-2xl text-gold mb-1">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-parchment/75 text-lg">{subtitle}</p>
        )}
        <LeafDivider className="mt-8 max-w-xs" color="var(--color-gold)" />
      </div>
    </section>
  );
}
