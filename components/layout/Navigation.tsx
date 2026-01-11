'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E6EEF3] shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/primarylogo.png"
              alt="Youvexa Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2F2F2F] hover:text-[#2BB3A6] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="ml-4">
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden text-[#162B4D]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#E6EEF3]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#2F2F2F] hover:text-[#2BB3A6] transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
