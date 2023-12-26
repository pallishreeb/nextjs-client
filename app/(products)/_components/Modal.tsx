"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
export function Modal() {
    const [name, setName] = useState<string|undefined>(undefined)
    const [email, setEmail] = useState<string|undefined>(undefined)
    const [phone, setPhone] = useState<string|undefined>(undefined)
    const [query, setQuery] = useState<string|undefined>(undefined)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-gray-800 text-white">PLACE AN ENQUIRY</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-screen-sm">
        <DialogHeader>
          <DialogTitle>SEND QUERY</DialogTitle>
          <DialogDescription>
            Post your query regarding this product.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name*
            </Label>
            <Input id="name" defaultValue={"Your Full Name"} value={name} onChange={(event)=>setName(event.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
             Email*
            </Label>
            <Input id="email"  defaultValue={"Your Email ID"} value={email} onChange={(event)=>setEmail(event.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Mobile*
            </Label>
            <Input id="mobile" defaultValue={"Your Mobile Number"} value={phone} onChange={(event)=>setPhone(event.target.value)}className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="query" className="text-right">
            Query
            </Label>
            <Textarea id="query" defaultValue={"Your Query Message"}  value={query} onChange={(event)=>setQuery(event.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">SUBMIT</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
