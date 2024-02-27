import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCources";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicTestimonials from "@/components/MusicTestimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructor from "@/components/Instructors";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
    <HeroSection/> 
    <FeaturedCourses/>
    <WhyChooseUs></WhyChooseUs>
    <MusicTestimonials></MusicTestimonials>
    <UpcomingWebinars></UpcomingWebinars>
    <Instructor></Instructor>

   </main>
  );
}
