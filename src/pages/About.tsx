
import React from 'react';
import { Award, Heart, Lightbulb, Users, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <main className="pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-300">
              We are passionate experts dedicated to transforming your software vision into reality. 
              Learn more about our mission, values, and the team behind TechSolve.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                TechSolve was founded with a simple mission: to help businesses achieve their goals through 
                exceptional software. What started as a solo consulting practice has grown into a 
                comprehensive software services company with expertise across the entire software development lifecycle.
              </p>
              <p className="text-lg text-gray-600">
                With deep experience in product management, business analysis, software development, and quality assurance, 
                we bring a holistic approach to every project. Our diverse background allows us to see challenges from 
                multiple perspectives and craft solutions that truly address the root of your business needs.
              </p>
              <p className="text-lg text-gray-600">
                Today, we partner with organizations of all sizes to deliver software that drives growth, 
                improves efficiency, and creates exceptional user experiences.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in animate-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and define how we interact with clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-fade-in">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering high-quality work that exceeds expectations in every aspect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-fade-in animate-delay-300">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                We genuinely care about our clients' success and bring enthusiasm to every project we undertake.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-fade-in animate-delay-600">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 text-green-600 mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new ideas and technologies to deliver forward-thinking solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-fade-in animate-delay-900">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With extensive experience across multiple disciplines, we bring comprehensive knowledge to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Award className="h-6 w-6 text-brand-blue mr-2" />
                Product Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Strategic roadmap development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Feature prioritization and backlog management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Product launch planning and execution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Market analysis and product strategy</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="h-6 w-6 text-brand-blue mr-2" />
                Business Analysis
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Requirements gathering and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Process analysis and improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">User story development and acceptance criteria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Gap analysis and solution recommendation</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-600">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Lightbulb className="h-6 w-6 text-brand-blue mr-2" />
                Software Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Custom web application development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Mobile app development (iOS and Android)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">API design and development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Database architecture and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-900">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Award className="h-6 w-6 text-brand-blue mr-2" />
                Quality Assurance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Comprehensive test planning and strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Manual and exploratory testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Test automation framework development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Performance and security testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Custom test harness design and implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
