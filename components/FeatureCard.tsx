import Image from "next/image";
import type { ReactNode } from "react";

type FeatureCardProps = {
  image: string;
  title: string;
  children: ReactNode;
};

export default function FeatureCard({ image, title, children }: FeatureCardProps) {
  return (
    <div className="feature">
      <div className="feature__image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}