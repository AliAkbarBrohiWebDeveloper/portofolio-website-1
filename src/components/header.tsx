

import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <section>
      
        <header className="sticky top-0 z-50 shadow-lg px-4">
          <main className="flex justify-between items-center px-6 py-3 h-20">
            {/* Left side: Title */}
            <div>
              <h1 className="text-2xl font-bold">Ali Akbar Brohi</h1>
            </div>

            {/* Navigation Links (Desktop) */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/" className="text-lg font-semibold hover:text-gray-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-lg font-semibold hover:text-gray-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-lg font-semibold hover:text-gray-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger className="md:hidden text-3xl">
                <Menu />
              </SheetTrigger>

              <SheetContent side="left" className="">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-semibold text-center mb-4">Ali Akbar Brohi</SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-col gap-y-6">
                      <li>
                        <Link href="/" className="text-xl font-bold hover:text-gray-400 transition duration-300">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/About" className="text-xl font-bold hover:text-gray-400 transition duration-300">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/Contact" className="text-xl font-bold hover:text-gray-400 transition duration-300">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </main>
        </header>
    
    </section>
  )
}

export default Header
