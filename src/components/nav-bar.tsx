"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ShineBorder } from "@/components/ui/shine-border";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="fixed z-10 w-full top-5 left-0 right-0 flex justify-center">
        <ShineBorder
          className="text-center text-2xl font-bold capitalize rounded-xl flex justify-center items-center bg-white text-black w-fit"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <Button variant="ghost" asChild className={cn("transition-colors", pathname === "/" && "text-blue-500")}>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className={cn("transition-colors", pathname === "/sosial" && "text-blue-500")}>
            <Link href="/sosial">Sosial</Link>
          </Button>
          <Button variant="ghost" asChild className={cn("transition-colors", pathname === "/testimoni" && "text-blue-500")}>
            <Link href="/testimoni">Testimoni</Link>
          </Button>
          <Button variant="ghost" asChild className={cn("transition-colors", pathname === "/gallery" && "text-blue-500")}>
            <Link href="/gallery">Gallery</Link>
          </Button>
        </ShineBorder>
      </nav>
    )
} 