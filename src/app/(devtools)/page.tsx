import type { Metadata } from "next";
import { HexContent } from "./@hex/content";

export interface PageProps {
  params: {
    id: string | null;
  };
}
export const metadata: Metadata = {
  title: "New Tab",
  description: "Time to useful default tabs",
  icons: [{ rel: "icon", url: "/svg/logo.svg" }],
};
const DevtoolsPage = async () => {
  return <HexContent />;
};
export default DevtoolsPage;
