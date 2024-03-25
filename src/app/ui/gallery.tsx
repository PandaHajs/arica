"use client";
import styles from "@/app/ui/styles/gallery.module.scss";
import Image from "next/image";
import type { GalleryProps } from "@/app/lib/types";
import { showImage, shimmer, toBase64 } from "@/app/lib/galleryLogic";

export default function Gallery(props: GalleryProps) {
  const images = props.images;

  return (
    <section className={styles.gallery}>
      <div className={styles.line}>
        {images
          .filter((image) => parseInt(image.id) % 3 === 1)
          .map((image) => (
            <Image
              key={image.id}
              priority={parseInt(image.id) <= 3 ? true : false}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={20}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              onClick={() => {
                showImage(image.id, props);
              }}
            />
          ))}
      </div>
      <div className={styles.line}>
        {images
          .filter((image) => parseInt(image.id) % 3 === 2)
          .map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              priority={parseInt(image.id) <= 3 ? true : false}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={20}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              onClick={() => {
                showImage(image.id, props);
              }}
            />
          ))}
      </div>
      <div className={styles.line}>
        {images
          .filter((image) => parseInt(image.id) % 3 === 0)
          .map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              priority={parseInt(image.id) <= 3 ? true : false}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={20}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              onClick={() => {
                showImage(image.id, props);
              }}
            />
          ))}
      </div>
    </section>
  );
}