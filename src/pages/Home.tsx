
import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Clipboard, LineChart, Code, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Service Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment and beyond, we offer end-to-end software solutions 
              tailored to your unique business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Product Management"
              description="Strategic guidance for your product lifecycle with expert roadmapping, backlog management, and feature prioritization."
              icon={Clipboard}
              linkTo="/services#product-management"
              iconBgClass="bg-blue-600"
            />
            
            <ServiceCard
              title="Business Analysis"
              description="Translating your business needs into technical requirements with comprehensive analysis and documentation."
              icon={LineChart}
              linkTo="/services#business-analysis"
              iconBgClass="bg-purple-600"
            />
            
            <ServiceCard
              title="Software Development"
              description="Custom software solutions built with cutting-edge technologies to help your business innovate and grow."
              icon={Code}
              linkTo="/services#software-development"
              iconBgClass="bg-green-600"
            />
            
            <ServiceCard
              title="Quality Assurance"
              description="Comprehensive testing strategies and automation solutions to ensure your software performs flawlessly."
              icon={Bug}
              linkTo="/services#quality-assurance"
              iconBgClass="bg-amber-600"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-300">
            Partner with us to develop innovative software solutions that drive growth, 
            improve efficiency, and deliver exceptional user experiences.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue opacity-0 animate-fade-in animate-delay-600">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-300">
              Don't just take our word for it - hear from the businesses we've helped succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md opacity-0 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jane Doe</h4>
                  <p className="text-sm text-gray-500">CEO, Tech Startup</p>
                </div>
              </div>
              <p className="text-gray-600">
                "TechSolve transformed our business idea into a fully-functional platform in record time. Their expertise in product management and development was invaluable."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md opacity-0 animate-fade-in animate-delay-300">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Smith</h4>
                  <p className="text-sm text-gray-500">CTO, Enterprise Corp</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The QA automation framework developed by TechSolve has reduced our testing time by 70% while increasing coverage. A game-changer for our release process."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md opacity-0 animate-fade-in animate-delay-600">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  AJ
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Amanda Johnson</h4>
                  <p className="text-sm text-gray-500">Product Manager, Retail Solutions</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Their business analysis team uncovered insights we never considered. The resulting software has streamlined operations and increased our revenue by 25%."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
