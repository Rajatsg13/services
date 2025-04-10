
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-light-blue/10 to-brand-blue/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Expert Software Services to <span className="text-brand-blue">Power Your Success</span>
            </h1>
            <p className="text-xl text-gray-600">
              TechSolve delivers comprehensive software solutions that transform your business 
              ideas into reality with precision, innovation, and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button className="bg-brand-blue hover:bg-brand-dark-blue text-white px-8 py-6 rounded-md font-medium text-lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-6 rounded-md font-medium text-lg">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block opacity-0 animate-fade-in animate-delay-300">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-light-blue opacity-30 blur-xl"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Software development team" 
                className="rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
