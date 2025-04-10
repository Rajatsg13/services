
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success('Your message has been sent!', {
        description: 'We will get back to you as soon as possible.',
        duration: 5000,
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <main className="pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-300">
              Have a question or ready to discuss your project? 
              Get in touch with our team and let's start the conversation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-10 opacity-0 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We'd love to hear from you! Whether you're curious about our services, 
                  need technical assistance, or want to start a project, we're here to help.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-blue rounded-full p-3 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:info@techsolve.com" className="hover:text-brand-blue transition-colors">
                        info@techsolve.com
                      </a>
                    </p>
                    <p className="mt-1 text-gray-500">
                      We'll respond as soon as possible
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-blue rounded-full p-3 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+11234567890" className="hover:text-brand-blue transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </p>
                    <p className="mt-1 text-gray-500">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-blue rounded-full p-3 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Office</h3>
                    <p className="mt-1 text-gray-600">
                      123 Tech Street<br />
                      San Francisco, CA 94107
                    </p>
                    <p className="mt-1 text-gray-500">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-0 animate-fade-in animate-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-dark-blue text-white py-5 rounded-md"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-[400px] opacity-0 animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0966527976376!2d-122.40058968468511!3d37.78753697975539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd61367a23bd291!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1649687173771!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TechSolve Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
