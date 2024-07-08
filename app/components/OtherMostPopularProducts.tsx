import { featuredProducts_res } from "@/apis/types";
import Link from "next/link";

type props = {
  heading?: string;
  data: featuredProducts_res["products"];
};
export default function OtherMostPopularProducts({ heading, data }: props) {
  return (
    <div>
      <h2 className={"text-3xl font-medium capitalize"}>
        {decodeURIComponent(heading ?? "Most Popular Products")}
      </h2>
      <div className={"mb-10 mt-5 h-1 w-full rounded-full bg-Aquamarine"}></div>
      <ul className={"flex flex-col gap-2"}>
        {data?.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`} className={"styled-link"}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
