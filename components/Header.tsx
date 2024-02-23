import { categories } from "@/app/content/categories";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/peek-a-review-logo.png";
import HoverDropdown from "@/components/dropdowns/HoverDropdown";

export default function Header() {
  return (
    <header className={"flex gap-5 bg-baby-blue p-5 text-black"}>
      <div
        className={
          "relative flex aspect-[2] w-48 items-center justify-center italic text-zinc-500"
        }
      >
        <Image src={logo} alt={"peek-a-review"} fill />
      </div>
      <span className={"my-auto text-2xl font-bold"}>Peek-A-Review</span>
      <NavigationMenu />
    </header>
  );
}

function NavigationMenu() {
  return (
    <div className={"m-auto flex gap-2 font-medium"}>
      {categories.map((category) => (
        <HoverDropdown
          key={category.id}
          triggerComponent={
            <Link href={`/category/${category.id}`} className={"peer"}>
              {category.text}
            </Link>
          }
        >
          {category.subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              <Link
                href={`/category/${category.id}/${subCategory.id}`}
                className={"block"}
              >
                {subCategory.text}
              </Link>
            </li>
          ))}
        </HoverDropdown>
      ))}
    </div>
  );
}