"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  image: string;
  href: string;
};

const featuredProjects: Project[] = [
  {
    title: "Modern Luxury Villa",
    category: "Residential Architecture",
    image: "/project1.png",
    href: "/projects/modern-luxury-villa",
  },
  {
    title: "Contemporary Duplex",
    category: "Luxury Residence",
    image: "/project3.png",
    href: "/projects/contemporary-duplex",
  },
  {
    title: "Minimal Modern Villa",
    category: "Contemporary Residence",
    image: "/project2.png",
    href: "/projects/minimal-modern-villa",
  },
];

const upcomingProjects: Project[] = [
  {
    title: "Luxury Bungalow",
    category: "UNDER PROCESS",
    image: "/project4.png",
    href: "#",
  },
  {
    title: "Modern Farmhouse",
    category: "COMING SOON",
    image: "/project2.png",
    href: "#",
  },
  {
    title: "Urban Residence",
    category: "COMING SOON",
    image: "/project3.png",
    href: "#",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const ProjectCard = ({
    project,
    delay = 0,
  }: {
    project: Project;
    delay?: number;
  }) => (
    <Link
      href={project.href}
      style={{ transitionDelay: `${delay}ms` }}
      className="group relative block overflow-hidden rounded-[30px] border border-white/10 transition-all duration-500 hover:border-white/25 aspect-[16/10] md:aspect-[4/5]"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-all duration-700 ease-out md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.04]"
      />

      {/* Desktop Only */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="hidden md:block absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

        <p className="uppercase tracking-[0.22em] text-xs text-white/70">
          {project.category}
        </p>

        <h3 className="mt-3 text-[38px] leading-none font-light">
          {project.title}
        </h3>

        <span className="mt-5 inline-block text-white/70">
          View Project →
        </span>

      </div>
    </Link>
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 md:px-8 py-0 scroll-mt-4"
    >
      {/* Heading */}
      <div className="mb-10 md:mb-16 text-center">

        <p className="uppercase tracking-[0.45em] text-xs md:text-sm text-white/40">
          Selected Works
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-light">
          Featured Projects
        </h2>

      </div>

      {/* Featured */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">

        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={index * 120}
          />
        ))}

      </div>

      {/* Expand */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          expanded
            ? "max-h-[1600px] opacity-100 mt-5 md:mt-8"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">

          {upcomingProjects.map((project, index) => (

            <div
              key={project.title}
              className={`transition-all duration-700 ${
                expanded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >

              <ProjectCard
                project={project}
                delay={index * 120}
              />

            </div>

          ))}

        </div>

      </div>

      {/* Desktop Button */}
      <div className="mt-14 hidden md:flex justify-center">

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="group relative overflow-hidden rounded-full border border-white/15 bg-white/[0.02] px-10 py-4 text-white/65 backdrop-blur-xl transition-all duration-500 hover:border-white/35 hover:bg-white/[0.05] hover:text-white hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <span className="relative flex items-center gap-3">

            <span className="text-[20px] font-light tracking-wide">
              {expanded ? "View Less Projects" : "View More Projects"}
            </span>

            <svg
              className={`h-5 w-5 transition-transform duration-500 ${
                expanded ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.7}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </span>

        </button>

      </div>
    </section>
  );
}