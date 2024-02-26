import Link from "next/link";
import Image from "next/image";

type props = {
  link: string;
  label: string;
  imageSrc: string;
  className?: string;
  imageAlt?: string;
};
export default function Card({
  link,
  label,
  imageAlt = "No Alt Text",
  className,
  imageSrc,
}: props) {
  return (
    <Link
      href={link}
      className={`group w-full transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <div
        className={
          "relative flex aspect-video flex-col overflow-hidden rounded"
        }
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={
            "rounded-xl transition-transform duration-200 group-hover:scale-110"
          }
        />
      </div>
      <p
        className={
          "my-2 text-center font-roboto-slab text-xl font-medium transition-transform duration-100 group-hover:scale-110"
        }
      >
        {label}
      </p>
    </Link>
  );
}