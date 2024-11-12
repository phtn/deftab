import { cn } from "@/lib/utils";
import { type IconProps } from "./types";

export const New = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={"none"}
    >
      <path
        className={cn(props.fill ? "" : "fill-zinc-300")}
        fillRule="evenodd"
        fill={`${props.fill}`}
        d="M10.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-.999-3.33Z"
        clipRule="evenodd"
      ></path>
      <path
        className={cn(props.fill ? "" : "fill-zinc-400")}
        fill={`${props.fill}80`}
        d="m4.365 11.31.079.212.212.08 1.68.635a.256.256 0 0 1 .164.24.256.256 0 0 1-.163.238l-1.68.635-.213.08-.08.213-.63 1.692v.001a.25.25 0 0 1-.234.164.25.25 0 0 1-.233-.164l-.631-1.693-.08-.213-.212-.08-1.68-.635a.256.256 0 0 1-.164-.239c0-.108.067-.203.163-.24l1.68-.634.213-.08.08-.213.63-1.692c.018-.046.083-.117.234-.117.15 0 .217.07.233.116v.001l.632 1.692Z"
      ></path>
    </svg>
  );
};
