import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import logo from "../assets/logo/logo-white-bg.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/blog", label: "News" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="WECANU logo" className="h-10 w-auto rounded-sm" />
          <span className="font-display font-semibold text-ink text-lg hidden sm:block">
            WECANU
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-6 font-body text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-fern ${
                  isActive ? "text-fern font-semibold" : "text-ink/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/membership"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-ember text-parchment px-4 py-2 text-sm font-semibold hover:bg-ember/90 transition-colors"
          >
            <Leaf size={15} /> Join
          </NavLink>
        </nav>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-parchment px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-1.5 font-body ${isActive ? "text-fern font-semibold" : "text-ink/80"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/membership"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-ember text-parchment px-4 py-2 text-sm font-semibold"
          >
            <Leaf size={15} /> Join
          </NavLink>
        </nav>
      )}
    </header>
  );
}