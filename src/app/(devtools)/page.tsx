import type { Metadata } from "next";
import { HexContent } from "./@hex/content";

export interface PageProps {
  params: {
    id: string | null;
  };
}
export const metadata: Metadata = {
  title: "Page",
  description: "Page metadata",
  icons: [{ rel: "icon", url: "/svg/icon.svg" }],
};
const DevtoolsPage = async () => {
  return <HexContent />;
};
export default DevtoolsPage;
