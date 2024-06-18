import Image from "next/image";
import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import crib from "../public/baby-crib.webp";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-2 [&>*]:px-5 md:[&>*]:px-16 xl:[&>*]:px-48">
      <div
        className={
          "relative col-span-full grid grid-cols-[subgrid] gap-5 p-16 lg:gap-16"
        }
      >
        <ProductCard imageAlt={""} />
        <OtherMostPopularProducts />
      </div>
      <Description className="col-span-full" />
      <Categories />
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

function Categories() {
  const categories = [
    {
      name: "Strollers",
      id: "strollers",
      subCategories: [
        { name: "Everyday Strollers", id: "everyday-strollers", img_url: "#" },
        { name: "Everyday Strollers", id: "everyday-strollers", img_url: "#" },
        { name: "Everyday Strollers", id: "everyday-strollers", img_url: "#" },
      ],
    },
    {
      name: "Travel",
      id: "travel",
      subCategories: [
        { name: "Travel Strollers", id: "travel-strollers", img_url: "#" },
        { name: "Travel Strollers", id: "travel-strollers", img_url: "#" },
        { name: "Travel Strollers", id: "travel-strollers", img_url: "#" },
      ],
    },
  ];

  return (
    <div className={"col-span-full bg-baby-blue"}>
      <ul className={"flex flex-col gap-5"}>
        {categories.map((category) => (
          <li key={category.id}>
            <div className={"group/category rounded-xl py-5"}>
              <h2 className={"text-3xl font-semibold"}>{category.name}</h2>
              <ul className={"mt-5 grid grid-cols-3 justify-center gap-5"}>
                {category.subCategories.map((subCategory) => (
                  <li key={subCategory.id}>
                    <button
                      className={
                        "group h-full w-full transition-transform hover:scale-105"
                      }
                    >
                      <div
                        className={
                          "relative flex aspect-video flex-col overflow-hidden rounded"
                        }
                      >
                        <Image
                          src={crib}
                          alt={"product image"}
                          fill
                          className={
                            "rounded transition-transform duration-200 group-hover:scale-110"
                          }
                        />
                      </div>
                      <p
                        className={
                          "text-center font-roboto-slab text-xl font-medium transition-transform duration-200 ease-in group-hover:scale-110"
                        }
                      >
                        {subCategory.name}
                      </p>
                    </button>
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
