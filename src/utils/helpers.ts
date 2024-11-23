export const pasteFn = async (id: string) => {
  const inputEl = document.getElementById(id) as HTMLInputElement;
  const text = await navigator.clipboard.readText();
  inputEl.value = text.trim();
  const v = inputEl.value;
  if (v.includes('"')) {
    v.replaceAll('"', "");
    console.log(v);
  }
  const hasHash = v.includes("#");
  let hex = "";
  if (hasHash) {
    hex = extractHex(v, v.indexOf("#"));
    return hex.substring(1);
  }

  // const hex = inputEl.value.substring(inputEl.value.indexOf("#") )
  if (inputEl.value.startsWith("#")) {
    inputEl.value = inputEl.value.substring(1);
    return inputEl.value;
  }
  return inputEl.value.replaceAll('"', "");
};

const extractHex = (s: string, start: number) => s.substring(start, start + 7);
