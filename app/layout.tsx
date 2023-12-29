import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kroztek integrated solution",
  description: "Business to Business Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen   dark:bg-gray-900">
        <Provider>
          <Navbar />
          <main className="flex flex-col flex-1 w-full  ">{children}</main>
          <button
            title="Contact"
            className="fixed z-90 bottom-10 right-8  w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl  hover:drop-shadow-2xl hover:animate-bounce duration-300"
          >
            <a
              href="https://wa.me/+918637214899"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/whatsapp.png"}
                width={80}
                height={80}
                alt="wp"
              />
            </a>
          </button>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
