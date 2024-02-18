import Link from "next/link";

const mostPopularProducts = [
  { name: "Product 1", id: "product-1" },
  { name: "Product 2", id: "product-2" },
  { name: "Product 3", id: "product-3" },
  { name: "Product 4", id: "product-4" },
  { name: "Product 5", id: "product-5" },
  { name: "Product 6", id: "product-6" },
  { name: "Product 7", id: "product-7" },
];

export default function OtherMostPopularProducts() {
  return (
    <div>
      <h2 className={"text-3xl font-medium"}>Most Popular</h2>
      <div className={"mb-10 mt-5 h-1 w-full rounded-full bg-Aquamarine"}></div>
      <ul className={"flex flex-col gap-5"}>
        {mostPopularProducts.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`} className={"styled-link"}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}