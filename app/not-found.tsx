import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center narrow">
        <div className="notfound__emoji" aria-hidden="true">
          🐕‍🦺
        </div>
        <h1>Halaman tidak ditemukan</h1>
        <p className="muted">
          Keknya Si Guk bawa kabur halamannya. Yok kembali ke beranda.
        </p>
        <div className="mt">
          <Button href="/">Kembali ke Beranda</Button>
        </div>
      </div>
    </section>
  );
}
