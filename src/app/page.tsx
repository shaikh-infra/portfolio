import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import ScrollIndicator from "../components/ScrollIndicator";
import ScrollToProjects from "@/components/ScrollToProjects";
import BackToTop from "@/components/BackToTop";
import Projects from "../components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import About from "../components/About";
import SocialSection from "../components/SocialSection";
import HowIWork from "../components/HowIWork";
import Testimonials from "@/components/Testimonials";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[900px] bg-white/10 blur-[180px] rounded-full mt-32"></div>
      </div>

<Navbar />
<Hero />
<div className="hidden md:block">
  <FeaturedProject />
</div>
<About />
<Projects />
<HowIWork />
<Testimonials />
<Contact />
<BackToTop />

</main>

  );
}