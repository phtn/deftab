import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { MainContent } from "./content";

export const metadata: Metadata = {
  title: "New Tab",
  description: "Time to useful default tabs",
  icons: [{ rel: "icon", url: "/svg/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} antialiased`}>
      <body>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
