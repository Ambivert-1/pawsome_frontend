import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#004D40] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Main Content - 5 columns */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W1te0PeMdE4q4prsGYTqbgcfXu27Rg.png"
                alt="Pawsome Logo"
                width={80}
                height={80}
                className="rounded-full"
              /> */}
            </div>
            <h2 className="text-2xl font-semibold">Paws for a Cause: Make a Difference!</h2>
            <p className="text-gray-200 mb-4">
              Your support helps us give pets the love, care, and homes they deserve. Donate today to make a difference in their lives!
            </p>
            <button className="bg-[#FF7F76] hover:bg-[#FF6B61] text-white px-6 py-2 rounded-md transition-colors">
              Donate
            </button>
          </div>

          {/* First Navigation Column - Pet Services */}
          <div className="md:col-span-2">
            <ul className="space-y-2">
              <li>
                <Link to="/adopt" className="hover:text-gray-300">
                  Adopt a Pet
                </Link>
              </li>
              <li>
                <Link to="/list" className="hover:text-gray-300">
                  List a pet
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-gray-300">
                  Join our community
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Navigation Column - Resources */}
          <div className="md:col-span-2">
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="hover:text-gray-300">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/tips" className="hover:text-gray-300">
                  Helpful tips
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-gray-300">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Navigation Column - About */}
          <div className="md:col-span-3">
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-gray-300">
                  Our Sponsors
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-300">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          ©2025 Pawsome® Animal Adoption
        </div>
      </div>
    </footer>
  );
}