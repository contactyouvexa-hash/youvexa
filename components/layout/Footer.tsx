import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#162B4D] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/primarylogo.png"
              alt="Youvexa Logo"
              width={160}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-300">
              Building powerful personal brands on LinkedIn
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  About Youvexa
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  Client Results
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#profile-optimization" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  Profile Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#brand-positioning" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  Brand Positioning
                </Link>
              </li>
              <li>
                <Link href="/services#content-strategy" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link href="/services#growth-systems" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm">
                  Growth Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm flex items-center">
                  <Mail size={16} className="mr-2" />
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/youvexa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#5FD0C5] transition-colors text-sm flex items-center">
                  <Linkedin size={16} className="mr-2" />
                  Follow on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Youvexa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#5FD0C5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#5FD0C5] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
