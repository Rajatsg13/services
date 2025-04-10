
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">TechSolve</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Delivering expert software solutions to power your business success.
            </p>
            <div className="flex mt-6 space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-light-blue uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/services#product-management" className="text-gray-300 hover:text-white">
                  Product Management
                </Link>
              </li>
              <li>
                <Link to="/services#business-analysis" className="text-gray-300 hover:text-white">
                  Business Analysis
                </Link>
              </li>
              <li>
                <Link to="/services#software-development" className="text-gray-300 hover:text-white">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#quality-assurance" className="text-gray-300 hover:text-white">
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-light-blue uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-light-blue uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:info@techsolve.com" className="text-gray-300 hover:text-white">
                  info@techsolve.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  123 Tech Street<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} TechSolve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
