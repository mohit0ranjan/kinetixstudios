"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Website Development",
    description: "Lightning-fast, immersive experiences optimized for maximum conversions.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Local SEO Dominance",
    description: "Rule the local search maps and ensure your brand is discovered instantly.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Paid Advertising",
    description: "Highly targeted Meta and Google campaigns driving real, measurable ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Brand Identity",
    description: "Bold, unmissable aesthetic systems that build absolute market trust.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface-dark font-sans relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-brand" />
              <span className="text-sm font-bold tracking-widest text-brand uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-400 font-medium text-lg">
              We provide end-to-end digital solutions that scale your business. Choose a dedicated service or get the full kinetic stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <button className="bg-white/10 hover:bg-brand text-white border border-white/20 hover:border-brand px-8 py-4 rounded-full font-bold transition-all duration-300 w-full md:w-auto min-h-11">
              View All Services
            </button>
          </motion.div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden ${index === 0 || index === 3 ? 'md:h-[450px]' : 'md:h-[350px]'} h-[260px] sm:h-[300px] cursor-pointer`}
            >
              {/* Image bg */}
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blend-multiply" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden group-hover:mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-brand">
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
