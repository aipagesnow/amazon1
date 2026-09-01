import { SiteImage } from "@/components/SiteImage";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Photo({ src, alt, caption, className, priority, sizes }: Props) {
  return (
    <figure className={className ? `photo ${className}` : "photo"}>
      <SiteImage
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes ?? "100vw"}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
