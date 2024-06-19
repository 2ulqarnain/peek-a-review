import ProductCard from "@/components/ProductCard";
import { sampleData } from "@/app/product/[product]/sampleData";
import Image from "next/image";
import placeHolderImage from "@/public/placeholder-pattern.jpg";

export default function Page() {
  return (
    <main className={"p-16 px-5 lg:px-16 xl:px-52"}>
      <ProductCard imageAlt={""} />
      <OtherTopProducts />
    </main>
  );
}

function OtherTopProducts() {
  return (
    <div
      className={
        "grid w-fit max-w-full grid-flow-row grid-cols-[repeat(6,max-content)] grid-rows-[max-content,max-content,max-content] gap-x-10 gap-y-2 overflow-x-auto"
      }
    >
      <div className={"col-start-1 row-start-1"}></div>
      <div className={"col-start-1 row-start-2 font-semibold text-zinc-500"}>
        Name
      </div>
      <div className={"col-start-1 row-start-3 font-semibold text-zinc-500"}>
        Price
      </div>
      {sampleData.map((product) => (
        <>
          <div className={"row-start-1"}>
            <Image
              src={placeHolderImage}
              alt={product.name}
              width={100}
              height={100}
            />
          </div>
          <p className="row-start-2">{product.name}</p>
          <p className="row-start-3">{product.price}</p>
        </>
      ))}
    </div>
  );
}
