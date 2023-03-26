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
    <html lang="en" style={{ background: "black", color: "white" }}>
      <body>{children}</body>
    </html>
  );
}
