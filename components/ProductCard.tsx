import Image from "next/image";
import product from "../public/product.webp";
import Link from "next/link";
import { product_res } from "@/apis/types";
import { ArrowUpRight } from "lucide-react";

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
          className="max-w-auto xl:max-w-auto rounded-xl bg-white sm:min-w-[450px] sm:max-w-[450px]"
        />
      )}
      <span className={"font-pops text-4xl font-medium"}>
        {name ?? "Thule Spring"}
      </span>
      <div className="-mt-3 font-pops text-3xl text-zinc-600">{price}</div>
      {affiliate_link && (
        <a
          href={affiliate_link}
          target="_blank"
          referrerPolicy="no-referrer"
          className="button group mt-2 w-fit !rounded-xl !bg-baby-blue-darker !p-2 !px-3 font-semibold text-white hover:text-black"
        >
          BUY NOW
          <ArrowUpRight className="-ml-5 inline align-middle opacity-0 transition-[margin-left] group-hover:ml-2 group-hover:opacity-100" />
        </a>
      )}
    </div>
  );
}
