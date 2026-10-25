import Link from "next/link";
import Badge from "@/components/Badge";
import Image from "next/image";
import type { Dog } from "@/data/dogs";

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <Link href={`/dogs/${dog.id}`} className="card card--link">
      <div className="card__visual">
        <Image
          src={dog.photo}
          alt={`Foto ${dog.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>
      <div className="card__body">
        <h3>{dog.name}</h3>
        <p className="muted">
          {dog.breed} · {dog.age}
        </p>
        <div className="badges">
          {dog.traits.slice(0, 2).map((trait) => (
            <Badge key={trait} variant="soft">
              {trait}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}