
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">TechSolve</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">Contact</Link>
          </div>
          
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button variant="default" className="bg-brand-blue hover:bg-brand-dark-blue transition-colors">
                Get in Touch
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-4 px-3">
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button 
                variant="default" 
                className="w-full bg-brand-blue hover:bg-brand-dark-blue transition-colors"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
