import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Clean App",
  description: "WASTE IS A RESOURCE FOUND AT THE WRONG PLACE",
  icons: {
    icon: "/a1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/a1.png" type="image/png" /> 

      </head>
      <body className={cn('w-full h-full',{inter})}>
      <Toaster />

        <Navbar/>
          {children}
          <Footer/>
          
          </body>
    </html>
  );
}
