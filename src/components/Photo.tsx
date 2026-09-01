type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function Photo({ src, alt, caption, className, priority }: Props) {
  return (
    <figure className={className ? `photo ${className}` : "photo"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} decoding={priority ? "sync" : "async"} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
