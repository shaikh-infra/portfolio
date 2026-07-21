"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ScrollToContact({
  children,
  className = "",
}: Props) {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToContact}
      className={className}
    >
      {children}
    </button>
  );
}