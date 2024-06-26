import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import { kebabToNormal } from "@/utils/functions";
import Card from "@/components/Card";
import ProductCard from "@/components/ProductCard";

type props = {
  params: { category: string; subCategory: string };
};

export default function Home({ params: { category, subCategory } }: props) {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className={
          "relative grid h-[calc(100vh-230px)] grid-cols-2 gap-16 p-24 px-48"
        }
      >
        <ProductCard id={1} />
        <OtherMostPopularProducts
          heading={`Most Popular Products in ${kebabToNormal(subCategory)}`}
          data={[]}
        />
      </div>
      <SubCategories {...{ category }} />
    </main>
  );
}

function SubCategories({ category }: { category: string }) {
  const subCategory = [
    {
      name: "Strollers",
      id: "strollers",
    },
    {
      name: "Travel",
      id: "travel",
    },
    {
      name: "Strollers",
      id: "strollers",
    },
    {
      name: "Travel",
      id: "travel",
    },
    {
      name: "Strollers",
      id: "strollers",
    },
    {
      name: "Travel",
      id: "travel",
    },
  ];

  return (
    <div className={"bg-baby-blue px-48 pt-5"}>
      <ul className={"grid grid-cols-3 gap-x-10"}>
        {subCategory.map((subCategory) => (
          <li>
            <Card
              link={`/category/${category}/${subCategory.id}`}
              label={subCategory.name}
              imageSrc={"/baby-crib.webp"}
              className={""}
              imageAlt={subCategory.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
