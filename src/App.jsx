import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootSequence from "@/components/BootSequence";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import SettingsPage from "@/pages/SettingsPage";
import { SettingsProvider } from "@/hooks/useSettings";

export default function App() {
  const [booted, setBooted] = useState(false);
  const alreadyBooted = typeof window !== "undefined" && sessionStorage.getItem("devos:booted") === "1";

  function handleBootComplete() {
    setBooted(true);
    sessionStorage.setItem("devos:booted", "1");
  }

  // The browser's own "scroll to fragment" step only resolves once the
  // target section actually exists in the DOM — which happens after React
  // paints, i.e. after our early fix in main.jsx already ran. So the browser
  // can still win the race and jump to a stale hash like #terminal once that
  // section mounts. Re-assert the top-of-page position here, after paint,
  // to override whatever the browser tried to do on its own.
  useEffect(() => {
    if (window.location.pathname !== "/") return;

    function forceHome() {
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", "/#home" + window.location.search);
    }

    requestAnimationFrame(() => requestAnimationFrame(forceHome));
    const fallback = setTimeout(forceHome, 150);
    return () => clearTimeout(fallback);
  }, [booted, alreadyBooted]);

  return (
    <SettingsProvider>
      <BootSequence onComplete={handleBootComplete} skip={alreadyBooted} />
      <div style={{ visibility: booted || alreadyBooted ? "visible" : "hidden" }}>
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </RootLayout>
        </BrowserRouter>
      </div>
    </SettingsProvider>
  );
}
