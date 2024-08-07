import { featuredProducts_res } from "@/apis/types";
import Link from "next/link";

type props = {
  type?: string;
  data: featuredProducts_res["products"];
};
export default function OtherMostPopularProducts({ type, data }: props) {
  return (
    <div>
      <h2 className={"text-3xl font-medium capitalize"}>
        {type ? (
          <>
            Most Popular Products in{" "}
            <span className="whitespace-nowrap">
              {decodeURIComponent(type)}
            </span>
          </>
        ) : (
          "Most Popular Products"
        )}
      </h2>
      <div className={"mb-10 mt-5 h-1 w-full rounded-full bg-Aquamarine"}></div>
      <ul className={"flex flex-col gap-2"}>
        {data.length ? (
          data?.map((product) => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`} className={"styled-link"}>
                {product.name}
              </Link>
            </li>
          ))
        ) : (
          <span className="text-xl text-zinc-400">No Products</span>
        )}
      </ul>
    </div>
  );
}
