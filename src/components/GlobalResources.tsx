import { globalBookmarks } from "@/data/bookmarks";

export function GlobalResources() {
  return (
    <div className="bg-gradient-to-br from-[rgba(184,240,74,0.05)] to-[rgba(45,212,160,0.03)] border border-[rgba(184,240,74,0.15)] rounded-xl p-5 mb-7">
      <h3 className="text-[13px] font-bold text-gd-accent mb-2.5">
        Always-open bookmarks — keep these tabs open every day
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {globalBookmarks.map((bm, i) => (
          <a
            key={i}
            href={bm.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-3 border border-border-1 rounded-lg px-3 py-2 no-underline text-text-1 transition-all duration-150 hover:border-border-2 hover:bg-bg-4 hover:-translate-y-[1px]"
          >
            <div className="text-[12px] font-semibold text-text-1 mb-0.5">
              {bm.title}
            </div>
            <div className="text-[10px] text-text-3 font-dm-mono">
              {bm.sub}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
