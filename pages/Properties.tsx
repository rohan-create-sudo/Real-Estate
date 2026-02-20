
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Filter, Bed, Bath, Maximize2, MapPin } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { Property } from '../types';
import PropertyCard from '../components/PropertyCard';

const Properties: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const categories = ['All', 'Penthouse', 'Villa', 'Loft', 'Mansion'];

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-mesh">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900"
          >
            CURATED <br /> <span className="text-gradient">SPACES.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-black transition-all shadow-sm ${
                    filter === cat ? 'bg-slate-900 text-white' : 'glass text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search city or style..."
                className="w-full md:w-80 px-12 py-4 glass rounded-full focus:ring-2 ring-blue-500 outline-none text-slate-900 font-medium placeholder:text-slate-400 shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900">
                <Filter size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PropertyCard property={p} onOpen={(p) => setSelectedProperty(p)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-40">
            <h3 className="text-2xl font-bold text-slate-300">No properties found matching your criteria.</h3>
          </div>
        )}
      </div>

      {/* Property Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="w-full max-w-6xl glass rounded-[3rem] overflow-hidden max-h-[90vh] overflow-y-auto relative bg-white/95"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all z-10 shadow-lg text-slate-900"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[400px] lg:h-full">
                  <img src={selectedProperty.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-12 md:p-16">
                  <div className="flex items-center gap-2 text-blue-600 font-black text-sm mb-4">
                    <MapPin size={16} />
                    {selectedProperty.location}
                  </div>
                  <h2 className="text-5xl font-black mb-6 text-slate-900">{selectedProperty.title}</h2>
                  <p className="text-3xl font-black text-slate-600 mb-8">{selectedProperty.price}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2 border-slate-100 bg-slate-50">
                      <Bed size={24} className="text-blue-600" />
                      <span className="font-black text-slate-900">{selectedProperty.beds} Beds</span>
                    </div>
                    <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2 border-slate-100 bg-slate-50">
                      <Bath size={24} className="text-blue-600" />
                      <span className="font-black text-slate-900">{selectedProperty.baths} Baths</span>
                    </div>
                    <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2 border-slate-100 bg-slate-50">
                      <Maximize2 size={24} className="text-blue-600" />
                      <span className="font-black text-slate-900">{selectedProperty.sqft} Sqft</span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                    {selectedProperty.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 py-5 bg-slate-900 text-white rounded-full font-black text-lg shadow-xl hover:bg-blue-600 transition-colors">Schedule Viewing</button>
                    <button className="flex-1 py-5 glass border border-slate-200 rounded-full font-black text-lg text-slate-900 hover:bg-slate-100 transition-colors">Download Brochure</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Properties;
