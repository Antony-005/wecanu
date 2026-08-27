import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa6";
import { club, socials, builder } from "../data/content";
import logo from "../assets/logo/logo-black-bg.jpg";
import builderPhoto from "../assets/images/builder/antony.jpg";

export default function Footer() {
  return (
    <footer className="bg-canopy text-parchment mt-24">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="WECANU logo" className="h-12 w-auto rounded-sm mb-4" />
          <p className="text-parchment/70 text-sm leading-relaxed">
            {club.fullName}. {club.slogan}.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-parchment/80">
            <li><Link to="/about" className="hover:text-parchment">About the club</Link></li>
            <li><Link to="/activities" className="hover:text-parchment">Projects, events & news</Link></li>
            <li><Link to="/membership" className="hover:text-parchment">Become a member</Link></li>
            <li>
              <a href="https://www.anu.ac.ke/" target="_blank" rel="noreferrer" className="hover:text-parchment">
                Africa Nazarene University ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3 text-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-parchment/80">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a href={`mailto:${club.email}`} className="hover:text-parchment break-all">
                {club.email}
              </a>
            </li>
            <li>{club.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3 text-gold">Follow</h4>
          <div className="flex gap-4">
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-ember"><FaInstagram size={20} /></a>
            <a href={socials.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="hover:text-ember"><FaXTwitter size={20} /></a>
            <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-ember"><FaYoutube size={20} /></a>
            <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-ember"><FaFacebook size={20} /></a>
            <a href={socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-ember"><FaTiktok size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-parchment/10 py-5 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs text-parchment/50">
        <span>© {new Date().getFullYear()} {club.fullName}. Founded {club.founded}.</span>
        <span className="hidden sm:inline">·</span>
        <a
          href={builder.portfolio}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 hover:text-parchment/80"
        >
          <img src={builderPhoto} alt={builder.name} className="w-4 h-4 rounded-full object-cover" />
          Site by {builder.name}
        </a>
      </div>
    </footer>
  );
}