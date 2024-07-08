import { ReactNode } from "react";
import styles from "./HoverDropdown.module.css";
import { cn } from "@/lib/utils";

type TriggerComponentProps = {
  triggerComponent: ReactNode;
  defaultTriggerText?: never;
  children: ReactNode;
  verticalMenu?: boolean;
};

type DefaultTriggerTextProps = {
  triggerComponent?: never;
  defaultTriggerText: ReactNode;
  children: ReactNode;
  verticalMenu?: boolean;
};

type props = TriggerComponentProps | DefaultTriggerTextProps;

export default function HoverDropdown({
  triggerComponent,
  defaultTriggerText = "Hover",
  children,
  verticalMenu,
}: props) {
  return (
    <div className={`group relative ${styles.dropdown}`}>
      {triggerComponent ?? (
        <button type="button" className={"peer"}>
          {defaultTriggerText}
        </button>
      )}
      {/*Dropdown menu*/}
      <div
        className={cn(
          "absolute z-10 hidden w-max min-w-40 divide-y divide-gray-100 overflow-hidden rounded-lg bg-white font-normal shadow-2xl hover:block group-last:right-0 peer-hover:block",
          verticalMenu && "left-0 top-0 -translate-x-full",
        )}
      >
        <ul>{children}</ul>
      </div>
    </div>
  );
}
