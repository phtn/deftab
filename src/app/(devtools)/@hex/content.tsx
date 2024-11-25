"use client";

import { HashIcon } from "@/assets/icons/hash";
import { SwatchIcon } from "@/assets/icons/swatch";
import { InputField } from "@/ui/input";
import Json from "@/ui/jsonv";
import { TabsContent } from "@/ui/tabs";
import { pasteFn } from "@/utils/helpers";
import { blendHex, isValidHexColor } from "@/utils/hexgen";
import { type ChangeEvent, useCallback, useMemo, useState } from "react";

export const HexContent = () => {
  const [title, setTitle] = useState("title");
  const [hexOne, setHexOne] = useState("B0B1B2");
  const [hexTwo, setHexTwo] = useState("F9C97C");
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
    <TabsContent value="hex" className="bg-transparent">
      <section className="flex items-center space-x-2">
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
      <section className="my-4 flex w-full space-x-2">
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
