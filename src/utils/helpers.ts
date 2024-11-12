export const pasteFn = async (id: string) => {
  const inputEl = document.getElementById(id) as HTMLInputElement;
  const text = await navigator.clipboard.readText();
  inputEl.value = text.trim();
  if (inputEl.value.startsWith("#")) {
    inputEl.value = inputEl.value.substring(1);
    return inputEl.value;
  }
  return inputEl.value;
};
