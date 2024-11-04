import Image from "next/image";
import Link from "next/link";

export const MainContent = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950">
      <div className="grid w-full grid-cols-6 p-6">
        <div className="col-span-2 flex h-full w-full justify-center">
          <div className="w-full">
            <div className="flex h-10 w-full items-center px-6 text-stone-400">
              <p className="text-xs">Cryptocurrencies</p>
            </div>
            <div className="w-full rounded-2xl border"></div>
          </div>
        </div>
        <div></div>

        <div className="col-span-3 w-full space-y-6">
          <Quicklinks />

          <div className="grid h-20 w-full grid-cols-9 rounded-2xl border-[0.33px] border-stone-500">
            <Secondary href="https://www.vercel.com/" image="/svg/vercel.svg" />
            <Secondary href="https://ui.shadcn.com/" image="/svg/shadcn.svg" />
            <Secondary href="https://nextui.org/" image="/svg/nextui.svg" />
            <Secondary href="https://originui.com/" image="/svg/originui.svg" />
            <Secondary href="https://ui.aceternity.com/" image="/svg/ace.svg" />
            <Secondary
              href="https://magicui.design/"
              image="/svg/magicui.svg"
            />
            <Secondary
              href="https://heroicons.com/"
              image="/svg/heroicons.svg"
            />
            <Secondary href="https://lucide.dev/" image="/svg/lucide.svg" />
            <Secondary href="https://dribbble.com/" image="/svg/dribbble.svg" />
          </div>
        </div>
      </div>
      <div className="relative flex h-[calc(100vh-354px)] w-full items-end overflow-clip">
        <div className="grid h-full w-full grid-cols-10">
          <div className="col-span-2 flex h-full w-full items-end">
            <Image
              alt="left-outer-blast"
              src="/svg/launcher/left_outer_blast.svg"
              width={0}
              height={0}
              className="relative -bottom-[16px] -left-0 h-48 w-auto"
              unoptimized
            />
          </div>
          <div className="col-span-5 flex h-full w-full items-end">
            <Image
              alt="center-outer-blast"
              src="/svg/launcher/center_outer_blast.svg"
              width={0}
              height={0}
              className="relative -bottom-[16px] h-32 w-auto"
              unoptimized
            />
          </div>
          <div className="col-span-3 flex h-full w-full items-end">
            <Image
              alt="right-outer-blast"
              src="/svg/launcher/right_outer_blast.svg"
              width={0}
              height={0}
              className="relative -bottom-[16px] -right-0 h-96 w-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const Quicklinks = () => (
  <div className="w-full overflow-hidden bg-[#91D4E0]">
    <div className="grid h-10 w-full grid-cols-4 bg-gray-950">
      <div className="relative col-span-3">
        <div className="absolute h-full w-full bg-[#91D4E0]" />
        <div className="absolute flex h-full w-full -skew-x-[30deg] justify-start rounded-br-md bg-gray-950">
          <div className="absolute left-8 h-[13.5rem] w-10 skew-x-[30deg] bg-gray-950" />
        </div>
      </div>
      <div className="relative col-span-1 flex -skew-x-[30deg] justify-end rounded-tl-md rounded-tr-2xl bg-[#91D4E0]">
        <div className="absolute -right-0 size-10 skew-x-[30deg] bg-gray-950" />
        <div className="absolute -right-0 size-10 w-3/4 skew-x-[30deg] rounded-tr-2xl bg-[#91D4E0]" />
      </div>
    </div>
    <div className="relative h-40 w-full bg-gray-950">
      <div className="absolute h-[10rem] w-full rounded-l-2xl rounded-br-2xl bg-[#91D4E0]" />
      <div className="relative z-50 flex h-16 w-full items-center px-8 text-sm font-light tracking-wide opacity-60">
        quicklinks
      </div>
      <div className="grid h-[6rem] w-full grid-cols-5">
        <Primary href="https://www.youtube.com/" image="/svg/youtube.svg" />
        <Primary href="https://www.x.com/" image="/svg/x.svg" />
        <Primary href="https://www.chatgpt.com/" image="/svg/openai.svg" />
        <Primary href="https://www.claude.ai/" image="/svg/claude.svg" />
        <Primary href="https://github.com/" image="/svg/github.svg" />
      </div>
    </div>
  </div>
);

const Primary = (props: { image: string; href: string }) => (
  <div className="z-50 h-full w-full">
    <Link
      href={props.href}
      className="flex size-full items-center justify-center rounded-xl"
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

const Secondary = (props: { image: string; href: string }) => (
  <div className="z-50 h-full w-full p-4 transition-colors duration-300 ease-out hover:bg-stone-300/10">
    <Link
      href={props.href}
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
