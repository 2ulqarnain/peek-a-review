import Card from "../../../components/Card";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import crib from "@/public/baby-crib.webp";

// type props = {
//   params: {
//     product: string;
//   };
// };

export default function Page() {
  return (
    <main className={"grid grid-cols-[1fr,400px] gap-4 p-16 px-52"}>
      <ProductCard imageAlt={""} />
      <MoreProducts />
      <OtherTopProducts />
    </main>
  );
}

// function ProductDetail({ name }: { name: string }) {
//   return (
//     <div>
//       <h1
//         className={
//           "mb-8 border-b border-Aquamarine pb-8 font-pops text-5xl font-bold capitalize"
//         }
//       >
//         {kebabToNormal(name)}
//       </h1>
//       <div className={"flex flex-col gap-5"}>
//         <div className={"aspect-[1.3] w-full bg-zinc-100"}></div>
//         <div className={"h-10 w-full bg-zinc-100"}></div>
//       </div>
//     </div>
//   );
// }

function MoreProducts() {
  return (
    <div className={"row-span-2 grid grid-cols-1 gap-5 px-16"}>
      <h2
        className={
          "col-span-full h-fit rounded-xl bg-baby-blue p-2 px-3 font-pops text-xl font-semibold"
        }
      >
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
  const Card = () => (
    <div
      className={
        "flex h-64 flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
      }
    >
      <div className={"relative aspect-video"}>
        <Image
          src={crib}
          alt={""}
          fill
          className={"transition-transform duration-200 group-hover:scale-110"}
        />
      </div>
      <span className={"m-3 font-roboto-slab text-xl"}>
        Baby Jogger City Mini GT2
      </span>
      <div className={"flex items-center justify-between p-3"}>
        <span className={"font-roboto-slab text-xl"}>$4033.99</span>
        <button
          className={
            "w-fit rounded-xl bg-salmon/50 p-2 px-3 text-sm hover:bg-freesia"
          }
        >
          Check on Amazon
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className={"font-pops text-3xl font-semibold"}>
        Other Top Related Products
      </h2>
      <div className={"grid w-full grid-cols-2 gap-2"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}