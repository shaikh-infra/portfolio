"use client";

import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your vision, lifestyle, project goals and site conditions before any design begins.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Developing layouts, concepts and realistic visualizations with architectural elegance.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Transforming concepts into buildable solutions through structural planning and BIM workflow.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Providing complete documentation and execution support for a seamless construction process.",
  },
];

export default function HowIWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-20"
    >
      {/* Background Text */}

      <h1 className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none text-[90px] font-bold tracking-tight text-white/[0.04] sm:text-[140px] lg:text-[230px]">
        WORK
      </h1>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="uppercase tracking-[0.45em] text-sm text-white/40">
          HOW I WORK
        </p>

        <h2 className="mt-5 text-4xl font-extralight sm:text-5xl lg:text-6xl">
          From Vision to Reality
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
          Every project follows a thoughtful process that blends
          architectural creativity with engineering precision,
          ensuring timeless and functional spaces.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="relative z-10 mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-2">

        {process.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .65,
              delay: index * .12,
            }}
            className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.02] p-9 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(255,255,255,0.07)]"
          >
            {/* Huge Number */}

            <span className="absolute -right-4 -top-8 text-[120px] font-semibold leading-none text-white/[0.04] transition-all duration-500 group-hover:text-white/[0.08]">
              {item.number}
            </span>

            {/* Small Number */}

            <p className="uppercase tracking-[0.4em] text-xs text-white/35">
              Step {item.number}
            </p>

            {/* Title */}

            <h3 className="mt-6 inline-block text-3xl font-light">
              {item.title}

              <span className="mt-3 block h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </h3>

            {/* Description */}

            <p className="mt-7 max-w-md leading-8 text-white/55">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
            {/* Divider */}
            <div className="relative z-10 mx-auto mt-20 h-px max-w-7xl bg-white/10" />

{/* Bottom Section */}
<div className="relative z-10 mx-auto mt-16 grid max-w-7xl gap-16 md:grid-cols-2">

  {/* Services */}
  <div>
    <p className="uppercase tracking-[0.35em] text-sm text-white/40">
      Services
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      {[
        "Architecture",
        "Structural Design",
        "BIM",
        "3D Visualization",
        "Site Planning",
        "Quantity Surveying",
      ].map((service) => (
        <span
          key={service}
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
        >
          {service}
        </span>
      ))}

    </div>
  </div>

  {/* Software */}
  <div>
    <p className="uppercase tracking-[0.35em] text-sm text-white/40">
      Software
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      {[
        "AutoCAD",
        "Revit",
        "SketchUp",
        "Lumion",
        "Twinmotion",
        "ETABS",
        "STAAD Pro",
        "V-Ray",
      ].map((software) => (
        <span
          key={software}
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
        >
          {software}
        </span>
      ))}

    </div>
  </div>

</div>
    </section>
  );
}