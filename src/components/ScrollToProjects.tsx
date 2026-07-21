"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ScrollToProjects({
  children,
  className = "",
}: Props) {
    const scrollToProjects = () => {
        console.log("Clicked!");
      
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

  return (
    <button
      type="button"
      onClick={scrollToProjects}
      className={className}
    >
      {children}
    </button>
  );
}