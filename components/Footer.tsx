import Image from "next/image";
import logo from "@/public/peek-a-review-logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className={
        "grid grid-cols-1 grid-rows-2 bg-Aquamarine p-4 lg:grid-flow-col lg:grid-cols-3 lg:justify-items-center lg:p-16"
      }
    >
      <div>
        <Logo />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iste
          omnis praesentium? Ad delectus, dolorem earum esse, eveniet facere id,
          magni natus placeat porro quas repudiandae sed sit soluta tempore.
        </p>
      </div>
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
function CategoriesLinks() {
  return (
    <div className={"py-5 lg:row-span-full"}>
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
