import "@aniside/styles/src/global.scss";
import { Public_Sans as FontSans } from "next/font/google";

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
  return (
    <html lang="en" className={fontSans.variable}>
      <body>{children}</body>
    </html>
  );
}
