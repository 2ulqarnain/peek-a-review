"use client";

import { getCategories_res } from "@/apis/types";
import HoverDropdown from "@/components/dropdowns/HoverDropdown";
import { normalToKebab } from "@/utils/functions";
import { Cross, CrossIcon, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MobileNavigationMenu({
  categories,
}: {
  categories: getCategories_res;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute right-6 top-6 z-20 flex h-fit flex-col lg:hidden">
      <button
        className="ml-auto w-fit p-2 align-middle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X /> : <MenuIcon />}
      </button>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={
            "m-auto flex w-max flex-col justify-end gap-2 rounded-xl bg-white !text-sm font-medium"
          }
        >
          {Object.keys(categories ?? {}).map((category) => (
            <HoverDropdown
              key={category}
              verticalMenu
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
      )}
    </div>
  );
}
