import type { PropsWithChildren } from "react";
import { Launcher, Layer2 } from "./components/launcher";
import { Quicklinks } from "./components/quicklinks";
import { Trench } from "./components/trench";
import { UIs } from "./components/uis";
import Image from "next/image";
import { BEs } from "./components/bes";

export const MainContent = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gray-950">
      <div className="relative z-[100] grid w-full grid-cols-6 p-6">
        {children}

        <Trench />

        <div className="col-span-3 w-full space-y-6">
          <Quicklinks />
          <UIs />
          <BEs />
        </div>
      </div>

      <div className="absolute bottom-0">
        <Launcher />
        <Layer2 />
      </div>

      <Image
        alt="spacex-logo"
        src={"/svg/spacex.svg"}
        width={0}
        height={0}
        className="pointer-events-none absolute bottom-2 left-2 z-[100] h-3 w-auto opacity-80"
      />
    </main>
  );
};
