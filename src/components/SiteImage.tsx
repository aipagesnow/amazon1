import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  width?: number;
  height?: number;
};

export function SiteImage({ src, alt, priority = false, sizes, width, height }: Props) {
  const sized = Boolean(width && height);
  return (
    <Image
      src={src}
      alt={alt}
      fill={!sized}
      width={sized ? width : undefined}
      height={sized ? height : undefined}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      sizes={sizes}
      quality={70}
      style={
        sized
          ? { objectFit: "cover", width: "100%", height: "100%" }
          : { objectFit: "cover" }
      }
    />
  );
}
