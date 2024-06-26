import { ReactNode } from "react";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import NavBar from "@/components/layout/navbar";

const fontYekan = localFont({
  src: "../fonts/yekan-bakh-noen-vf.woff2",
  variable: "--font-yekan",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body
        className={cn(
          "font-yekan text-tesla-neutral-900 antialiased",
          fontYekan.variable,
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

// TODO list:
// 1. package.json metadata
// 2. stylelint
// 3. stylelint-config-prettier
// 4. self made stuff
