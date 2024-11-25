"use client";
import { New } from "@/assets/icons/new";
import { Tabs, TabsList, TabsTrigger } from "@/ui/tabs";
import { type PropsWithChildren } from "react";
import { HexContent } from "./(devtools)/@hex/content";
import { SVG2Path } from "./(devtools)/@svg/content";

export const ToolsContent = () => {
  return (
    <div className="col-span-2 flex h-full w-full flex-col items-center bg-transparent">
      <Title title="Dev Tools" />
      <TabsComponent>
        <HexContent />
        <SVG2Path />
      </TabsComponent>
    </div>
  );
};
const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex h-10 w-full items-center space-x-2 px-1">
      <New fill="#cccccc" />
      <p className="bg-gradient-to-r from-indigo-100/50 via-rose-200/50 to-cyan-200/40 bg-clip-text font-bold text-transparent opacity-60">
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
      <TabsList className="grid w-fit grid-cols-2 text-zinc-500">
        <TabsTrigger value="hex" className="w-fit active:text-white">
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
