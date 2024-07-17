import Image from "next/image";
import { getProductById, getSimilarProductsByProduct } from "@/apis/get";
import { Product, product_res, similarProducts_res } from "@/apis/types";
import { ArrowUpRight, Star } from "lucide-react";
import placeholderImage from "@/public/placeholder-pattern.jpg";
import Link from "next/link";

export default async function Page({
  params: { productID },
}: {
  params: { productID: string };
}) {
  const product = await getProductById(productID);
  const similarProducts = await getSimilarProductsByProduct(productID);
  // console.log({ similarProducts });
  return (
    <main
      className={"flex flex-col gap-5 bg-baby-blue p-16 px-5 lg:px-16 xl:mx-52"}
    >
      <ProductInfo {...product} />
      <OtherTopProducts data={similarProducts} />
    </main>
  );
}

function ProductInfo({
  name,
  price,
  image_url,
  affiliate_link,
  rating,
}: product_res) {
  return (
    <div className={"grid h-fit gap-5 lg:grid-cols-[auto,1fr]"}>
      {image_url && (
        <Image
          src={image_url}
          alt={name ?? "peek a review product"}
          width={500}
          height={300}
          className="max-w-auto xl:max-w-auto rounded-xl border border-zinc-400 bg-baby-blue py-3 sm:min-w-[450px] sm:max-w-[450px]"
        />
      )}
      <div className={"flex flex-col"}>
        <div className={"font-pops text-4xl font-medium"}>
          {name ?? "Thule Spring"}
        </div>
        <div className="my-2 font-pops text-lg text-zinc-600 lg:text-2xl">
          {price}
        </div>
        <div className="flex">
          <label>Rating:</label>
          <span className="align-end inline-flex items-end text-zinc-400">
            {new Array(5).fill(null).map((_, i) => (
              <Star
                className={
                  rating ? (i < rating ? "fill-salmon stroke-salmon" : "") : ""
                }
              />
            ))}
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
      <div className={"mt-5 flex w-fit max-w-full overflow-x-auto"}>
        <div className="grid grid-cols-[200px] grid-rows-[150px,repeat(5,50px)] border border-b-0 border-zinc-400 [&>*]:flex [&>*]:items-center [&>*]:border-b [&>*]:border-zinc-400 [&>*]:pl-2">
          <div className={"col-start-1 row-start-1"}></div>
          <div
            className={"col-start-1 row-start-2 font-semibold text-zinc-500"}
          >
            Name
          </div>
          <div
            className={"col-start-1 row-start-3 font-semibold text-zinc-500"}
          >
            Price
          </div>
          <div
            className={"col-start-1 row-start-4 font-semibold text-zinc-500"}
          >
            Ratings
          </div>
          <div
            className={"col-start-1 row-start-5 font-semibold text-zinc-500"}
          >
            Affiliate Sites
          </div>
          <div
            className={"col-start-1 row-start-6 font-semibold text-zinc-500"}
          >
            Featured Sites
          </div>
        </div>
        {data?.map((product) => <OtherTopProductCard product={product} />)}
      </div>
    </div>
  );
}

function OtherTopProductCard({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-[200px] grid-rows-[150px,repeat(5,50px)] border border-b-0 border-l-0 border-zinc-400 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:border-b [&>*]:border-zinc-400">
      <div
        className={
          "relative row-start-1 h-full w-full overflow-hidden bg-baby-blue"
        }
      >
        <Image
          src={product.image_url ?? placeholderImage}
          alt={product.name ?? "Baby Product"}
          layout="fill"
        />
      </div>
      <Link
        href={`/product/${product.id}`}
        className="row-start-2 p-2 font-pops font-medium text-Aquamarine-darker hover:underline"
      >
        {product.name}
      </Link>
      <p className="row-start-3 font-pops text-xl">{product.price}</p>
      <p className="row-start-4">
        <span className="align-end inline-flex items-end text-zinc-400">
          {product.rating === null
            ? [
                ...new Array(4).fill(
                  <Star className="fill-salmon stroke-salmon" />,
                ),
                <Star />,
              ]
            : new Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    className={
                      product.rating
                        ? i < product.rating
                          ? "fill-salmon stroke-salmon"
                          : ""
                        : ""
                    }
                  />
                ))}
        </span>
      </p>
      <div>
        <a
          href={product.affiliate_link}
          className="hover:bg-freeschia row-start-5 w-fit rounded-xl bg-baby-blue-darker p-1 px-5 text-white hover:bg-Aquamarine-darker hover:underline"
        >
          {product.affiliate_site}
        </a>
      </div>
      <a
        href={product.featured_sites}
        className="row-start-6 max-w-[20ch] truncate capitalize hover:text-baby-blue-darker hover:underline"
      >
        {product.featured_sites?.match(/www.(.+)\./)?.[1]}
      </a>
    </div>
  );
}
