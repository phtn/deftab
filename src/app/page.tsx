import type { Metadata } from "next";
import { ToolsContent } from "./tools";

export const metadata: Metadata = {
  title: "New Tab",
  description: "Time to useful default tabs",
  icons: [{ rel: "icon", url: "/svg/logo.svg" }],
};
export default async function MainPage() {
  return <ToolsContent />;
}
