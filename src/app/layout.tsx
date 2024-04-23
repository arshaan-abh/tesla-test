import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import NavBar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body
        className={cn(
          "font-sans text-tesla-black antialiased",
          fontSans.variable,
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
