import { type HTMLAttributes, useMemo, useRef } from "react";
import { FastOutlineFactory } from "./factory";
import type { SVGData, SVGList } from "./types";

const outline: SVGList[] = [
  {
    title: "cap",
    data: {
      pathData: "M12 3.493a59.903 59.903 0 0 1 10.399 5.84",
      title: "Sample SVG",
      titleId: "sample-svg",
      stroke: "currentColor",
      strokeWidth: 2,
    },
  },
];
const default_data: SVGData = {
  pathData: "M12 3.493a59.903 59.903 0 0 1 10.399 5.84",
  title: "Default SVG",
  titleId: "default-svg",
  stroke: "currentColor",
  strokeWidth: 1.5,
};

export const FastOut = (
  data: SVGData | undefined,
  attributes: HTMLAttributes<HTMLOrSVGElement>,
) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const props = useMemo(() => data ?? default_data, [data]);
  return (
    <div>
      <FastOutlineFactory
        className=""
        ref={svgRef}
        {...props}
        {...attributes}
      />
    </div>
  );
};

type Title<T extends SVGList[]> = T[number]["title"];

const finder = <K extends typeof outline>(title: Title<K>) =>
  outline.find((i) => i.title === title)?.data;

export const Cap = (props: HTMLAttributes<HTMLOrSVGElement>) =>
  FastOut(finder("cap"), props);
