"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="h-16 flex justify-between items-center px-4 sm:px-6 lg:px-15 xl:px-15 backdrop-blur-md ">
            {/* Logo */}
          <div className="flex items-center justify-center w-30 h-10 ">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={300}
              height={200}
              className="object-cover w-full h-full sm:max-w-md"
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
            <li className="hover:text-amber-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-amber-700">
              <Link href="/Services">Services</Link>
            </li>
            <li className="hover:text-amber-700">
              <Link href="#">Blogs</Link>
            </li>
            <li className="hover:text-amber-700">
              <Link href="/Aboutus">About Us</Link>
            </li>
            <li className="hover:text-amber-700">
              <Link href="/Contactus">Contact Us</Link>
            </li>
          </ul>
          {/* Contact Info (Desktop Only) */}
          <ul className="hidden lg:flex gap-4 text-sm text-gray-500">
            <p>
              <Phone className="inline mr-1" size={15} />
              (555) 123-4567
            </p>
            <p>
              <Mail className="inline mr-1" size={15} />
              hello@elegantspaces.com
            </p>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden  border-t border-gray-200  bg-gradient-to-br from-white/30 to-amber-700/30 backdrop-blur-sm p-6 rounded-lg text-gray-900 shadow-lg z-1">
            <ul className="flex flex-col px-4 py-3 gap-3 text-gray-700 text-base font-medium">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/Aboutus" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Contactus" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="border-t border-gray-100 px-4 py-2 text-sm text-gray-500">
              <p>
                <Phone />
                234578124
              </p>
              <p>
                <Mail />
                hello@thedecor.com
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
