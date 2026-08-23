import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import { Mail, Phone, MapPin, AtSign, XIcon, PlaySquare, Users, Music2 } from "lucide-react";
import { club, socials, contactPatron } from "../data/content";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Reach out" title="Contact us" />

      <section className="max-w-3xl mx-auto px-5 py-16">
        <LeafDivider className="mb-10 max-w-xs" />

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-ember shrink-0 mt-1" size={20} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Email</p>
              <a href={`mailto:${club.email}`} className="text-fern hover:underline">
                {club.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-ember shrink-0 mt-1" size={20} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Patron</p>
              <p className="text-ink/70">{contactPatron.name} — {contactPatron.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-ember shrink-0 mt-1" size={20} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Address</p>
              <p className="text-ink/70">{club.address}</p>
            </div>
          </div>
        </div>

        <LeafDivider className="my-10 max-w-xs" />

        <p className="font-display text-lg font-semibold text-ink mb-4">Follow WECANU</p>
        <div className="flex gap-5">
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><AtSign size={24} /></a>
          <a href={socials.x} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><XIcon size={24} /></a>
          <a href={socials.youtube} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><PlaySquare size={24} /></a>
          <a href={socials.facebook} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><Users size={24} /></a>
          <a href={socials.tiktok} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><Music2 size={24} /></a>
        </div>
      </section>
    </>
  );
}
