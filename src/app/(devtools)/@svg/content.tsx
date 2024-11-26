"use client";

import { svg2Path } from "@/tools/svg/icons/utils";
import { TabsContent } from "@/ui/tabs";
import { type ChangeEvent, useCallback, useState } from "react";
import Json from "@/ui/jsonv";
import type { INode } from "svgson";

export const SVG2Path = () => {
  const [pathview, setPathview] = useState(false);
  const [pathdata, setPathdata] = useState<INode | undefined>();

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      const v = e.target.value;
      if (v.includes("<svg")) {
        const converted = await svg2Path(v);
        if (converted) {
          setPathdata(converted);
          setPathview(true);
        }
      } else {
        console.table({ message: "hello, bright one!" });
      }
    },
    [],
  );
  return (
    <TabsContent value="svg" className="bg-transparent">
      <section className="container flex h-96 w-full items-center justify-center overflow-scroll">
        {pathview ? (
          <Json src={{ pathdata }} theme="railscasts" />
        ) : (
          <textarea
            onChange={handleChange}
            className="h-full w-full rounded-lg border border-slate-500/50 bg-transparent text-xs"
          />
        )}
      </section>
    </TabsContent>
  );
};
