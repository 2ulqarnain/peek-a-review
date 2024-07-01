import Image from "next/image";
import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import ProductCard from "@/components/ProductCard";
import { getCategoriesData, getFeaturedProduct } from "@/apis/get";
import { categoryData_res } from "@/apis/types";
import Link from "next/link";
import { normalToKebab } from "@/utils/functions";

export default async function Home() {
  const [data, categories] = await Promise.all([
    getFeaturedProduct(),
    getCategoriesData(),
  ]);
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-2 [&>*]:px-5 md:[&>*]:px-16 xl:[&>*]:px-48">
      <div
        className={
          "relative col-span-full grid grid-cols-[subgrid] gap-5 bg-baby-blue p-16 lg:gap-16"
        }
      >
        <ProductCard {...data.product} />
        <OtherMostPopularProducts data={data.products} />
      </div>
      <Description className="col-span-full" />
      <Categories data={categories} />
    </main>
  );
}

function Description({ className }: { className?: string }) {
  return (
    <div className={"bg-freesia py-8 " + className}>
      <h2 className={"mb-4 text-3xl font-semibold"}>Description</h2>
      <p className={"mb-4"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        accusantium amet assumenda consequatur culpa exercitationem harum hic
        inventore itaque, iure, laboriosam, laborum maxime necessitatibus
        provident quas reprehenderit tempore unde velit! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Accusamus accusantium amet assumenda
        consequatur culpa exercitationem harum hic inventore itaque.
      </p>
      <button className={"button"}>Learn More</button>
    </div>
  );
}

function Categories({ data }: { data: categoryData_res }) {
  return (
    <div className={"col-span-full bg-baby-blue"}>
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
              <ul className={"mt-5 grid grid-cols-3 justify-center gap-5"}>
                {subCategories.map((subCategory) => (
                  <li key={subCategory.id}>
                    <Link
                      href={`/category/${normalToKebab(categoryName)}/${normalToKebab(subCategory.subcategory_name)}`}
                      className={
                        "group h-full w-full transition-transform hover:scale-105 hover:text-baby-blue-darker"
                      }
                    >
                      <div
                        className={
                          "bg- relative flex aspect-[1.3] flex-col overflow-hidden rounded-xl bg-[#f9f9f9]"
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
