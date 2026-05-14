"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    " bg-white shadow-sm backdrop-blur-md";

  const textColor = isHome && !scrolled ? "text-gray-700" : "text-gray-700";

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navBg
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Zealth OS home"
          >
            {/* <div className="w-8 h-8 rounded-lg gradient-button flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className={cn("font-bold text-xl tracking-tight", logoColor)}>
              Zealth{" "}
              <span
                className={
                  isHome && !scrolled ? "text-purple-500" : "text-purple-500"
                }
              >
                OS
              </span>
            </span> */}

            <Image src="/assets/logo.png" alt="Zealth OS" width={138} height={32} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-500",
                  textColor,
                  pathname === link.href && "text-purple-500"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "font-medium text-sm",
                isHome && !scrolled
                  ? "text-gray-700 hover:text-gray-900 bg-foreground "
                  : "text-gray-700 hover:bg-black/5"
              )}
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className={cn(
                // buttonVariants({ size: "default" }),
                "bg-accent text-white  font-medium text-sm px-5 py-2 rounded-md   shadow-sm border-0"
              )}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("md:hidden", textColor)}
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg gradient-button flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="font-bold text-xl text-purple-700">
                    Zealth <span className="text-purple-500">OS</span>
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-gray-700 hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full justify-center"
                    )}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "w-full justify-center gradient-button text-white rounded-full border-0"
                    )}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
