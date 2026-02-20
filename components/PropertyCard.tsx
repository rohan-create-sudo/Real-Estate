
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize, BedDouble, Bath } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onOpen: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onOpen }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      layout
      className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] glass aspect-[4/5] border-transparent hover:border-blue-500/30 transition-all duration-500 bg-white"
      onClick={() => onOpen(property)}
    >
      {/* Image with parallax-ish hover */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Top Tags */}
      <div className="absolute top-6 left-6 flex gap-2">
        {property.tags.slice(0, 1).map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/80 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-200 shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="flex items-center gap-1 text-blue-600 text-xs font-bold mb-1">
              <MapPin size={12} />
              {property.location}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{property.title}</h3>
            <p className="text-xl font-bold text-slate-600">{property.price}</p>
          </div>
        </div>

        {/* Hidden on default, shown on hover */}
        <motion.div className="flex items-center gap-6 pt-4 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
            <BedDouble size={16} className="text-blue-500" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
            <Bath size={16} className="text-blue-500" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
            <Maximize size={16} className="text-blue-500" />
            <span>{property.sqft}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
