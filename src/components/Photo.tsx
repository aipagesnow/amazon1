import { IllustrativeCaption } from "@/components/IllustrativeCaption";
import { SiteImage } from "@/components/SiteImage";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  illustrative?: boolean;
};

export function Photo({ src, alt, caption, className, priority, sizes, illustrative }: Props) {
  return (
    <figure className={className ? `photo ${className}` : "photo"}>
      <SiteImage
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes ?? "100vw"}
      />
      {illustrative ? <IllustrativeCaption /> : null}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
