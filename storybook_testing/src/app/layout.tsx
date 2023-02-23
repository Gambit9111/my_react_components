import "./globals.css";
import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
