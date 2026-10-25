import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DogCard from "@/components/DogCard";
import { dogs } from "@/data/dogs";

export const metadata: Metadata = {
  title: "Si Guk",
  description: "Kenalan dengan anjing-anjing penghuni Woof & Brew.",
};

export default function DogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Si Guk"
        title="Kenalan dengan para penghuni"
        subtitle="Setiap anjing punya jadwal dan kepribadian sendiri. Klik untuk melihat profilnya."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
