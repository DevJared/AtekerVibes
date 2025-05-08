import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "AtekerVibes",
  description: "Entertainment | Events | Podcast | Blog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      > 
        {children} 
      </body>
    </html>
  );
}
