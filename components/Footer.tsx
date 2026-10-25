import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <Logo size={56} />
            <strong>{site.name}</strong>
          </div>
          <p>{site.tagline}</p>
        </div>

        <div>
          <h3>Jelajahi</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Jam Buka</h3>
          <ul>
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days}
                <br />
                <strong>{h.time}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kontak</h3>
          <ul>
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} {site.name}. Dibuat dengan hati gukguk.
        </div>
      </div>
    </footer>
  );
}
