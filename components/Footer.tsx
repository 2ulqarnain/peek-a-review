import Image from "next/image";
import logo from "@/public/peek-a-review-logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className={
        "grid grid-flow-col grid-cols-3 grid-rows-2 justify-items-center bg-Aquamarine p-16"
      }
    >
      <Logo />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iste
        omnis praesentium? Ad delectus, dolorem earum esse, eveniet facere id,
        magni natus placeat porro quas repudiandae sed sit soluta tempore.
      </p>
      <ImportantLinks />
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
    <div className={"row-span-full ml-auto py-5"}>
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
function CategoriesLinks() {
  return (
    <div className={"row-span-full py-5"}>
      <h2 className={"my-5 text-3xl font-semibold"}>Categories</h2>
      <ul>
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
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 6
          </Link>
        </li>
        <li>
          <Link href={"#"} className={"styled-link"}>
            Link 7
          </Link>
        </li>
      </ul>
    </div>
  );
}