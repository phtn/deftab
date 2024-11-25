import Image from "next/image";
import Link from "next/link";

export const UI = () => {
  return (
    <div className="grid h-20 w-full grid-cols-9 rounded-2xl border-[0.33px] border-stone-500">
      <Secondary href="https://www.vercel.com/" image="/svg/vercel.svg" />
      <Secondary href="https://ui.shadcn.com/" image="/svg/shadcn.svg" />
      <Secondary href="https://nextui.org/" image="/svg/nextui.svg" />
      <Secondary href="https://originui.com/" image="/svg/originui.svg" />
      <Secondary href="https://ui.aceternity.com/" image="/svg/ace.svg" />
      <Secondary href="https://magicui.design/" image="/svg/magicui.svg" />
      <Secondary href="https://heroicons.com/" image="/svg/heroicons.svg" />
      <Secondary href="https://lucide.dev/" image="/svg/lucide.svg" />
      <Secondary href="https://dribbble.com/" image="/svg/dribbble.svg" />
    </div>
  );
};

const Secondary = (props: { image: string; href: string }) => (
  <div className="z-50 h-full w-full p-4 transition-colors duration-300 ease-out hover:bg-stone-300/10">
    <Link
      href={props.href}
      target="_blank"
      className="flex size-full items-center justify-center"
    >
      <Image
        width={0}
        height={0}
        className="h-5 w-auto"
        alt=""
        src={props.image}
      />
    </Link>
  </div>
);
