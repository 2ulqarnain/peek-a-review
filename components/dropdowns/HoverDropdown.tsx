import { ReactNode } from "react";
import styles from "./HoverDropdown.module.css";

type TriggerComponentProps = {
  triggerComponent: ReactNode;
  defaultTriggerText?: never;
  children: ReactNode;
};

type DefaultTriggerTextProps = {
  triggerComponent?: never;
  defaultTriggerText: ReactNode;
  children: ReactNode;
};

type props = TriggerComponentProps | DefaultTriggerTextProps;

export default function HoverDropdown({
  triggerComponent,
  defaultTriggerText = "Hover",
  children,
}: props) {
  return (
    <div className={`group relative ${styles.dropdown}`}>
      {triggerComponent ?? (
        <button type="button" className={"peer"}>
          {defaultTriggerText}
        </button>
      )}
      {/*Dropdown menu*/}
      <div className="absolute z-10 hidden w-max min-w-40 divide-y divide-gray-100 overflow-hidden rounded-lg bg-white font-normal shadow-2xl hover:block group-last:right-0 peer-hover:block">
        <ul>{children}</ul>
      </div>
    </div>
  );
}