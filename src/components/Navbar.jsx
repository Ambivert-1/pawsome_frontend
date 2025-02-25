import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button"; 
import { Menu, X, PawPrint, User, Heart, Search, Home } from "lucide-react";
import "./Navbar.css";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: "/about", label: "About", icon: <PawPrint /> },
    { path: "/services", label: "Services", icon: <PawPrint /> },
    { path: "/contact", label: "Contact", icon: <PawPrint /> },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all ${isScrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
            <div className="relative">
              <PawPrint className="h-10 w-10 text-[#FF7B7B] transform group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-2xl font-bold text-gray-800">PetAdopt</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {location.pathname !== "/donate" &&
            navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-[#FF7B7B] bg-pink-50"
                    : "text-gray-600 hover:text-[#FF7B7B] hover:bg-pink-50"
                }`}
              >
                <span className="transform group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/donate">
            <Button className="bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] hover:opacity-90 px-6 py-2.5 rounded-full text-white shadow-md transform hover:scale-105 transition-all duration-300">
              Donate
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-2 border-[#FF7B7B] px-6 py-2.5 rounded-full text-[#FF7B7B] hover:bg-gradient-to-r from-[#FF7B7B] to-[#ff6262] hover:text-white shadow-md transform hover:scale-105 transition-all duration-300">
              Login/Register
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" className="rounded-full p-2 hover:bg-pink-50" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-[#FF7B7B]" /> : <Menu className="h-6 w-6 text-[#FF7B7B]" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fadeIn">
          <nav className="container mx-auto flex flex-col gap-4 p-6">
            {location.pathname !== "/donate" &&
              navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
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
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
