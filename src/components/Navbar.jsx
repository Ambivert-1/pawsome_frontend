import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, User, Menu, X } from 'lucide-react';
import Button from "../components/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <PawPrint className="h-8 w-8 text-[#FF7B7B]" />
            <span className="text-xl font-medium text-[#FF7B7B]">Pawsome</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About us
          </Link>
          <Link to="/find" className="text-gray-700 hover:text-gray-900">
            Find a Pet
          </Link>
          <Link to="/list" className="text-gray-700 hover:text-gray-900">
            List a Pet
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-[#FF7B7B] hover:bg-[#ff6262] px-4 py-2 rounded-md shadow-md">
            Donate
          </Button>
          <Button variant="outline" className="border-[#FF7B7B] px-4 py-2 rounded-md text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white shadow-md">
            Login/Register
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center gap-4 p-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About us
            </Link>
            <Link to="/find" className="text-gray-700 hover:text-gray-900">
              Find a Pet
            </Link>
            <Link to="/list" className="text-gray-700 hover:text-gray-900">
              List a Pet
            </Link>
            <Button className="bg-[#FF7B7B] hover:bg-[#ff6262] px-4 py-2 rounded-md shadow-md w-full">
              Donate
            </Button>
            <Button variant="outline" className="border-[#FF7B7B] px-4 py-2 rounded-md text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white shadow-md w-full">
              Login/Register
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}