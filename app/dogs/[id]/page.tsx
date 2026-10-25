import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import DogCard from "@/components/DogCard";
import Image from "next/image";
import { dogs, getDogById } from "@/data/dogs";

export function generateStaticParams() {
  return dogs.map((dog) => ({ id: dog.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const dog = getDogById(id);
  return {
    title: dog ? dog.name : "Anjing tidak ditemukan",
    description: dog ? `Kenalan dengan ${dog.name}, ${dog.breed} penghuni Woof & Brew.` : undefined,
  };
}

export default async function DogDetailPage({ params }: Props) {
  const { id } = await params;
  const dog = getDogById(id);

  if (!dog) notFound();

  const others = dogs.filter((d) => d.id !== dog.id).slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="container">
          <Link href="/dogs" className="back-link">
            ← Kembali ke Si Guk
          </Link>

          <div className="detail">
            <div className="detail__visual">
              <Image
                src={dog.photo}
                alt={`Foto ${dog.name}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>

            <div className="detail__info">
              <div className="badges">
                {dog.traits.map((trait) => (
                  <Badge key={trait} variant="soft">
                    {trait}
                  </Badge>
                ))}
              </div>
              <h1>{dog.name}</h1>
              <p>{dog.bio}</p>

              <dl className="info-list">
                <div>
                  <dt>Ras</dt>
                  <dd>{dog.breed}</dd>
                </div>
                <div>
                  <dt>Usia</dt>
                  <dd>{dog.age}</dd>
                </div>
                <div>
                  <dt>Jenis kelamin</dt>
                  <dd>{dog.gender}</dd>
                </div>
                <div>
                  <dt>Camilan favorit</dt>
                  <dd>{dog.favoriteSnack}</dd>
                </div>
                <div>
                  <dt>Jadwal hadir</dt>
                  <dd>{dog.schedule}</dd>
                </div>
              </dl>

              <Button href="/contact">Reservasi untuk Bertemu {dog.name}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle title="Teman-teman lainnya" align="left" />
          <div className="grid grid-3">
            {others.map((d) => (
              <DogCard key={d.id} dog={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
