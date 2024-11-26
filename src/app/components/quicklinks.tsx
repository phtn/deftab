import Image from "next/image";
import Link from "next/link";

export const Quicklinks = () => (
  <div className="w-full overflow-hidden bg-gradient-to-b from-[#b8b4ac]/80 via-[#c8b9a0] to-[#e1c18e]">
    <div className="grid h-10 w-full grid-cols-4 bg-gray-950">
      <div className="relative col-span-3">
        <div className="absolute h-full w-full bg-gradient-to-b from-[#b8b4ac]/80 via-[#c8b9a0] to-[#e1c18e]" />
        <div className="absolute flex h-full w-full -skew-x-[30deg] justify-start rounded-br-md bg-gray-950">
          <div className="absolute left-8 h-[13.5rem] w-10 skew-x-[30deg] bg-gray-950" />
        </div>
      </div>
      <div className="relative col-span-1 flex -skew-x-[30deg] justify-end rounded-tl-md rounded-tr-xl bg-gradient-to-b from-[#b8b4ac]/80 via-[#c8b9a0] to-[#e1c18e]">
        <div className="absolute -right-0 size-10 skew-x-[30deg] bg-gray-950" />
        <div className="absolute -right-0 size-10 w-3/4 skew-x-[30deg] rounded-tr-xl bg-gradient-to-b from-[#b8b4ac]/80 via-[#c8b9a0] to-[#e1c18e]" />
      </div>
    </div>

    <div className="relative h-fit w-full bg-gray-950">
      <div className="absolute h-[6rem] w-full rounded-l-2xl rounded-br-2xl bg-gradient-to-b from-[#b8b4ac]/80 via-[#c8b9a0] to-[#e1c18e]" />
      <div className="grid h-[5rem] w-full grid-cols-5">
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
      target="_blank"
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
