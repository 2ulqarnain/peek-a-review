import { kebabToNormal } from "@/utils/functions";
import Card from "../../../components/Card";

type props = {
  params: {
    product: string;
  };
};

export default function Page({ params: { product } }: props) {
  return (
    <main className={"grid grid-cols-2 gap-16 p-16 px-52"}>
      <ProductDetail name={product} />
      <MoreProducts />
      <OtherTopProducts />
    </main>
  );
}

function ProductDetail({ name }: { name: string }) {
  return (
    <div>
      <h1
        className={
          "mb-8 border-b border-Aquamarine pb-8 font-pops text-5xl font-bold capitalize"
        }
      >
        {kebabToNormal(name)}
      </h1>
      <div className={"flex flex-col gap-5"}>
        <div className={"aspect-[1.3] w-full bg-zinc-100"}></div>
        <div className={"h-10 w-full bg-zinc-100"}></div>
      </div>
    </div>
  );
}

function MoreProducts() {
  return (
    <div className={"grid grid-cols-2 gap-5 px-16"}>
      <h2 className={"col-span-full h-fit font-pops text-xl"}>
        More on Peek-a-Review
      </h2>
      {new Array(6).fill(
        <Card
          link={"/product/sample-product"}
          label={"Product"}
          imageSrc={"/baby-crib.webp"}
        />,
      )}
    </div>
  );
}

function OtherTopProducts() {
  return <div>Hello</div>;
}