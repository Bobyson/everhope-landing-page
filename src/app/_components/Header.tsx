"use client";

import Link from "next/link";
import Image from "next/image"; //
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { useState } from "react";
// import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all accordions when closing menu
    if (isMobileMenuOpen) {
      setOpenAccordions({});
    }
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/footer-logo.png"
              alt="Everhope Logo"
              width={180}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop nav menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Our Doctors */}
            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Our Doctors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Our Centers */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Centers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 w-[200px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link href="#">Sector 65 Gurgram Center</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Sector 12 Gurugram Center</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Cancer types */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Cancer Types</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 grid-cols-2 w-[350px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link href="#">Breast Cancer</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Cervical Cancer</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Head and Neck Cancer</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Prostrate Cancer</Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link href="#">Lung Cancer</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Colorectal Cancer</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Ovarian Cancer</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Ovarian Cancer</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px]">
                  <li className="">
                    <NavigationMenuLink asChild>
                      <Link href="#">Chemotherapy</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Immunotherapy</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Targeted Therapy</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Hormonal Therapy</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* About us */}
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Blogs */}
            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1.5"
            }`}
          />
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {/* Our Doctors */}
          <div>
            <Link
              href="/resources"
              className="block text-lg font-medium text-gray-900 hover:text-accent-foreground py-3 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Our Doctors
            </Link>
          </div>

          {/* Our Centers Accordion */}
          <div className="border-b border-gray-100">
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-3 hover:text-accent-foreground"
              onClick={() => toggleAccordion("centers")}
            >
              Our Centers
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openAccordions.centers ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordions.centers
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-3 space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Sector 65 Gurgram Center
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Sector 12 Gurugram Center
                </Link>
              </div>
            </div>
          </div>

          {/* Cancer Types Accordion */}
          <div className="border-b border-gray-100">
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-3 hover:text-accent-foreground"
              onClick={() => toggleAccordion("cancer-types")}
            >
              Cancer Types
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openAccordions["cancer-types"] ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordions["cancer-types"]
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-3 space-y-2 grid grid-cols-1 gap-1">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Breast Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Cervical Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Head and Neck Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Prostrate Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Lung Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Colorectal Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Ovarian Cancer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Bladder Cancer
                </Link>
              </div>
            </div>
          </div>

          {/* Services Accordion */}
          <div className="border-b border-gray-100">
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-3 hover:text-accent-foreground"
              onClick={() => toggleAccordion("services")}
            >
              Services
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openAccordions.services ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordions.services
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-3 space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Chemotherapy
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Immunotherapy
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Targeted Therapy
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-accent-foreground py-2"
                  onClick={toggleMobileMenu}
                >
                  Hormonal Therapy
                </Link>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div>
            <Link
              href="/about"
              className="block text-lg font-medium text-gray-900 hover:text-accent-foreground py-3 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
          </div>

          {/* Blogs */}
          <div>
            <Link
              href="/resources"
              className="block text-lg font-medium text-gray-900 hover:text-accent-foreground py-3"
              onClick={toggleMobileMenu}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
