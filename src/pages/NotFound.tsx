
import React from 'react';
import { useLocation } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-brand-blue text-9xl font-bold mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for: {location.pathname}
        </p>
        <Link to="/">
          <Button className="bg-brand-blue hover:bg-brand-dark-blue inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
