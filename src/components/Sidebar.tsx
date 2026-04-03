import { Phase } from "@/data/types";
import { phases } from "@/data/curriculumData";

interface SidebarProps {
  activePhase: string;
  setActivePhase: (id: string) => void;
}

export function Sidebar({ activePhase, setActivePhase }: SidebarProps) {
  return (
    <aside className="border-r border-border-1 py-6 sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto bg-bg-2 custom-scrollbar hidden md:block">
      <div className="w-full">
        <div className="text-[9px] font-dm-mono text-text-3 tracking-[0.12em] px-5 mb-2 uppercase">
          Phases
        </div>
        <div>
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActivePhase(p.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex items-center gap-[9px] w-full text-left py-2 px-5 text-[12.5px] cursor-pointer transition-all duration-150 border-l-2 ${
                activePhase === p.id
                  ? "text-text-1 border-gd-accent bg-[#b8f04a0a] font-semibold"
                  : "text-text-2 border-transparent hover:text-text-1 hover:bg-white/5"
              }`}
            >
              <span
                className="w-[7px] h-[7px] rounded-full shrink-0"
                style={{ background: p.dot }}
              ></span>
              {p.label}
            </button>
          ))}
        </div>
        
        <div className="h-px bg-border-1 mx-5 my-3"></div>
        
        <div className="text-[9px] font-dm-mono text-text-3 tracking-[0.12em] px-5 mb-2 uppercase">
          Week types
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-blue"></div>Learn
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-accent"></div>Build
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-purple"></div>Break
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-amber"></div>Portfolio
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-teal"></div>Apply
        </div>

        <div className="h-px bg-border-1 mx-5 my-3"></div>
        
        <div className="text-[9px] font-dm-mono text-text-3 tracking-[0.12em] px-5 mb-2 uppercase">
          Resource tags
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-accent"></div>Free
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-coral"></div>YouTube
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-amber"></div>Paid course
        </div>
        <div className="flex items-center gap-2 py-1 px-5 text-[11px] text-text-3">
          <div className="w-2 h-2 rounded-[2px] shrink-0 bg-gd-purple"></div>Book
        </div>
      </div>
    </aside>
  );
}
