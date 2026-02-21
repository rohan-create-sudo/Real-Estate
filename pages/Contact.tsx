
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-mesh">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-12 text-slate-900"
            >
              LET'S <br /> <span className="text-gradient">CONNECT.</span>
            </motion.h1>
            
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center flex-shrink-0 bg-white shadow-md">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-xl font-black text-slate-900">concierge@urbanagency.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center flex-shrink-0 bg-white shadow-md">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-xl font-black text-slate-900">+91 9875X66X89</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center flex-shrink-0 bg-white shadow-md">
                  <MapPin className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Headquarters</h4>
                  <p className="text-xl font-black text-slate-900">Sahadra, Delhi</p>
                </div>
              </motion.div>
            </div>

            {/* Visual Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-20 glass rounded-[2.5rem] overflow-hidden aspect-video border border-slate-100 shadow-xl"
            >
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-60" alt="Office Location" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full animate-ping opacity-75" />
                <div className="absolute w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-12 md:p-16 rounded-[3.5rem] border border-white bg-white shadow-2xl shadow-slate-200/50"
            >
              <h2 className="text-3xl font-black mb-10 text-slate-900">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-blue-600">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-lg font-bold text-slate-900"
                    />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-blue-600">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-lg font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-blue-600">Subject</label>
                  <select className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-lg font-bold text-slate-900">
                    <option className="bg-white">General Inquiry</option>
                    <option className="bg-white">Property Viewing</option>
                    <option className="bg-white">Sell Your Property</option>
                    <option className="bg-white">Partnership</option>
                  </select>
                </div>

                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-blue-600">Your Message</label>
                  <textarea 
                    required
                    rows={4} 
                    className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-lg font-bold text-slate-900 resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formState !== 'idle'}
                  className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-600 active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl"
                >
                  {formState === 'loading' ? (
                    <Loader2 className="animate-spin" />
                  ) : formState === 'success' ? (
                    "Message Sent Successfully"
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
