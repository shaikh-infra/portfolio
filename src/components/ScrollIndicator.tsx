import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="mt-14 flex items-center justify-center gap-4 text-gray-400">
      <span className="text-sm">Scroll down</span>

      <div className="w-40 h-px bg-white/20" />

      <Mouse
        size={22}
        className="text-white animate-slow-bounce"
        strokeWidth={1.7}
      />

      <div className="w-40 h-px bg-white/20" />

      <span className="text-sm">to see projects</span>
    </div>
  );
}