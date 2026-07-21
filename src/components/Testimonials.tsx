"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Luxury Residence",
    review:
      "Working with Sohel was effortless. Every detail reflected precision, creativity and thoughtful planning.",
  },
  {
    name: "Ayesha Khan",
    role: "Interior Design",
    review:
      "An exceptional experience from concept to completion. Professional, reliable and highly detail-oriented.",
  },
  {
    name: "Vikram Deshmukh",
    role: "Commercial Project",
    review:
      "Outstanding communication and technical expertise. The final outcome exceeded every expectation.",
  },
  {
    name: "Sneha Joshi",
    role: "Villa Renovation",
    review:
      "Every design decision felt intentional. The process was smooth and the execution was remarkable.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 md:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-[180px] md:h-[700px] md:w-[700px] md:blur-[220px]" />
      </div>

      {/* Huge Quote */}
      <h1 className="pointer-events-none absolute left-1/2 top-12 md:top-40 -translate-x-1/2 select-none font-serif leading-none text-white/[0.03] text-[160px] sm:text-[220px] md:text-[320px]">
        "
      </h1>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[11px] md:text-xs uppercase tracking-[0.45em] text-zinc-500"
        >
          CLIENT EXPERIENCES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
          className="mt-5 text-center text-4xl md:text-6xl font-extralight tracking-tight"
        >
          Trusted by Visionaries.
        </motion.h2>

        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="group col-span-1 md:col-span-7 rounded-[24px] md:rounded-[30px] border border-white/10 bg-white/[0.03] p-7 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,.08)]"
          >
            <div className="text-xl md:text-2xl text-white">
              ★★★★★
            </div>

            <p className="mt-6 md:mt-8 text-lg md:text-xl font-light leading-8 md:leading-9 text-zinc-200">
              "{testimonials[0].review}"
            </p>

            <div className="mt-8 md:mt-10 border-t border-white/10 pt-5 md:pt-6">
              <h3 className="text-base md:text-lg font-medium">
                {testimonials[0].name}
              </h3>

              <p className="mt-1 text-xs md:text-sm tracking-wide text-zinc-400">
                {testimonials[0].role}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .12 }}
            className="group col-span-1 md:col-span-5 rounded-[24px] md:rounded-[30px] border border-white/10 bg-white/[0.03] p-7 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,.08)]"
          >
            <div className="text-xl md:text-2xl text-white">
              ★★★★★
            </div>

            <p className="mt-6 md:mt-8 text-lg md:text-xl font-light leading-8 md:leading-9 text-zinc-200">
              "{testimonials[1].review}"
            </p>

            <div className="mt-8 md:mt-10 border-t border-white/10 pt-5 md:pt-6">
              <h3 className="text-base md:text-lg font-medium">
                {testimonials[1].name}
              </h3>

              <p className="mt-1 text-xs md:text-sm tracking-wide text-zinc-400">
                {testimonials[1].role}
              </p>
            </div>
          </motion.div>
                    {/* Card 3 */}
                    <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .24 }}
            className="group col-span-1 md:col-span-5 rounded-[24px] md:rounded-[30px] border border-white/10 bg-white/[0.03] p-7 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,.08)]"
          >
            <div className="text-xl md:text-2xl text-white">
              ★★★★★
            </div>

            <p className="mt-6 md:mt-8 text-lg md:text-xl font-light leading-8 md:leading-9 text-zinc-200">
              "{testimonials[2].review}"
            </p>

            <div className="mt-8 md:mt-10 border-t border-white/10 pt-5 md:pt-6">
              <h3 className="text-base md:text-lg font-medium">
                {testimonials[2].name}
              </h3>

              <p className="mt-1 text-xs md:text-sm tracking-wide text-zinc-400">
                {testimonials[2].role}
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .36 }}
            className="group col-span-1 md:col-span-7 rounded-[24px] md:rounded-[30px] border border-white/10 bg-white/[0.03] p-7 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,.08)]"
          >
            <div className="text-xl md:text-2xl text-white">
              ★★★★★
            </div>

            <p className="mt-6 md:mt-8 text-lg md:text-xl font-light leading-8 md:leading-9 text-zinc-200">
              "{testimonials[3].review}"
            </p>

            <div className="mt-8 md:mt-10 border-t border-white/10 pt-5 md:pt-6">
              <h3 className="text-base md:text-lg font-medium">
                {testimonials[3].name}
              </h3>

              <p className="mt-1 text-xs md:text-sm tracking-wide text-zinc-400">
                {testimonials[3].role}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}