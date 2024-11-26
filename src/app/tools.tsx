"use client";
import { Tabs, TabsList, TabsTrigger } from "@/ui/tabs";
import { type PropsWithChildren } from "react";
import { HexContent } from "./(devtools)/@hex/content";
import { SVG2Path } from "./(devtools)/@svg/content";

export const ToolsContent = () => {
  return (
    <div className="col-span-2 flex h-full w-full flex-col items-center bg-transparent">
      <Title title="" />
      <TabsComponent>
        <HexContent />
        <SVG2Path />
      </TabsComponent>
    </div>
  );
};
const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex h-10 w-full items-start">
      <p className="bg-gradient-to-b from-indigo-100/50 via-rose-200/50 to-[#f9c97c]/80 bg-clip-text font-semibold text-transparent opacity-60">
        {title}
      </p>
    </div>
  );
};

export const TabsComponent = ({ children }: PropsWithChildren) => {
  return (
    <Tabs
      defaultValue="hex"
      className="h-[36rem] w-full rounded-xl bg-transparent"
    >
      <TabsList className="via-papayawhip/90 grid w-fit grid-cols-2 bg-gradient-to-b from-rose-200/50 to-[#fafafa]/70 bg-clip-text text-sm text-transparent">
        <TabsTrigger value="hex" className="w-fit active:text-amber-300">
          Hex Blender
        </TabsTrigger>
        <TabsTrigger value="svg" className="w-fit">
          SVG 2 Path
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};
