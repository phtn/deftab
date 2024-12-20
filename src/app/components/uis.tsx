import Image from "next/image";
import Link from "next/link";

export const UIs = () => {
  return (
    <div className="_rounded-b-2xl grid h-16 w-full grid-cols-9 overflow-hidden rounded-sm border-[0.33px] border-stone-500">
      {ui_data.map((ui) => (
        <Secondary
          key={ui.id}
          href={ui.href}
          src={ui.src}
          aria-label={ui.label}
        />
      ))}
    </div>
  );
};

const Secondary = (props: { src: string; href: string }) => (
  <div className="z-50 h-full w-full p-4 transition-colors duration-300 ease-out hover:bg-stone-300/10">
    <Link
      href={props.href}
      target="_blank"
      className="flex size-full items-center justify-center"
    >
      <Image
        width={0}
        height={0}
        className="h-7 w-auto"
        alt="prop.label"
        src={props.src}
      />
    </Link>
  </div>
);

interface UIData {
  id: number;
  label: string;
  description: string;
  href: string;
  src: string;
}
const ui_data: UIData[] = [
  {
    id: 0,
    label: "vercel",
    description: "vercel",
    href: "https://www.vercel.com/",
    src: "/svg/vercel.svg",
  },
  {
    id: 1,
    label: "shadcn",
    description: "shadcn",
    href: "https://ui.shadcn.com/",
    src: "/svg/shadcn.svg",
  },
  {
    id: 2,
    label: "nextui",
    description: "nextui",
    href: "https://nextui.org/",
    src: "/svg/nextui.svg",
  },
  {
    id: 3,
    label: "originui.com",
    description: "originui.com",
    href: "https://originui.com/",
    src: "/svg/originui.svg",
  },
  {
    id: 4,
    label: "ui.aceternity",
    description: "ui.aceternity",
    href: "https://ui.aceternity.com/",
    src: "/svg/ace.svg",
  },
  {
    id: 5,
    label: "magicui.design",
    description: "magicui.design",
    href: "https://magicui.design/",
    src: "/svg/magicui.svg",
  },
  {
    id: 6,
    label: "heroicons.com",
    description: "heroicons.com",
    href: "https://heroicons.com/",
    src: "/svg/heroicons.svg",
  },
  {
    id: 7,
    label: "lucide.dev",
    description: "lucide.dev",
    href: "https://lucide.dev/",
    src: "/svg/lucide.svg",
  },
  {
    id: 8,
    label: "dribbble.com",
    description: "dribbble.com",
    href: "https://dribbble.com/",
    src: "/svg/dribbble.svg",
  },
];
