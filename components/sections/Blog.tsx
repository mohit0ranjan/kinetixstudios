"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    title: "How local businesses in Punjab can grow online",
    category: "Local SEO",
    date: "March 22, 2026",
    readTime: "6 min read",
    href: "/blog/how-local-businesses-in-punjab-can-grow-online",
  },
  {
    title: "SEO tips for small businesses in India",
    category: "SEO",
    date: "March 22, 2026",
    readTime: "8 min read",
    href: "/blog/seo-tips-for-small-businesses-in-india",
  },
  {
    title: "Instagram marketing for local shops",
    category: "Social Media",
    date: "March 22, 2026",
    readTime: "6 min read",
    href: "/blog/instagram-marketing-for-local-shops",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#F4F5F7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6A00]" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Insights</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A]">Latest from the Blog</h3>
          </div>
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.93 }}
            className="hidden md:inline-flex items-center text-[#0A0A0A] hover:text-[#FF6A00] transition-colors font-bold border-b-2 border-black/20 hover:border-[#FF6A00] pb-1"
          >
            View All Articles <ArrowUpRight size={18} className="ml-1" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.href}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="relative h-52 w-full overflow-hidden bg-[#F4F5F7]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-200 font-black text-9xl group-hover:scale-110 group-hover:text-[#FF6A00]/10 transition-all duration-500">
                    {index + 1}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#FF6A00]/10 text-[#FF6A00] text-xs font-bold uppercase tracking-wider rounded-full">{blog.category}</span>
                    <span className="text-gray-400 text-xs font-semibold">{blog.readTime}</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0A0A0A] mb-4 group-hover:text-[#FF6A00] transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h4>

                  <div className="mt-auto flex items-center justify-between text-sm text-gray-400 border-t border-black/5 pt-4">
                    <span className="font-medium">{blog.date}</span>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#FF6A00] transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
