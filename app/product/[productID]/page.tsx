import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import placeHolderImage from "@/public/placeholder-pattern.jpg";
import { getProductById } from "@/apis/get";

export default async function Page({
  params: { productID },
}: {
  params: { productID: string };
}) {
  const product = await getProductById(productID);

  return (
    <main className={"p-16 px-5 lg:px-16 xl:px-52"}>
      <ProductCard {...product} detailed />
    </main>
  );
}
