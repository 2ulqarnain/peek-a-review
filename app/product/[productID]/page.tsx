import Image from "next/image";
import { getProductById, getSimilarProductsByProduct } from "@/apis/get";
import { product_res, similarProducts_res } from "@/apis/types";
import { ArrowUpRight, Star } from "lucide-react";
import { sampleData } from "./sampleData";
import placeholderImage from "@/public/placeholder-pattern.jpg";

export default async function Page({
  params: { productID },
}: {
  params: { productID: string };
}) {
  const product = await getProductById(productID);
  const similarProducts = await getSimilarProductsByProduct(productID);
  console.log({ similarProducts });
  return (
    <main className={"flex flex-col gap-5 p-16 px-5 lg:px-16 xl:px-52"}>
      <ProductInfo {...product} />
      <OtherTopProducts data={similarProducts} />
    </main>
  );
}

function ProductInfo({ name, price, image_url, affiliate_link }: product_res) {
  return (
    <div className={"grid h-fit grid-cols-[auto,1fr] gap-5"}>
      {image_url && (
        <Image
          src={image_url}
          alt={name ?? "peek a review product"}
          width={500}
          height={300}
          className="max-w-auto xl:max-w-auto sm:min-w-[450px] sm:max-w-[450px]"
        />
      )}
      <div className={"flex flex-col"}>
        <div className={"font-pops text-4xl font-medium"}>
          {name ?? "Thule Spring"}
        </div>
        <div className="my-2 text-lg text-zinc-600 lg:text-2xl">{price}</div>
        <div className="flex">
          <label>Rating:</label>
          <span className="align-end ml-2 inline-flex items-end text-zinc-400">
            <Star className="fill-salmon stroke-salmon" />
            <Star className="fill-salmon stroke-salmon" />
            <Star className="fill-salmon stroke-salmon" />
            <Star />
            <Star />
          </span>
        </div>
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
    </div>
  );
}

function OtherTopProducts({ data }: { data: similarProducts_res }) {
  return (
    <div>
      <h2 className="w-fit rounded-tl-xl border-l-2 border-t-2 border-salmon p-2 text-2xl font-semibold">
        Other Similar Products
      </h2>
      <div
        className={
          "mt-5 grid w-fit max-w-full grid-flow-row grid-cols-[repeat(6,max-content)] grid-rows-[max-content,max-content,max-content] gap-x-10 gap-y-2 overflow-x-auto"
        }
      >
        <div className={"col-start-1 row-start-1"}></div>
        <div className={"col-start-1 row-start-2 font-semibold text-zinc-500"}>
          Name
        </div>
        <div className={"col-start-1 row-start-3 font-semibold text-zinc-500"}>
          Price
        </div>
        <div className={"col-start-1 row-start-4 font-semibold text-zinc-500"}>
          Ratings
        </div>
        {data?.map((product) => (
          <>
            <div className={"row-start-1"}>
              <Image
                src={product.image_url ?? placeholderImage}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg bg-baby-blue p-2"
              />
            </div>
            <p className="row-start-2">{product.name}</p>
            <p className="row-start-3">{product.price}</p>
            <p className="row-start-4">
              <span className="align-end inline-flex items-end text-zinc-400">
                <Star className="fill-salmon stroke-salmon" />
                <Star className="fill-salmon stroke-salmon" />
                <Star className="fill-salmon stroke-salmon" />
                <Star />
                <Star />
              </span>
            </p>
          </>
        ))}
      </div>
    </div>
  );
}
