import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readStorage, writeStorage } from "@/utils/storage";

const defaultSettings = {
  particles: true,
  reducedAnimations: false,
  cursorGlow: true,
  accentColor: "#22D3EE",
  recruiterMode: false,
};

const SettingsContext = createContext(null);

const STORAGE_KEY = "devos:settings";

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => readStorage(STORAGE_KEY, defaultSettings));

  useEffect(() => {
    writeStorage(STORAGE_KEY, settings);
    document.documentElement.style.setProperty("--accent-color", settings.accentColor);
    document.documentElement.classList.toggle("reduce-motion", settings.reducedAnimations);
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,
      update: (patch) => setSettings((s) => ({ ...s, ...patch })),
      toggleRecruiterMode: () => setSettings((s) => ({ ...s, recruiterMode: !s.recruiterMode })),
    }),
    [settings]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
