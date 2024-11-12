import { cn } from "@/lib/utils";
import { type IconProps } from "./types";

export const ClipboardIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={cn(props.fill ? "" : "stroke-zinc-800")}
    >
      <ClipboardPath {...props} />
    </svg>
  );
};

const ClipboardPath = ({ fill, stroke, strokeWidth }: IconProps) => (
  <g fill={fill}>
    <path
      d="M6.25,2.75h-1c-1.105,0-2,.895-2,2V14.25c0,1.105,.895,2,2,2h7.5c1.105,0,2-.895,2-2V4.75c0-1.105-.895-2-2-2h-1"
      fill={fill ?? "none"}
      stroke={stroke ?? "none"}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={strokeWidth ?? "1.5"}
    ></path>
    <rect
      x="6.25"
      y="1.25"
      width="5.5"
      height="3"
      rx="1"
      ry="1"
      fill={fill ?? "none"}
      stroke={stroke ?? "none"}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={strokeWidth ?? "1.5"}
      data-color="color-2"
    ></rect>
  </g>
);
