
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { PROPERTIES, STATS } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0.98]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Slider State
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderImages = PROPERTIES.slice(0, 4);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="relative w-full overflow-hidden bg-mesh">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2500" 
            className="w-full h-full object-cover brightness-[0.85]"
            alt="Cityscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#f8fafc]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full glass border border-white/40 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-8 shadow-sm">
              Redefining Modern Living
            </span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-900">
              THE <span className="text-gradient">URBAN</span> <br /> 
              PERSPECTIVE.
            </h1>
            <p className="max-w-xl mx-auto text-slate-600 text-lg md:text-xl font-semibold mb-10 leading-relaxed">
              Curating architectural masterpieces that transform the way you experience space, light, and city living.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 shadow-xl"
                onClick={() => window.location.hash = '/properties'}
              >
                Explore Properties
                <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 glass text-slate-900 font-bold rounded-full hover:bg-white transition-all shadow-md">
                <Play size={18} fill="#0f172a" />
                Watch Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </section>

      {/* 2. BRAND STATEMENT */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 text-slate-900">
              WE DON'T JUST SELL <br />
              <span className="text-blue-600 italic">REAL ESTATE</span>, WE <br />
              ARCHITECT EMOTION.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            Urban Agency represents the fusion of high-end aesthetics and functional innovation. We believe that your home is the canvas of your life, and our mission is to provide the finest tools for your self-expression.
            <div className="mt-8 flex gap-4">
              <div className="h-0.5 w-12 bg-blue-500 mt-4"></div>
              <p className="text-slate-900 italic font-bold">Marc J. Urban — Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. IMPACT NUMBERS */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-black mb-2 text-gradient">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED SHOWCASE */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-4 block">Selected Listings</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">FEATURED <br /> COLLECTIONS.</h2>
          </div>
          <button 
            className="px-8 py-4 glass border border-slate-200 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all shadow-sm"
            onClick={() => window.location.hash = '/properties'}
          >
            View All Properties
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.slice(0, 3).map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <PropertyCard property={property} onOpen={(p) => console.log(p)} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE PREVIEW */}
      <section className="py-32 container mx-auto px-6">
        <div className="glass rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[600px] bg-white/50 border-white">
          {/* Left: Slider */}
          <div className="relative group overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={sliderImages[activeSlide].image}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Controls */}
            <div className="absolute bottom-10 left-10 flex gap-4">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-lg">
                <ChevronLeft />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-lg">
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">Exclusive Opportunity</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
                {sliderImages[activeSlide].title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md font-medium">
                {sliderImages[activeSlide].description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="px-6 py-4 glass rounded-2xl border border-slate-100 bg-white/80">
                  <span className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Price</span>
                  <span className="text-xl font-black text-slate-900">{sliderImages[activeSlide].price}</span>
                </div>
                <div className="px-6 py-4 glass rounded-2xl border border-slate-100 bg-white/80">
                  <span className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Sq Ft</span>
                  <span className="text-xl font-black text-slate-900">{sliderImages[activeSlide].sqft}</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-slate-900 font-black group hover:text-blue-600 transition-colors">
                Deep Dive Into This Property
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WHY URBAN AGENCY */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900">THE ADVANTAGE.</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Propelling real estate into the next decade through technology and design thinking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ai Valuations', desc: 'Predictive analytics for tomorrow\'s property value today.' },
              { title: 'Virtual Immersion', desc: 'Step into your future home from anywhere on the planet.' },
              { title: 'Global Network', desc: 'A portfolio that spans the most iconic cities globally.' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                className="p-12 glass rounded-[2.5rem] border border-white bg-white shadow-xl shadow-slate-200/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 mb-8 flex items-center justify-center text-white">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900">{card.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. STRONG CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[4rem] bg-slate-900 py-32 px-12 text-center shadow-2xl"
          >
            {/* Animated Background Element */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500 rounded-full blur-3xl pointer-events-none"
            />
            
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 relative z-10">
              READY TO <br /> MOVE IN?
            </h2>
            <button 
              className="relative z-10 px-12 py-6 bg-white text-slate-900 text-xl font-black rounded-full shadow-2xl hover:scale-105 transition-transform active:scale-95"
              onClick={() => window.location.hash = '/contact'}
            >
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 container mx-auto px-6 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center font-bold text-white">U</div>
              <span className="font-bold text-2xl tracking-tighter uppercase text-slate-900">Urban Agency</span>
            </div>
            <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-medium">
              Leading the digital transformation of premium real estate through architectural excellence and modern service.
            </p>
          </div>
          <div>
            <h5 className="font-black mb-6 text-slate-900 uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li><a href="#/" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#/properties" className="hover:text-blue-600 transition-colors">Properties</a></li>
              <li><a href="#/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black mb-6 text-slate-900 uppercase tracking-widest text-xs">Social</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
          <p className="text-slate-400 text-sm font-semibold">© 2024 Urban Agency. All rights reserved.</p>
          <p className="text-slate-400 text-sm italic font-medium">Crafted for Excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
