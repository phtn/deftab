"use client";
import { HashIcon } from "@/assets/icons/hash";
import { New } from "@/assets/icons/new";
import { SwatchIcon } from "@/assets/icons/swatch";
import { InputField } from "@/ui/input";
import Json from "@/ui/jsonv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { pasteFn } from "@/utils/helpers";
import { blendHex, isValidHexColor } from "@/utils/hexgen";
import {
  type ChangeEvent,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

//1B1F22
export const Tools = () => {
  return (
    <div className="col-span-2 flex h-full w-full flex-col items-center bg-transparent">
      <Title title="Dev Tools" />
      <Content>
        <Hex />
      </Content>
    </div>
  );
};
// 1B1F22
const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex h-10 w-full items-center space-x-2 px-1 text-[#f1f1f1]">
      <New fill="#cccccc" />
      <p className="text-sm font-bold">{title}</p>
    </div>
  );
};

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <Tabs
      defaultValue="hex"
      className="h-[36rem] w-full rounded-xl bg-transparent p-6"
    >
      <TabsList className="grid w-full grid-cols-2 text-zinc-500">
        <TabsTrigger value="hex" className="w-fit">
          Hex Blender
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

const Hex = () => {
  const [title, setTitle] = useState("title");
  const [hexOne, setHexOne] = useState("FAFAFA");
  const [hexTwo, setHexTwo] = useState("1A1A1A");
  const [isHexOneValid, setIsHexOneValid] = useState(true);
  const [isHexTwoValid, setIsHexTwoValid] = useState(true);

  const handleSetTitleDefault = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (newValue === "") {
        setTitle("title");
        return;
      }
    },
    [],
  );
  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue.trim().toLowerCase());
  }, []);

  const handleHexOneChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (newValue.startsWith("#")) {
      newValue = newValue.substring(1);
    }
    setHexOne(newValue);
    setIsHexOneValid(
      isValidHexColor(newValue) || isValidHexColor(`#${newValue}`),
    );
  }, []);

  const handleHexTwoChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (newValue.startsWith("#")) {
      newValue = newValue.substring(1);
    }
    setHexTwo(newValue);
    setIsHexTwoValid(
      isValidHexColor(newValue) || isValidHexColor(`#${newValue}`),
    );
  }, []);

  const handleHexPaste = useCallback(
    (id: string) => async () => {
      const val = await pasteFn(id);
      if (id === "hexOne") {
        setHexOne(val);
      } else {
        setHexTwo(val);
      }
    },
    [],
  );

  const Colors = useCallback(() => {
    const colors = Object.entries(blendHex(hexOne, hexTwo));
    return colors.map((color) => (
      <div
        key={color[0]}
        style={{ backgroundColor: color[1], height: 26 }}
        className="group flex h-full cursor-pointer items-center justify-end rounded px-1"
      >
        <p
          className="hidden w-[4ch] rounded px-[0.5ch] py-0.5 text-right text-xs font-medium group-hover:block"
          style={{
            color: colors.find((c) => c[0] === "100")?.[1],
            backgroundColor: colors.find((c) => c[0] === "800")?.[1],
            opacity: 0.8,
          }}
        >
          {color[0]}
        </p>
      </div>
    ));
  }, [hexOne, hexTwo]);

  const src = useMemo(
    () => ({
      [title]: blendHex(hexOne, hexTwo),
    }),
    [hexOne, hexTwo, title],
  );

  return (
    <TabsContent value="hex" className="bgtransparent">
      <section className="flex items-center space-x-4">
        <InputField
          id="title"
          valid={"true"}
          start={SwatchIcon}
          placeholder="title"
          onChange={handleTitleChange}
          onBlur={handleSetTitleDefault}
          value={title}
        />
        <InputField
          valid={`${isHexOneValid}`}
          start={HashIcon}
          placeholder="hex one"
          id="hexOne"
          onChange={handleHexOneChange}
          value={hexOne}
          onClick={handleHexPaste("hexOne")}
          end="true"
        />
        <InputField
          valid={`${isHexTwoValid}`}
          onChange={handleHexTwoChange}
          start={HashIcon}
          id="hexTwo"
          placeholder="hex two"
          value={hexTwo}
          onClick={handleHexPaste("hexTwo")}
          end="true"
        />
      </section>
      <section className="my-4 flex w-full space-x-4">
        <div className="w-full overflow-clip">
          <Json src={src} />
        </div>
        <div className="my-10 h-fit w-1/2">
          <Colors />
        </div>
      </section>
    </TabsContent>
  );
};
