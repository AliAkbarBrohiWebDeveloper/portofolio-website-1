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
    <section className="w-full">
      <header className="sticky top-0 z-50 shadow-lg bg-white">
        <main className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 h-20">
          {/* Left: Logo / Title */}
          <div>
            <h1 className="text-2xl font-bold">Ali Akbar Brohi</h1>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <li>
              <Link href="/" className="text-lg font-medium hover:text-gray-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="text-lg font-medium hover:text-gray-500 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-lg font-medium hover:text-gray-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu (Hamburger + Sheet Drawer) */}
          <Sheet>
            <SheetTrigger className="md:hidden text-gray-700">
              <Menu className="w-7 h-7" />
            </SheetTrigger>

            <SheetContent side="left" className="w-64 sm:w-72">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-center mt-4 mb-6">Ali Akbar Brohi</SheetTitle>
                <SheetDescription asChild>
                  <nav>
                    <ul className="flex flex-col gap-y-6 text-center">
                      <li>
                        <Link href="/" className="text-xl font-semibold hover:text-gray-500 transition duration-300">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/About" className="text-xl font-semibold hover:text-gray-500 transition duration-300">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/Contact" className="text-xl font-semibold hover:text-gray-500 transition duration-300">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
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
