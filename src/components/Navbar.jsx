import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PawPrint, User, Menu, X, Heart, Search, Home } from "lucide-react";
import Button from "../components/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    {
      path: "/findpet",
      label: "Find a Pet",
      icon: <Search className="w-4 h-4" />,
    },
    {
      path: "/listpet",
      label: "List a Pet",
      icon: <PawPrint className="w-4 h-4" />,
    },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <div className="relative">
              <PawPrint className="h-10 w-10 text-[#FF7B7B] transform group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF7B7B] to-[#40B3A2] bg-clip-text text-transparent">
              Pawsome
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on smaller screens */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group
                    ${
                      location.pathname === item.path
                        ? "text-[#FF7B7B] bg-pink-50"
                        : "text-gray-600 hover:text-[#FF7B7B] hover:bg-pink-50"
                    }`}
            >
              <span className="transform group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons - Hidden on smaller screens */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/donate">
            <Button className="bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] hover:opacity-90 px-6 py-2.5 rounded-full text-white shadow-md transform hover:scale-105 transition-all duration-300">
              Donate
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="outline"
              className="border-2 border-[#FF7B7B] px-6 py-2.5 rounded-full text-[#FF7B7B] hover:bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] hover:text-white shadow-md transform hover:scale-105 transition-all duration-300"
            >
              Login/Register
            </Button>
          </Link>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full p-2 hover:bg-pink-50"
            >
              <User className="h-5 w-5 text-[#FF7B7B]" />
              <span className="sr-only">User menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button - Visible on smaller screens */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-2 hover:bg-pink-50"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#FF7B7B]" />
            ) : (
              <Menu className="h-6 w-6 text-[#FF7B7B]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fadeIn">
          <nav className="container mx-auto flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
${
  location.pathname === item.path
    ? "bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] text-white"
    : "text-gray-600 hover:bg-pink-50"
}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/donate">
                <Button className="bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] hover:opacity-90 px-6 py-3 rounded-xl text-white shadow-md w-full">
                  Donate
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-2 border-[#FF7B7B] px-6 py-3 rounded-xl text-[#FF7B7B] hover:bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] hover:text-white shadow-md w-full"
                >
                  Login/Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
