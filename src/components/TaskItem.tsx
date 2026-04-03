import { TaskData } from "@/data/types";
import { Check } from "lucide-react";

interface TaskItemProps {
  task: TaskData;
  isDone: boolean;
  onToggle: () => void;
}

const tagMap: Record<string, string> = {
  theory: "Theory",
  practice: "Build",
  portfolio: "Portfolio",
  rest: "Rest",
};

const tagCls: Record<string, string> = {
  theory: "bg-[#4aa0f01a] text-gd-blue",
  practice: "bg-[#b8f04a14] text-gd-accent",
  portfolio: "bg-[#f0b0301a] text-gd-amber",
  rest: "bg-[#8b78f014] text-gd-purple",
};

export function TaskItem({ task, isDone, onToggle }: TaskItemProps) {
  return (
    <li className="flex items-start gap-2.5 py-2.5 border-b border-border-1 last:border-0">
      <div 
        className="cursor-pointer shrink-0 mt-0.5" 
        onClick={onToggle}
      >
        <div 
          className={`w-4 h-4 rounded-[4px] border-[1.5px] flex items-center justify-center transition-all duration-150 ${
            isDone 
              ? "bg-gd-accent border-gd-accent" 
              : "border-border-2 hover:border-border-3"
          }`}
        >
          {isDone && <Check strokeWidth={4} className="w-3 h-3 text-bg-base shadow-sm" />}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <span 
          className={`text-[13px] leading-relaxed block cursor-pointer transition-colors ${
            isDone ? "text-text-3 line-through" : "text-text-1 hover:text-text-2"
          }`}
          onClick={onToggle}
        >
          {task.text}
        </span>
        {task.res && task.res.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {task.res.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[10px] font-dm-mono px-2 py-0.5 rounded-full border transition-all duration-150 bg-bg-3 hover:bg-bg-4 hover:border-border-3 hover:text-text-1 no-underline ${
                  r.cls === "rfree" ? "border-gd-accent/30 text-gd-accent hover:bg-gd-accent/10" :
                  r.cls === "rpaid" ? "border-gd-amber/30 text-gd-amber hover:bg-gd-amber/10" :
                  r.cls === "ryt" ? "border-gd-coral/30 text-gd-coral hover:bg-gd-coral/10" :
                  r.cls === "rbook" ? "border-gd-purple/30 text-gd-purple hover:bg-gd-purple/10" :
                  "border-border-2 text-text-2"
                }`}
              >
                {r.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <span className={`text-[9.5px] font-dm-mono px-2 py-[2px] rounded-full shrink-0 mt-1 ${tagCls[task.tag] || ""}`}>
        {tagMap[task.tag] || task.tag}
      </span>
    </li>
  );
}
