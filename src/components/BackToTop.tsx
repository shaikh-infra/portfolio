"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`
        group

        fixed
        bottom-8
        right-8

        z-[999]

        flex
        items-center

        h-14

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }

        transition-all
        duration-500
      `}
    >
      <div
        className="overflow-hidden flex items-center rounded-full border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] w-14 group-hover:w-44 h-14 transition-all duration-500"
      >
        {/* Arrow */}

        <div
          className="min-w-[56px] flex items-center justify-center text-xl text-white transition-transform duration-300 group-hover:-translate-y-1"
        >
          ↑
        </div>

        {/* Text */}

        <span
         className="whitespace-nowrap pr-6 text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          Back to Top
        </span>
      </div>
    </button>
  );
}