import Image from "next/image";

export const Trench = () => {
  return (
    <div className="_border-x-[0.33px] col-span-1 flex w-full items-center justify-center border-gray-500">
      <div className="relative flex h-full w-full items-end overflow-x-hidden">
        <Image
          alt="starship"
          src={"/svg/starship.svg"}
          width={0}
          height={0}
          priority
          unoptimized
          className="h-56 w-auto shrink-0 select-none"
        />
      </div>
    </div>
  );
};
