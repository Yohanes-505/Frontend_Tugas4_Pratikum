"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// kalo file belum ada tampil placeholder paw anjing
type LogoProps = {
  size?: number;
  showHint?: boolean;
  className?: string;
};

export default function Logo({ size = 48, showHint = false, className = "" }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <span
      className={`logo ${className}`}
      style={{ width: size, height: size }}
    >
      {failed ? (
        <span className="logo__placeholder">
          <span className="logo__paw" style={{ fontSize: size * 0.4 }}>
            🐾
          </span>
          {showHint && (
            <small>
              Taruh logo di
              <br />
              <code>public/images/logo.png</code>
            </small>
          )}
        </span>
      ) : (
        <img
          ref={imgRef}
          src={site.logo}
          alt={`Logo ${site.name}`}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
