
import React from 'react';
import { Clipboard, LineChart, BarChart3, FileCheck, Code, Server, Smartphone, Database, Bug, Gauge, TerminalSquare, Webhook } from 'lucide-react';

const Services = () => {
  return (
    <main className="pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-300">
              Comprehensive software solutions tailored to your unique business challenges. 
              From strategy to implementation, we deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Management Section */}
      <section id="product-management" className="py-16 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
                <Clipboard className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Product Management</h2>
              <p className="text-lg text-gray-600">
                Our product management services guide your software from concept to market success, 
                ensuring alignment with business goals and user needs. We help you build the right product, at the right time, for the right audience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <LineChart className="h-6 w-6 text-brand-blue mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Product Strategy</h3>
                    <p className="mt-1 text-gray-600">Create a compelling vision and roadmap that aligns with your business objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-brand-blue mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Requirements Management</h3>
                    <p className="mt-1 text-gray-600">Comprehensive documentation and prioritization of product requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-brand-blue mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Backlog Management</h3>
                    <p className="mt-1 text-gray-600">Strategic prioritization and refinement of feature requests and enhancements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in animate-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Product Management" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Analysis Section */}
      <section id="business-analysis" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Business Analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6 opacity-0 animate-fade-in animate-delay-300">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-100 text-purple-600 mb-2">
                <LineChart className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Business Analysis</h2>
              <p className="text-lg text-gray-600">
                Our business analysis services bridge the gap between business needs and technology solutions, 
                ensuring your software addresses real problems and delivers tangible value.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-purple-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Requirements Gathering</h3>
                    <p className="mt-1 text-gray-600">Thorough elicitation and documentation of business and user requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Server className="h-6 w-6 text-purple-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Functional Specifications</h3>
                    <p className="mt-1 text-gray-600">Detailed documentation of system behaviors, interfaces, and functionality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-purple-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Gap Analysis</h3>
                    <p className="mt-1 text-gray-600">Identification of disparities between current and desired system capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Software Development Section */}
      <section id="software-development" className="py-16 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 text-green-600 mb-2">
                <Code className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Software Development</h2>
              <p className="text-lg text-gray-600">
                Our development team brings your vision to life with clean, efficient, and scalable code. 
                We leverage modern technologies and best practices to create solutions that perform reliably and adapt to changing needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Code className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Custom Development</h3>
                    <p className="mt-1 text-gray-600">Tailored software solutions designed to address your specific business challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Server className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Web Applications</h3>
                    <p className="mt-1 text-gray-600">Responsive, feature-rich web applications built with modern frameworks.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Mobile Apps</h3>
                    <p className="mt-1 text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Database className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Database Design</h3>
                    <p className="mt-1 text-gray-600">Optimized data structures and relationships for performance and scalability.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in animate-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80" 
                alt="Software Development" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Assurance Section */}
      <section id="quality-assurance" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Quality Assurance" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6 opacity-0 animate-fade-in animate-delay-300">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100 text-amber-600 mb-2">
                <Bug className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Quality Assurance</h2>
              <p className="text-lg text-gray-600">
                Our QA services ensure your software meets the highest standards of quality, reliability, and user experience. 
                We identify and eliminate issues before they impact your users, saving time and protecting your reputation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-amber-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Test Planning</h3>
                    <p className="mt-1 text-gray-600">Comprehensive strategies and test cases to validate all aspects of your software.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Bug className="h-6 w-6 text-amber-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Manual Testing</h3>
                    <p className="mt-1 text-gray-600">Thorough exploration and validation of software functionality by experienced QA engineers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <TerminalSquare className="h-6 w-6 text-amber-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Test Automation</h3>
                    <p className="mt-1 text-gray-600">Custom automation frameworks to increase test coverage and enable rapid regression testing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Gauge className="h-6 w-6 text-amber-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Performance Testing</h3>
                    <p className="mt-1 text-gray-600">Validation of system behavior under various load conditions to ensure optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Webhook className="h-6 w-6 text-amber-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Custom Test Harnesses</h3>
                    <p className="mt-1 text-gray-600">Specialized testing environments and tools designed for your specific application needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
