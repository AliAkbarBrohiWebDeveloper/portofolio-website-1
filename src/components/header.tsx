


import Link from 'next/link'
// import React from 'react'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

const Header = () => {
  return (
    <section>
      <header className="sticky top-0 z-50 shadow-lg bg-white">
        <main className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 h-20 ">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">Ali AKBAR BROHI</h1>
          </div>

         
          <ul className="hidden md:flex space-x-6 lg:space-x-8 ">
            <li>
              <Link href="/" className="text-lg font-bold hover:text-yellow-600 hover:border-b-5 border-yellow-600 transition duration-300">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/About" className="text-lg font-bold  hover:text-yellow-600 hover:border-b-5 border-yellow-600  transition duration-300">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-lg font-bold  hover:text-yellow-600 hover:border-b-5 border-yellow-600  transition duration-300">
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden text-gray-700">
              <Menu className="w-7 h-7" />
            </SheetTrigger>

            <SheetContent side="left" className="w-64 sm:w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="text-1xl font-bold text-center mt-4">Ali AKBAR BROHI</SheetTitle>
                <SheetDescription asChild>
                  <nav className="mt-6">
                    <ul className="flex flex-col gap-y-12 text-center">
                      <li>
                        <Link href="/" className="text-xl font-bold  hover:text-yellow-600 hover:border-b-5 border-yellow-600  transition duration-300">
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link href="/About" className="text-xl font-bold  hover:text-yellow-600 hover:border-b-5 border-yellow-600  transition duration-300">
                          ABOUT
                        </Link>
                      </li>
                      <li>
                        <Link href="/Contact" className="text-xl font-bold  hover:text-yellow-600 hover:border-b-5 border-yellow-600  transition duration-300">
                          CONTACT
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