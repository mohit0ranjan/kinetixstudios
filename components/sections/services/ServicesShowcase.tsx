"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const showcases = [
  {
    id: 1,
    title: "High-Converting Websites",
    subtitle: "Turn browsers into customers",
    description:
      "We build websites that don't just look good—they convert. Every element is optimized for user behavior, from the first click to the checkout.",
    features: [
      "Mobile-first responsive design",
      "Lightning-fast load times (<2s)",
      "Advanced conversion optimization",
      "Built-in SEO foundation",
      "Analytics & tracking integration",
      "Ongoing maintenance included",
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Avg. Load Time", value: "<1.5s" },
      { label: "Mobile Traffic", value: "+200%" },
      { label: "Conversion Lift", value: "3-5×" },
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 2,
    title: "Paid Advertising Campaigns",
    subtitle: "Predictable, scalable lead generation",
    description:
      "We don't just run ads—we engineer systems that deliver predictable ROI. Real-time optimization, advanced audience targeting, and transparent reporting.",
    features: [
      "Google Ads & Meta Ads expertise",
      "Advanced audience segmentation",
      "A/B testing & optimization",
      "Conversion tracking & reporting",
      "Budget optimization algorithms",
      "Real-time performance dashboards",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Average ROAS", value: "4.5×" },
      { label: "Cost per Lead", value: "-45%" },
      { label: "Conversion Rate", value: "+120%" },
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Local SEO & Maps Ranking",
    subtitle: "Dominate local search in your market",
    description:
      "Stop being invisible locally. We put you at the top of Google Maps and local search results where high-intent customers are actively looking.",
    features: [
      "Google Maps optimization",
      "Local citation building",
      "Review management & generation",
      "Local content strategy",
      "Schema markup implementation",
      "Competition analysis & strategy",
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Maps Rankings", value: "Position #1" },
      { label: "Local Traffic", value: "+300%" },
      { label: "Reviews Generated", value: "+500" },
    ],
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-16 md:py-40 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-24"
        >
          <h2 className="text-[clamp(1.8rem,4.6vw,4rem)] font-black text-gray-900 tracking-tight leading-[1.1] mb-4 md:mb-6">
            Deep Dive Into Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
            Explore what makes each service effective and how we deliver results consistently.
          </p>
        </motion.div>

        {/* Service Showcases */}
        <div className="space-y-16 md:space-y-32">
          {showcases.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-cols-2" : ""
              }`}
            >
              {/* Content - alternating sides */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-[11px] md:text-xs font-bold mb-4 md:mb-6`}>
                    0{service.id}. {service.subtitle}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 md:mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium mb-5 md:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-start gap-3 ${i > 1 ? "hidden sm:flex" : ""}`}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg group"
                  >
                    Get Started
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative group">
                  {/* Glow */}
                  <div className={`absolute inset-0 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-br ${service.color} -z-10`} />

                  {/* Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Stats overlay */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8">
                    {service.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-xl p-2.5 sm:p-4 shadow-lg border border-gray-200 text-center"
                      >
                        <div className={`text-lg sm:text-2xl font-black bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold text-gray-600 leading-tight">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 md:p-16 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4">Ready to Dominate?</h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 md:mb-8 font-medium max-w-2xl mx-auto">
              Let&apos;s build your custom growth strategy. Book a free consultation with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl group"
            >
              Schedule a Call
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
