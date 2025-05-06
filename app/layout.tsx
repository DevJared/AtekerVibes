import type { Metadata } from "next";
import { Alex_Brush, Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"], 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alexBrush",
});

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
        className={`${montserrat.variable} ${alexBrush.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
