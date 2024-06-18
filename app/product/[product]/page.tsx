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
        "grid grid-flow-row grid-cols-6 grid-rows-[max-content,max-content,max-content]"
      }
    >
      <div className={"col-start-1 row-start-1"}></div>
      <div className={"col-start-1 row-start-2"}>Name</div>
      <div className={"col-start-1 row-start-3"}>Price</div>
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
          <p>{product.name}</p>
          <p>{product.price}</p>
        </>
      ))}
    </div>
  );
}
