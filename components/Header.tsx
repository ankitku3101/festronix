"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for Hamburger & Close

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10" : "bg-transparent backdrop-blur-sm"
      } ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Hamburger Icon for sm & md screens */}
          <button
            className="block lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navbar Links Centered on lg+ screens */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-4 md:gap-6 text-white/75 text-sm md:text-base">
              <Link href="/#home" className="hover:text-white">
                Home
              </Link>
              <Link href="/#theme" className="hover:text-white">
                Events
              </Link>
              <Link href="/#schedule" className="hover:text-white">
                Timeline
              </Link>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
              <Link href="/#register" className="hover:text-white">
                Register
              </Link>
            </nav>
          </div>

          {/* Logo at the Extreme Right */}
          <div className="ml-auto flex-shrink-0">
            <Image src="/gift_logo.png" alt="Logo" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-30 flex justify-center items-center lg:hidden">
          <div className="absolute top-5 right-5">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-white text-lg">
            <Link href="/#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#theme" onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link href="/#schedule" onClick={() => setIsMenuOpen(false)}>
              Timeline
            </Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/#register" onClick={() => setIsMenuOpen(false)}>
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
