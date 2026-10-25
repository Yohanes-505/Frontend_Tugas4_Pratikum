import Button from "@/components/Button";
import Logo from "@/components/Logo";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">Dog Cafe · Jakarta</span>
            <h1>
              Ngopi santai, <span className="accent">main bareng</span> anjing-anjing lucu.
            </h1>
            <p>{site.description}</p>
            <div className="hero__actions">
              <Button href="/dogs">Kenalan dengan Si Guk</Button>
              <Button href="/about" variant="outline">
                Tentang Kami
              </Button>
            </div>
          </div>

          <div className="hero__logo">
            <Logo size={300} className="logo--hero" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            eyebrow="Kenapa Woof & Brew"
            title="Tempat ngopi yang bikin ekor ikut bergoyang"
          />
          <div className="grid grid-3">
            <FeatureCard image="/images/home-anjing.jpg" title="Anjing Ramah & Sehat">
              Semua penghuni sudah vaksin lengkap, rutin diperiksa dokter hewan, dan terlatih
              bersosialisasi.
            </FeatureCard>
            <FeatureCard image="/images/home-kopi.jpg" title="Kopi Spesialti">
              Biji kopi pilihan, diseduh oleh barista kami dengan latte art yang menggemaskan.
            </FeatureCard>
            <FeatureCard image="/images/home-ruang.jpg" title="Ruang Nyaman">
              Area indoor sejuk dan taman kecil, cocok untuk kerja santai, kencan, atau kumpul
              keluarga.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Siap main bareng Si Guk?</h2>
          <p>Mampir langsung atau kirim pesan untuk reservasi meja.</p>
          <Button href="/contact" variant="light">
            Hubungi Kami
          </Button>
        </div>
      </section>
    </>
  );
}