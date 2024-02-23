import MostPopularProduct from "@/app/components/MostPopularProduct";
import OtherMostPopularProducts from "@/app/components/OtherMostPopularProducts";
import { kebabToNormal } from "@/utils/functions";
import Card from "@/components/Card";

type props = {
  params: { category: string };
};

export default function Home({ params: { category } }: props) {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className={
          "relative grid h-[calc(100vh-230px)] grid-cols-2 gap-16 p-24 px-48"
        }
      >
        <MostPopularProduct />
        <OtherMostPopularProducts
          heading={`Most Popular Product in ${kebabToNormal(category)}`}
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