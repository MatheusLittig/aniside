import "./styles.css";
import { Public_Sans as FontSans } from "next/font/google";
import { App, Button, Icon, Input } from "@aniside/ui";
import Image from "next/image";

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
    <App className={fontSans.className}>
      <App.Header>
        <div className="hidden col-span-3 md:flex md:items-center">
          <Image
            src="/svgs/logo-full.svg"
            width={73}
            height={48}
            alt="Aniside"
          />
        </div>

        <div className="col-span-12 md:col-span-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">Feed</h1>
          <Button size="lg">Create</Button>
        </div>

        <div className="hidden md:block col-span-3">
          <Input>
            <Input.Field size="lg" placeholder="Search..." />
            <Icon.Search className="text-black-600" />
          </Input>
        </div>
      </App.Header>
      {children}
    </App>
  );
}
