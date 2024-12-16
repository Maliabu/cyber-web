import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const futuraBook = localFont({
  src: "./fonts/FuturaMedium.ttf",
  variable: "--font-futura",
  weight: "",
});

export const metadata: Metadata = {
  title: "Beera Safe",
  description: "learn cyber security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futuraBook.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <ClerkProvider>
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
