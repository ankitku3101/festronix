'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import HoverDropdown, { LinkMenu } from './HoverDropdown';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b transition duration-200 ease-in-out border-white/10 py-4 px-10 bg-black/50 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={'/gift_logo.png'} width={40} height={40} alt="GIFT Autonomous Logo" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-300/90 rounded-lg md:hidden hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto text-sm`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-[15px]">
            <li>
              <Link href={'/'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50" aria-current="page">Home</Link>
            </li>
            <li className="py-2 px-3 text-slate-300/90 hover:text-slate-50">
              <HoverDropdown title='Events'>
                <LinkMenu href='/events/tech'>Coding & Tech Innovation</LinkMenu>
                <LinkMenu href='/events/engineering'>Engineering & Design</LinkMenu>
                <LinkMenu href='/events/non-tech'>Business, Creativity & Knowledge</LinkMenu>
              </HoverDropdown>
            </li>
            <li>
              <Link href={'/#Sponsors'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Sponsors</Link>
            </li>
            <li>
            <Link href={'/events/contacts'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Contact</Link>

            </li>
            <li>
              <Link href={'/events/schedule'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Schedule</Link>
            </li>
            <li>
              <Link href={'/register'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
