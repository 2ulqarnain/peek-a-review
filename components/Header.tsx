import Link from "next/link";
import Image from "next/image";
import logo from "../public/peek-a-review-logo.png";
import HoverDropdown from "@/components/dropdowns/HoverDropdown";
import { getCategories } from "@/apis/get";
import { normalToKebab } from "@/utils/functions";
import MobileNavigationMenu from "./navbar/mobileNavbar";
import { getCategories_res } from "@/apis/types";

export default async function Header() {
  const categories = await getCategories();

  return (
    <header className={"relative text-white"}>
      <div className=" bg-baby-blue-darker">
        <Link href={"/"} className={"flex"}>
          <div
            className={
              "relative flex aspect-[2] w-32 items-center justify-center italic text-zinc-500"
            }
          >
            <Image src={logo} alt={"peek-a-review"} fill />
          </div>
          <span className={"my-auto text-sm font-bold sm:text-2xl"}>
            Peek-A-Review
          </span>
        </Link>
      </div>
      <div className="bg-Aquamarine text-black">
        <NavigationMenu categories={categories} />
        <MobileNavigationMenu categories={categories} />
      </div>
    </header>
  );
}

async function NavigationMenu({
  categories,
}: {
  categories: getCategories_res;
}) {
  // console.log({ categories });

  return (
    <div
      className={"m-auto hidden justify-end gap-2 !text-sm font-medium lg:flex"}
    >
      {Object.keys(categories ?? {}).map((category) => (
        <HoverDropdown
          key={category}
          triggerComponent={
            <Link
              href={`/category/${normalToKebab(category)}`}
              className={"peer"}
            >
              {category}
            </Link>
          }
        >
          {categories[category].map((subCategory) => (
            <li key={subCategory}>
              <Link
                href={`/category/${normalToKebab(category)}/${normalToKebab(subCategory)}`}
                className={"block"}
              >
                {subCategory}
              </Link>
            </li>
          ))}
        </HoverDropdown>
      ))}
    </div>
  );
}
