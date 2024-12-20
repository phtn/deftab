import Image from "next/image";
import Link from "next/link";

export const BEs = () => {
  return (
    <div className="_rounded-b-2xl grid h-16 w-fit grid-cols-8 overflow-hidden rounded-sm border-[0.33px] border-stone-500">
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
        className="h-6 w-auto"
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
    label: "firebase",
    description: "firebase",
    href: "https://console.firebase.google.com/u/0/",
    src: "/svg/firebase.svg",
  },
  {
    id: 1,
    label: "convex.dev",
    description: "convex",
    href: "https://dashboard.convex.dev",
    src: "/svg/convex.svg",
  },
  {
    id: 2,
    label: "digitalocean",
    description: "digitalocean",
    href: "https://cloud.digitalocean.com/",
    src: "/svg/digitalocean.svg",
  },
  {
    id: 3,
    label: "cloud.redis.com",
    description: "redis",
    href: "https://cloud.redis.io/",
    src: "/svg/redis.svg",
  },
  {
    id: 4,
    label: "gcp",
    description: "google cloud platform",
    href: "https://console.cloud.google.com/",
    src: "/svg/gcp.svg",
  },
  {
    id: 5,
    label: "supabase",
    description: "supabase",
    href: "https://supabase.com/dashboard/projects",
    src: "/svg/supabase.svg",
  },
  {
    id: 6,
    label: "v0",
    description: "v0.dev",
    href: "http://v0.dev",
    src: "/svg/v0.svg",
  },
  {
    id: 7,
    label: "localhost",
    description: "localhost",
    href: "http://localhost:3000",
    src: "/svg/localhost.svg",
  },
];
