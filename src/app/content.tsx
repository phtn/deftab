import type { PropsWithChildren } from "react";
import { Launcher, Layer2 } from "./components/launcher";
import { Quicklinks } from "./components/quicklinks";
import { Trench } from "./components/trench";
import { UI } from "./components/ui";

export const MainContent = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gray-950">
      <div className="relative z-[100] grid w-full grid-cols-6 p-6">
        {children}

        <Trench />

        <div className="col-span-3 w-full space-y-6">
          <Quicklinks />
          <UI />
        </div>
      </div>

      <div className="absolute bottom-0">
        <Launcher />
        <Layer2 />
      </div>
    </main>
  );
};
