import Image from "next/image";
import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import ProductCard from "@/components/ProductCard";
import { getCategoriesData, getFeaturedProducts } from "@/apis/get";
import { categoryData_res } from "@/apis/types";
import Link from "next/link";

export default async function Home() {
  const [data, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategoriesData(),
  ]);
  return (
    <main className="grid min-h-screen grid-cols-1 px-5 md:grid-cols-[auto,1fr] md:px-16 lg:grid-cols-2 xl:px-48">
      <div
        className={
          "relative col-span-full my-8 grid grid-cols-[subgrid] gap-5 bg-baby-blue p-16 py-8 lg:gap-16"
        }
      >
        <ProductCard {...data.product} />
        <OtherMostPopularProducts data={data.products} />
      </div>
      <Description className="col-span-full mb-8 px-16" />
      <Categories data={categories} />
    </main>
  );
}

function Description({ className }: { className?: string }) {
  return (
    <div className={"bg-baby-blue-darker py-8 text-white " + className}>
      <h2 className={"mb-4 text-3xl font-semibold"}>Description</h2>
      <p className={"mb-4"}>
        Welcome to Peekareview, your trusted source for the best baby products.
        We showcase top-rated affiliate items to help you find the perfect
        essentials for your little one. Explore our curated collection for a
        hassle-free shopping experience, make informed choices with ease, and
        ensure your baby&apos;s comfort and safety with every purchase!
      </p>
      <button className={"button"}>Learn More</button>
    </div>
  );
}

function Categories({ data }: { data: categoryData_res }) {
  return (
    <div className={"col-span-full bg-baby-blue px-16"}>
      <ul className={"flex flex-col gap-5"}>
        {Object.entries(data).map(([categoryName, subCategories]) => (
          <li key={categoryName}>
            <div className={"group/category rounded-xl py-5"}>
              <h2 className={"text-3xl font-semibold"}>
                <Link
                  href={`/category/${categoryName}`}
                  className="decoration-salmon hover:underline"
                >
                  {categoryName}
                </Link>
              </h2>
              <ul
                className={
                  "mt-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-3"
                }
              >
                {subCategories.map((subCategory) => (
                  <li key={subCategory.id}>
                    <Link
                      href={`/category/${encodeURIComponent(categoryName)}/${encodeURIComponent(subCategory.subcategory_name)}`}
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
                          src={subCategory.image_url}
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
                        {subCategory.subcategory_name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
