import Hero from "@/sections/Hero";
import Dashboard from "@/sections/Dashboard";
import FeaturedProject from "@/sections/FeaturedProject";
import ProjectsGrid from "@/sections/ProjectsGrid";
import SkillsMatrix from "@/sections/SkillsMatrix";
import JourneyTimeline from "@/sections/JourneyTimeline";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Analytics from "@/sections/Analytics";
import Terminal from "@/components/Terminal";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
      <FeaturedProject />
      <ProjectsGrid />
      <SkillsMatrix />
      <JourneyTimeline />
      <Education />
      <Experience />
      <Analytics />
      <Terminal />
      <Contact />
    </>
  );
}
