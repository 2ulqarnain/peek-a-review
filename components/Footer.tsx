import Image from "next/image";
import logo from "@/public/peek-a-review-logo.png";
import Link from "next/link";
import { getCategories } from "@/apis/get";

export default function Footer() {
  return (
    <div
      className={
        "grid grid-cols-1 grid-rows-[auto,auto] bg-baby-blue-darker p-4 text-white lg:grid-flow-col lg:grid-cols-3 lg:justify-items-center lg:p-16"
      }
    >
      <div>
        <Logo />
        <p>
          Peekareview is your trusted source for the best baby products. Explore
          our top-rated affiliate items for a hassle-free shopping experience.
          Make informed choices with ease and ensure your baby’s comfort and
          safety with every purchase.
        </p>
      </div>
      {/* <ImportantLinks /> */}
      <CategoriesLinks />
    </div>
  );
}

function Logo() {
  return (
    <div
      className={
        "relative flex aspect-[2] w-48 items-center justify-center italic text-zinc-500"
      }
    >
      <Image src={logo} alt={"peek-a-review"} fill />
    </div>
  );
}

function ImportantLinks() {
  return (
    <div className={"py-5 lg:row-span-full lg:ml-auto"}>
      <h2 className={"font my-5 text-3xl font-semibold"}>Important Links</h2>
      <ul className={"flex flex-col"}>
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 1
          </Link>
        </li>
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 2
          </Link>
        </li>
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 3
          </Link>
        </li>
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 4
          </Link>
        </li>
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 5
          </Link>
        </li>
      </ul>
    </div>
  );
}
async function CategoriesLinks() {
  const categories = await getCategories();
  return (
    <div className={"col-start-3 py-5 lg:row-span-full "}>
      <h2 className={"my-5 text-3xl font-semibold"}>Categories</h2>
      <ul className="max-w-[30ch] hover:text-zinc-700">
        {Object.keys(categories).map((category) => (
          <li>
            <Link
              href={`/category/${category}/`}
              className={
                "w-[10ch] text-wrap decoration-salmon decoration-2 hover:text-black hover:underline"
              }
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
