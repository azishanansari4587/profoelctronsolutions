
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import Link from 'next/link';


const ServiceCard = ({ title, description, icon: Icon, color, iconColor, slug }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className={cn("p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4", color)}>
        <Icon className={cn("w-8 h-8", iconColor)} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-4">
        <Link href={`/services/${slug}`} className="text-tech-blue font-semibold flex items-center hover:text-tech-lightBlue transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;