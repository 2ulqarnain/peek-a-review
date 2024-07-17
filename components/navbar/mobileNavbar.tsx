"use client";

import { getCategories_res } from "@/apis/types";
import Link from "next/link";
import { useState } from "react";
import { NavItems, SideNav } from "react-swiper-sidenav";

export default function MobileNavigationMenu({
  categories,
}: {
  categories: getCategories_res;
}) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarItems: NavItems = {
    name: "Categories",
    childrenItems: Object.keys(categories).map((category) => ({
      name: category,
      childrenItems: [
        {
          itemProps: {
            to: `/category/${encodeURIComponent(category)}`,
            label: `All in ${category}`,
          },
        },
        ...categories[category].map((subCategory) => ({
          itemProps: {
            to: `/category/${encodeURIComponent(category)}/${encodeURIComponent(subCategory)}`,
            label: subCategory,
          },
        })),
      ],
    })),
  };

  return (
    <div className="h-7 text-black lg:hidden">
      <button
        name="open-mobile-menu-button"
        className="text-white"
        onClick={() => setIsNavbarOpen(true)}
      >
        {isNavbarOpen ? <CrossIcon /> : <HamburgerIcon />}
      </button>
      <SideNav
        navItems={navbarItems}
        open={isNavbarOpen}
        onClose={() => setIsNavbarOpen(false)}
        renderLink={CustomLink}
      />
    </div>
  );
}

const CustomLink = ({ to, label }: { to: string; label: string }) => (
  <Link href={to}>{label}</Link>
);

const HamburgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
