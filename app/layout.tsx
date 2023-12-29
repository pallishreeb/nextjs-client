import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kroztek integrated solution',
  description: 'Business to Business Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen   dark:bg-gray-900">
      <Provider>
        <Navbar/>
        <main className="flex flex-col flex-1 w-full  ">
            {children}
          </main>
        <Footer/>
        </Provider>
        </body>
    </html>
  )
}
