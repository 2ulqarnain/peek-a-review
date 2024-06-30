import Image from "next/image";
import product from "../public/product.webp";
import Link from "next/link";
import { product_res } from "@/apis/types";

type props = {
  id: number | string;
  name: string;
  price?: string;
  affiliateLink?: string;
  affiliateSite?: string;
  rating?: string;
  featuredSites?: string;
  category?: string;
  subCategory?: string;
  imageSrc: string;
  imageAlt: string;
  detailed?: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  affiliate_link,
  affiliate_site,
  image_url,
  detailed = false,
}: product_res & { detailed?: boolean }) {
  return (
    <div className={"flex h-fit flex-col gap-5"}>
      {image_url && (
        <Image
          src={image_url}
          alt={name ?? "peek a review product"}
          width={500}
          height={300}
          className="max-w-auto xl:max-w-auto sm:min-w-[450px] sm:max-w-[450px]"
        />
      )}
      <div className={"mb-5 flex flex-wrap gap-2"}>
        <span className={"font-pops text-4xl font-medium"}>
          {name ?? "Thule Spring"}
        </span>
        <div className="basis-full">
          <span>{price}</span>
          {affiliate_link && (
            <a
              href={affiliate_link}
              target="_blank"
              referrerPolicy="no-referrer"
              className="button rounded-xl !bg-baby-blue-darker !p-2 !px-3 text-white hover:text-black"
            >
              {affiliate_site}
            </a>
          )}
        </div>

        {!detailed && (
          <Link
            href={`/product/${id}`}
            className={"button mt-2 h-fit !bg-salmon/90 text-sm"}
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
}
