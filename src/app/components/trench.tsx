import Image from "next/image";

export const Trench = () => {
  return (
    <div className="_border-[0.33px] relative col-span-1 flex w-full items-start justify-center overflow-hidden border-gray-500">
      <div className="_border-[0.33px] relative -mt-6 flex h-[calc(50vh)] w-full items-end overflow-hidden border-pink-500">
        <Image
          alt="starship"
          src={"/svg/starship.svg"}
          width={0}
          height={0}
          priority
          unoptimized
          className="_border-[0.33px] -mb-[11.20vh] h-[calc(50vh)] w-auto shrink-0 select-none border-gray-500"
        />
      </div>
    </div>
  );
};
