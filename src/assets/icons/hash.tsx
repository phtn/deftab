import { cn } from "@/lib/utils";
import { type IconProps } from "./types";
import { forwardRef } from "react";

export const HashIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className={cn(props.fill ? "" : "stroke-slate-400 stroke-[2.5px]", {
        "stroke-amber-600": !props.valid,
      })}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
      />
    </svg>
  );
});
HashIcon.displayName = "HashIcon";
