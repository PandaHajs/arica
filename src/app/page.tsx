"use client";
import styles from "./page.module.scss";
import Gallery from "./ui/gallery";
import { useState, useEffect } from "react";
import BigImage from "./ui/bigImage";
import { useRouter, useSearchParams } from "next/navigation";
import { ImageType } from "./lib/types";

export default function Home() {
  const [images, setImages] = useState<ImageType[]>([]);
  const router = useRouter();
  const id = useSearchParams().get("id");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("photos.json");
        if (response) {
          const { photos } = await response.json();
          if (photos) {
            setImages(photos);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchImages();
  }, []);

  return (
    <main>
      <section
        className={id ? styles.blur : styles.main}
        onClick={() => (id ? router.push("/", { scroll: false }) : null)}
      >
        <h1>Welcome to Arica&apos;s portfolio</h1>
        <Gallery images={images} />
      </section>
      <BigImage images={images} id={id} />
    </main>
  );
}
