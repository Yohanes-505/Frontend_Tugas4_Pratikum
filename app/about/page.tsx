import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Cerita di balik Woof & Brew dan aturan main di dog café kami.",
};

const rules = [
  "Cuci tangan dulu sebelum bermain dengan anjing.",
  "Jangan beri makanan atau minuman manusia ke anjing. Gunakan camilan khusus anjing dari kami.",
  "Jangan ganggu anjing yang sedang tidur atau beristirahat.",
  "Anak-anak boleh ikut bermain, tapi tetap harus didampingi orang tua.",
  "Bermainlah dengan lembut. Kalau anjing menjauh, biarkan dia istirahat.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Berawal dari secangkir kopi dan seekor anjing"
        subtitle="Woof & Brew lahir dari kecintaan kami pada dua hal sederhana yang bikin hari jadi lebih baik."
      />

      <section className="section">
        <div className="container about-story">
          <div>
            <h2>Cerita kami</h2>
            <p>
              Semua dimulai dari Biscuit, seekor doodle yang selalu menemani pemilik kami menyeduh
              kopi tiap pagi. Pelanggan yang mampir kerap lebih ingin mengelus Biscuit daripada
              menunggu kopinya jadi.
            </p>
            <p>
              Dari situ kami sadar: kopi enak dan kehadiran anjing yang ramah bisa membuat orang
              tersenyum lebih lama. Maka Woof &amp; Brew dibuka, dengan satu misi sederhana, jadi
              tempat yang hangat untuk manusia dan anjing sama-sama.
            </p>
          </div>
          <div className="stats">
            <div>
              <strong>6</strong>
              <span>Si Guk penghuni</span>
            </div>
            <div>
              <strong>7</strong>
              <span>Hari buka / minggu</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Vaksin lengkap</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow="Nilai Kami" title="Yang kami pegang" />
          <div className="grid grid-3">
            <FeatureCard image="/images/about-kesejahteraan.jpg" title="Kesejahteraan Anjing">
              Anjing punya jam kerja dan waktu istirahat. Mereka tidak dipaksa berinteraksi.
            </FeatureCard>
            <FeatureCard image="/images/about-bahan.jpg" title="Bahan Berkualitas">
              Kami memilih biji kopi dan bahan segar dari pemasok lokal.
            </FeatureCard>
            <FeatureCard image="/images/about-terbuka.jpg" title="Terbuka untuk Semua">
              Pecinta anjing, pecinta kopi, atau sekadar penasaran, semuanya diterima.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle
            eyebrow="Aturan Main"
            title="Biar semua nyaman"
            subtitle="Beberapa hal kecil yang membuat pengalaman kita semua menyenangkan."
          />
          <ol className="rules">
            {rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
          <div className="center mt">
            <Button href="/contact">Reservasi Meja</Button>
          </div>
        </div>
      </section>
    </>
  );
}
