import Image from "next/image";

const skills = [
  "Structural Design",
  "AutoCAD",
  "BIM",
  "Quantity Surveying",
  "Site Supervision",
  "Project Planning",
  "ETABS",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-6 pt-10 pb-24 md:px-12 lg:px-20 lg:pt-28 lg:pb-30"
    >
      {/* Background Text */}
      <h1 className="pointer-events-none absolute left-1/2 -top-8 md:-top-4 lg:top-4 -translate-x-1/2 select-none text-[80px] sm:text-[120px] md:text-[170px] lg:text-[230px] font-bold tracking-tight text-white/5">
        ABOUT
      </h1>

      {/* Main Content */}
      <div className="relative z-10 mx-auto mt-8 md:mt-12 lg:mt-16 grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

        {/* LEFT */}
        <div className="flex flex-col items-center">
          <Image
            src="/sohel.jpg"
            alt="Sohel Shaikh"
            width={430}
            height={540}
            priority
            className="w-[280px] sm:w-[340px] lg:w-[430px] rounded-3xl"
          />

          <div className="mt-6 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-wide text-white">
              Er. Sohel Sikandar Shaikh
            </h3>

            <div className="mx-auto mt-3 h-px w-28 bg-white/20"></div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="mb-5 text-center lg:text-left uppercase tracking-[6px] md:tracking-[8px] text-gray-400">
            About Me
          </p>

          <h2 className="mb-8 text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
            Future Civil Engineer.
            <br />
            Future Builder.
          </h2>

          <p className="mb-10 text-center lg:text-left text-base sm:text-lg leading-8 sm:leading-9 text-gray-400">
            I'm <span className="font-medium text-white">Sohel Shaikh</span>,
            a Civil Engineering student passionate about architecture,
            structural design, quantity surveying and project execution.
            My goal is to build modern infrastructure that lasts for
            generations while combining engineering precision with aesthetic
            design.
          </p>

          {/* Skills */}
          <div className="mb-12 flex flex-wrap justify-center lg:justify-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 sm:px-5 py-2 text-sm sm:text-base transition duration-300 hover:bg-white hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 border-y border-white/10 py-8 text-center lg:text-left">

            <div>
              <h3 className="text-3xl sm:text-5xl font-semibold">
                7+
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-500">
                Skills
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-5xl font-semibold">
                2026
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-500">
                Started Journey
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-5xl font-semibold">
                ∞
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-500">
                Dreams
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="mt-10 w-full sm:w-auto rounded-full border border-white px-8 py-4 transition duration-300 hover:bg-white hover:text-black">
              Download Resume
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}