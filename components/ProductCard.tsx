import Image from "next/image";
import product from "../public/product.webp";

type props = {
  imageAlt: string;
};

export default function ProductCard({ imageAlt }: props) {
  return (
    <div className={"flex h-fit flex-col gap-5"}>
      <Image
        src={product}
        alt={imageAlt}
        className="max-w-auto xl:max-w-auto sm:min-w-[450px] sm:max-w-[450px]"
      />
      <div className={"flex text-nowrap"}>
        <span className={"font-pops text-4xl font-medium"}>Thule Spring</span>
        <span
          className={
            "ml-3 mt-auto font-pops text-3xl font-medium text-zinc-500"
          }
        >
          $470
        </span>
        <button className={"button ml-auto h-fit !bg-salmon/90 text-sm"}>
          Read More
        </button>
      </div>
    </div>
  );
}
