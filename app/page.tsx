import Image from "next/image";
import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import crib from "../public/baby-crib.webp";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className={
          "relative grid h-[calc(100vh-230px)] grid-cols-2 gap-16 p-24 px-48"
        }
      >
        <ProductCard imageAlt={""} />
        <OtherMostPopularProducts />
      </div>
      <Description />
      <Categories />
    </main>
  );
}

function Description() {
  return (
    <div className={"mt-16 bg-freesia px-48 py-8"}>
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
    <div className={"bg-baby-blue px-48 pt-5"}>
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