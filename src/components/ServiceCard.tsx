
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkTo: string;
  iconBgClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  linkTo, 
  iconBgClass = "bg-brand-blue" 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full opacity-0 animate-fade-in">
      <div className={`${iconBgClass} p-3 rounded-full w-12 h-12 flex items-center justify-center text-white mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link to={linkTo} className="group inline-flex items-center text-brand-blue font-medium hover:text-brand-dark-blue transition-colors mt-auto">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
