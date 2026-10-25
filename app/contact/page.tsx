import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Lokasi, jam buka, dan cara menghubungi Woof & Brew.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Mampir atau sapa kami"
        subtitle="Kami senang menerima reservasi, pertanyaan, atau sekadar sapaan."
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <div className="info-card">
              <h3>Lokasi</h3>
              <p>{site.address}</p>
            </div>
            <div className="info-card">
              <h3>Jam Buka</h3>
              {site.hours.map((h) => (
                <p key={h.days}>
                  {h.days}: <strong>{h.time}</strong>
                </p>
              ))}
            </div>
            <div className="info-card">
              <h3>Hubungi</h3>
              <p>{site.phone}</p>
              <p>{site.email}</p>
              <p>Instagram {site.instagram}</p>
            </div>
          </div>

          <div className="contact__form">
            <h2>Kirim pesan</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
