import LeafDivider from "./LeafDivider";

export default function PageHero({ eyebrow, title, subtitle, bgImage }) {
  return (
    <section className="relative overflow-hidden bg-canopy text-parchment">
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-canopy/75 via-canopy/85 to-canopy/95" />
        </>
      )}
      <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-14">
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