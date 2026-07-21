import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialSection() {
  const iconStyle =
    "text-[26px] text-[#8f8f8f] hover:text-white transition-all duration-300 hover:scale-110";

  return (
    <section className="flex justify-center mt-10 md:mt-24">
      <div className="relative flex items-center gap-5 px-7 py-3 rounded-full bg-black border border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.18)] overflow-hidden">

        {/* Top metallic highlight */}
        <div className="absolute top-0 left-4 right-4 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        {/* Left reflection */}
        <div className="absolute left-0 top-1/2 h-12 w-3 -translate-y-1/2 bg-white/25 blur-lg" />

        {/* Right reflection */}
        <div className="absolute right-0 top-1/2 h-12 w-3 -translate-y-1/2 bg-white/25 blur-lg" />

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sohel-shaikh-5a9532325/"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaLinkedinIn />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/s.s.s.0607?igsh=YnptYmY0MDZnamJi"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaInstagram />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shaikh-infra"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaGithub />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919834350191?text=Hi%20Sohel,%20I%20visited%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaWhatsapp />
        </a>

      </div>
    </section>
  );
}