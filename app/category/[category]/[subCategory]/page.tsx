import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/apis/get";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/apis/types";

type props = {
  params: { category: string; subCategory: string };
};

export default async function Home({
  params: { category, subCategory },
}: props) {
  const data = await getFeaturedProducts({
    category: decodeURIComponent(category),
    subcategory: decodeURIComponent(subCategory),
  });

  return (
    <main className="grid min-h-screen grid-cols-1 px-5 md:grid-cols-[auto,1fr] md:px-16 lg:grid-cols-2 xl:px-48">
      <div
        className={
          "relative col-span-full mb-8 grid grid-cols-[subgrid] gap-5 rounded-b-2xl bg-baby-blue p-16 lg:gap-16"
        }
      >
        <ProductCard {...data.product} />
        <OtherMostPopularProducts type={subCategory} data={data.products} />
      </div>
      <SubCategories data={data.products} />
    </main>
  );
}

function SubCategories({ data }: { data: Product[] }) {
  return (
    <div className={"col-span-full rounded-t-2xl bg-baby-blue p-16"}>
      <div className={"group/category rounded-xl py-5"}>
        <h2 className={"text-3xl font-semibold"}>Related Products</h2>
        <ul
          className={
            "mt-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-3"
          }
        >
          {data.length ? (
            data.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/category`}
                  className={
                    "group h-full w-full transition-transform hover:scale-105 hover:text-baby-blue-darker"
                  }
                >
                  <div
                    className={
                      " relative flex aspect-[1.3] flex-col overflow-hidden rounded-xl border border-black bg-[#f9f9f9]"
                    }
                  >
                    <Image
                      src={product.image_url ?? ""}
                      alt={"product image"}
                      fill
                      className={
                        "rounded object-contain transition-transform duration-200 group-hover:scale-110"
                      }
                    />
                  </div>
                  <p
                    className={
                      "text-center font-roboto-slab text-sm font-medium transition-transform duration-200 ease-in group-hover:scale-110 lg:text-xl"
                    }
                  >
                    {product.name}
                  </p>
                </Link>
              </li>
            ))
          ) : (
            <span className="text-xl text-zinc-400">No Products</span>
          )}
        </ul>
      </div>
    </div>
  );
}
