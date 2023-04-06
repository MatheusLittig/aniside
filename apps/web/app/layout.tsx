import "./styles.css";
import { Public_Sans as FontSans } from "next/font/google";
import { AppWrapper } from "@aniside/ui";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-public",
});

export const metadata = {
  title: "Aniside",
  description: "Your next geek social media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppWrapper className={fontSans.className}>{children}</AppWrapper>;
}
