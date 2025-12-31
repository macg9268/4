"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        : "animated-gradient"
    )}>
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <Button className="animated-button-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">{link.label}</Button>
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="mb-4 flex items-center space-x-2">
                  <Logo />
                </Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href}>
                    <SheetTrigger asChild>
                       <span className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium hover:bg-accent">{link.label}</span>
                    </SheetTrigger>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
