import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDocumentArrowDown, HiXMark } from "react-icons/hi2";
import { useSettings } from "@/hooks/useSettings";
import { profile } from "@/data/profile";

export default function RecruiterMode() {
  const { settings, toggleRecruiterMode } = useSettings();

  return (
    <AnimatePresence>
      {settings.recruiterMode && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass fixed left-1/2 top-4 z-[60] flex w-[min(94vw,640px)] -translate-x-1/2 items-center justify-between gap-4 rounded-full px-5 py-2.5 md:top-20"
        >
          <p className="text-xs text-ink-muted sm:text-sm">
            Recruiter Mode — streamlined view: résumé, skills, projects, experience.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20"
            >
              <HiOutlineDocumentArrowDown className="h-3.5 w-3.5" />
              CV
            </a>
            <button onClick={toggleRecruiterMode} aria-label="Exit recruiter mode" className="text-ink-muted hover:text-ink">
              <HiXMark className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
