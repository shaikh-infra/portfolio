import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="relative flex items-center justify-center min-h-screen py-10 pb-0 md:py-24 md:pb-2"
    >
      <div
        className="
          group
          relative
          w-full
          md:w-[96%]
          overflow-hidden
          rounded-2xl
          md:rounded-[32px]
          cursor-pointer
        "
      >
        {/* Project Image */}
        <Image
          src="/modern-villa.jpg"
          alt="Modern Luxury Villa"
          width={1800}
          height={1000}
          priority
          className="
            h-[55vh]
            sm:h-[65vh]
            md:h-[85vh]
            w-full
            object-cover

            grayscale
            scale-105

            transition-all
            duration-700
            ease-out

            group-hover:grayscale-0
            group-hover:scale-100
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/35
            transition-all
            duration-700
            group-hover:bg-black/15
          "
        />

        {/* Text */}
        <div
          className="
            absolute
            left-6
            bottom-6

            md:left-12
            md:bottom-12

            opacity-100
            md:opacity-0

            translate-y-0
            md:translate-y-8

            transition-all
            duration-700

            md:group-hover:opacity-100
            md:group-hover:translate-y-0
          "
        >
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-xs md:text-sm text-gray-300">
            Featured Project
          </p>

          <h2 className="mt-2 md:mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight">
            Modern Luxury Villa
          </h2>

          <p className="mt-3 md:mt-4 max-w-xs sm:max-w-md md:max-w-xl text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Contemporary residential architecture designed with elegant
            proportions, clean geometry and luxurious detailing.
          </p>

          <button
            className="
              mt-6
              md:mt-8

              rounded-full
              border
              border-white/30

              bg-white/5

              px-6
              md:px-8

              py-3

              text-sm
              md:text-base

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-white
              hover:text-black
            "
          >
            View Project
          </button>
        </div>
      </div>
    </section>
  );
}