import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, User } from 'lucide-react';

export function Navbar() {
  const Button = ({ children, onClick, className, variant, size, ...props }) => {
    const baseClass = 'inline-flex items-center justify-center font-medium focus:outline-none transition duration-150 ease-in-out';
    const variantClass = {
      default: 'bg-blue-500 text-white hover:bg-blue-600',
      outline: 'bg-transparent border border-[#FF7B7B] text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white',
      ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
    };
    const sizeClass = {
      default: 'px-4 py-2 text-base',
      small: 'px-2 py-1 text-sm',
      large: 'px-6 py-3 text-lg',
      icon: 'p-2',
    };

    const buttonClass = `${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`;

    return (
      <button onClick={onClick} className={buttonClass} {...props}>
        {children}
      </button>
    );
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
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
        <div className="flex items-center gap-4">
          <Button className="bg-[#FF7B7B] hover:bg-[#ff6262] px-4 py-2 rounded-md">
            Donate
          </Button>
          <Button variant="outline" className="border-[#FF7B7B] px-4 py-2 rounded-md text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white">
            Login/Register
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}