import { Particles } from "@/ui/particles";
import Image from "next/image";

export const Launcher = () => {
  return (
    <div className="relative flex h-[calc(50vh)] w-full items-end overflow-clip">
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-3 flex h-full w-full items-end justify-start">
          <Image
            alt="left-outer-blast"
            src="/svg/launcher/left_outer_blast.svg"
            width={0}
            height={0}
            loading="lazy"
            className="relative -bottom-0 -left-0 h-56 w-auto select-none"
          />
        </div>
        <div className="col-span-5 flex h-full w-full items-end overflow-x-visible">
          <Image
            alt="center-outer-blast"
            src="/svg/launcher/center_outer_blast.svg"
            width={800}
            height={400}
            loading="lazy"
            className="relative -bottom-8 -left-2 h-44 w-auto select-none antialiased"
          />
        </div>
        <div className="col-span-4 flex h-full w-full items-end overflow-auto">
          <Image
            alt="right-outer-blast"
            src="/svg/launcher/right_outer_blast.svg"
            width={0}
            height={0}
            loading="lazy"
            className="relative -bottom-0 right-0 h-auto w-full select-none"
          />
        </div>
      </div>
    </div>
  );
};

export const Layer2 = () => (
  <div className="absolute bottom-0 left-0 grid h-[50vh] w-full grid-cols-6 overflow-hidden border-gray-500 px-6">
    <div className="col-span-2 h-full w-full" />
    <div className=" relative z-[50] col-span-1 flex h-full w-full items-start justify-center border-green-500">
      <Image
        alt="machd"
        src={"/svg/machd_v3.svg"}
        width={0}
        height={0}
        loading="lazy"
        unoptimized
        className="h-[24vh] -top-1 relative topb w-auto"
      />
      <div className="absolute -top-0.5 h-full w-[34px] rounded-t-[6px] border-gray-700 bg-gradient-to-b from-indigo-300/40 via-pink-200/20 to-transparent">
        <div className="absolute top-0 ml-0.5 h-1/2 w-[34px] animate-pulse rounded-t-[8px] bg-gradient-to-b from-indigo-200/20 via-amber-100/20 to-transparent" />
        <Particles
          className="absolute inset-0 top-0 h-1/4 select-none"
          quantity={20}
          ease={20}
          refresh
        />
      </div>
    </div>

    <div className="col-span-3 flex h-full w-full items-end">
      {
        /* <Image
        alt="right-outer-blast"
        src="/svg/launcher/right_outer_blast.svg"
        width={0}
        height={0}
        className="relative -bottom-24 right-6 h-full w-full"
        unoptimized
      /> */
      }
    </div>
  </div>
);
