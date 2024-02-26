import Image from "next/image";
import product from "../public/product.webp";

type props = {
  imageAlt: string;
};

export default function ProductCard({ imageAlt }: props) {
  return (
    <div className={"flex h-fit flex-col gap-5"}>
      <Image src={product} alt={imageAlt} />
      <div className={"flex"}>
        <span className={"font-pops text-4xl font-medium"}>Thule Spring</span>
        <button className={"button ml-auto !bg-salmon/90 text-sm"}>
          Read More
        </button>
      </div>
    </div>
  );
}