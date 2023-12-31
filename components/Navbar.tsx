"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation"
import { TopNav } from "./TopNav";
import { SmallScreenNav } from "./SmallScreenNav";

const productTypes = [
  {
      name:"LT Motors",
  },
  {
      name:"DC Motors",
  },
  {
      name:"Drives",
  }
]
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname()
    // Define a function to determine if a link is active
    const isLinkActive = (href: string) => pathname === href || pathname.includes(href);
  return (
    <>
      <TopNav />
      <nav className="border-t p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand */}
          <Link href="/" legacyBehavior>
            <a className=" text-xl font-bold z-10">KROZTEK</a>
          </Link>

          {/* Hamburger menu button for small screens */}
          <div className="lg:hidden z-10">
            {/* <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button> */}
              <SmallScreenNav productTypes={productTypes}/>
          </div>

          {/* Navbar Links for small screens */}
          <div
            className={`lg:hidden absolute  top-16 left-0 bg-gray-100 w-full transition-all ease-out duration-300 overflow-hidden ${
              isMenuOpen ? "flex justify-center align-item mt-8" : "hidden"
            }`}
          >
            <div className="mt-2">
              <Link href="/products" legacyBehavior>
                <a className=" block mb-2">Products</a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block mb-2">Services</a>
              </Link>
              <DropdownMenu>
              <DropdownMenuTrigger>Requirements</DropdownMenuTrigger>
              <DropdownMenuContent>
                {productTypes.map((p) => (<DropdownMenuItem key={p.name}><Link href={`/requirements/${p.name}`}>{p.name}</Link></DropdownMenuItem> ))}
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>

          
          {/* Navbar Links for large screens */}
          <div className={`hidden lg:flex space-x-4`}>
            <Link href="/products" legacyBehavior>
              <a className={`${isLinkActive("/products") ? "border-b-4 border-gray-800 text-indigo-600 dark:text-yellow-300  dark:border-gray-200" : ""}`}>Products</a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className={`${isLinkActive("/services") ? "border-b-4 border-gray-800 text-indigo-600 dark:text-yellow-300  dark:border-gray-200" : ""}`}>Services</a>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`${isLinkActive("/requirements") ? "border-b-4 border-gray-800 text-indigo-600 dark:text-yellow-300  dark:border-gray-200" : ""}`}>Requirements</DropdownMenuTrigger>
              <DropdownMenuContent>
                {productTypes.map((p) => (<DropdownMenuItem key={p.name}><Link href={`/requirements/${p.name}`}>{p.name}</Link></DropdownMenuItem> ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Navbar;
