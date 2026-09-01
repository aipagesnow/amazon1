import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
};

export function SiteImage({ src, alt, priority = false, sizes }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      sizes={sizes}
      quality={70}
      style={{ objectFit: "cover" }}
    />
  );
}
