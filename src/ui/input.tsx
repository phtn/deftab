import { type IconProps } from "@/assets/icons/types";
import { cn } from "@/lib/utils";
import {
  type ForwardRefExoticComponent,
  type InputHTMLAttributes,
  type RefAttributes,
  forwardRef,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "focus-visible:ring-ring flex h-10 max-w-[16ch] cursor-pointer rounded-md border border-zinc-700 bg-transparent/80 px-3 py-2 pe-8 ps-8 text-sm uppercase tracking-widest text-zinc-300 placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export const InputField = (
  props: InputProps & {
    valid?: string;
    start?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    end?: string;
  },
) => {
  return (
    <div className="">
      <div className="first: relative flex items-center">
        <div className="absolute bottom-0 left-2 top-0 flex items-center">
          {props.start ? <props.start valid={props.valid} /> : null}
        </div>
        <Input id={props.id} className={cn("", props.className)} {...props} />
        {props.end ? (
          <div className="absolute right-0 flex h-full w-[36px] items-center justify-center p-0.5">
            <div
              className="size-5 rounded border-[0.33px] border-slate-600"
              style={{ backgroundColor: `#${props.value?.toString()}` }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
