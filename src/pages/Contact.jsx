import PageHero from "../components/PageHero";
import LeafDivider from "../components/LeafDivider";
import SEO from "../components/SEO";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa6";
import { club, socials, contactPatron } from "../data/content";
import { firstImage } from "../utils/gallery";

const walksImages = import.meta.glob("../assets/images/gallery/walks/*.{jpg,jpeg,JPG,JPEG}", { eager: true });
const heroImg = firstImage(walksImages);

export default function Contact() {
  return (
    <>
      <SEO
        path="/contact"
        title="Contact"
        description="Get in touch with WECANU: email, the club Patron's contact, and our social media channels."
      />
      <PageHero eyebrow="Reach out" title="Contact us" bgImage={heroImg} />

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
              <p className="text-ink/70">{contactPatron.name}: {contactPatron.phone}</p>
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
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><FaInstagram size={24} /></a>
          <a href={socials.x} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><FaXTwitter size={24} /></a>
          <a href={socials.youtube} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><FaYoutube size={24} /></a>
          <a href={socials.facebook} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><FaFacebook size={24} /></a>
          <a href={socials.tiktok} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-ember"><FaTiktok size={24} /></a>
        </div>
      </section>
    </>
  );
}
