import Image from "next/image";

export const Launcher = () => {
  return (
    <div className="relative flex h-[calc(100vh-354px)] w-full items-end overflow-clip">
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-3 flex h-full w-full items-end justify-start">
          <Image
            alt="left-outer-blast"
            src="/svg/launcher/left_outer_blast.svg"
            width={0}
            height={0}
            className="relative -bottom-0 -left-0 h-56 w-auto"
            unoptimized
          />
        </div>
        <div className="col-span-5 flex h-full w-full items-end overflow-x-visible">
          <Image
            alt="center-outer-blast"
            src="/svg/launcher/center_outer_blast.svg"
            width={800}
            height={400}
            className="relative -bottom-8 -left-2 h-44 w-auto antialiased"
            unoptimized
          />
        </div>
        <div className="col-span-4 flex h-full w-full items-end overflow-auto">
          <Image
            alt="right-outer-blast"
            src="/svg/launcher/right_outer_blast.svg"
            width={0}
            height={0}
            className="relative -bottom-0 right-0 h-auto w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export const Layer2 = () => (
  <div className="absolute bottom-0 left-0 flex h-[354px] w-full items-end justify-between overflow-hidden">
    <div className="w-full" />

    <div className="col-span-3 flex h-full w-full items-end">
      {/* <Image
        alt="right-outer-blast"
        src="/svg/launcher/right_outer_blast.svg"
        width={0}
        height={0}
        className="relative -bottom-24 right-6 h-full w-full"
        unoptimized
      /> */}
    </div>
  </div>
);
