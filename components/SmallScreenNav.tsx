
"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

type productTypesProps = {

}
export function SmallScreenNav({productTypes}:any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
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
        </Button>
      </SheetTrigger>
      <SheetContent className="  flex flex-col h-1/2 w-full items-center bg-gray-900 text-white" side={"top"}>
        <div className="mt-2">
              <Link href="/products" legacyBehavior>
                <a className=" block mb-2 px-2 py-4 border-b border-white">Products</a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block mb-2 px-2 py-4 border-b border-white">Services</a>
              </Link>
              <DropdownMenu>
              <DropdownMenuTrigger className=" block mb-2 px-2 py-4 border-b border-white">Requirements</DropdownMenuTrigger>
              <DropdownMenuContent className="  my-6 text-right">
                {productTypes.map((p:any) => (<DropdownMenuItem className="p-2" key={p.name}><Link href={`/requirements/${p.name}`}>{p.name}</Link></DropdownMenuItem> ))}
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
      </SheetContent>
    </Sheet>
  );
}
