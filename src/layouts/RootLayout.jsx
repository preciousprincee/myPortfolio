import { useLenis } from "@/hooks/useLenis";
import { useSettings } from "@/hooks/useSettings";
import Navbar from "@/components/Navbar";
import Dock from "@/components/Dock";
import ParticlesBackground from "@/components/ParticlesBackground";
import CursorGlow from "@/components/CursorGlow";
import AIAssistant from "@/components/AIAssistant";
import RecruiterMode from "@/components/RecruiterMode";

export default function RootLayout({ children }) {
  const { settings } = useSettings();
  useLenis(!settings.reducedAnimations);

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <CursorGlow />
      <RecruiterMode />
      <Navbar />
      <Dock />
      <main className="relative z-10">{children}</main>
      {!settings.recruiterMode && <AIAssistant />}
    </div>
  );
}
