"use client";

import { useState } from "react";
import { WeekData } from "@/data/types";
import { TaskItem } from "./TaskItem";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface WeekSectionProps {
  week: WeekData;
  state: Record<string, boolean>;
  onToggleTask: (key: string) => void;
  onToggleDay: (key: string) => void;
}

const badgeMap: Record<string, string> = {
  learn: "bg-[#4aa0f01e] text-gd-blue border-[#4aa0f033]",
  build: "bg-[#b8f04a1a] text-gd-accent border-[#b8f04a33]",
  break: "bg-[#8b78f01a] text-gd-purple border-[#8b78f033]",
  apply: "bg-[#2dd4a01a] text-gd-teal border-[#2dd4a033]",
  portfolio: "bg-[#f0b0301a] text-gd-amber border-[#f0b03033]",
};

const dayIcons: Record<string, string> = {
  theory: "◇",
  practice: "◆",
  portfolio: "★",
  rest: "—",
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function WeekSection({ week, state, onToggleTask, onToggleDay }: WeekSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const completedTasks = week.tasks.filter((_, i) => state[`w${week.num}t${i}`]).length;
  const isDone = completedTasks === week.tasks.length && week.tasks.length > 0;

  return (
    <div 
      className={clsx(
        "border rounded-xl mb-2 overflow-hidden bg-bg-2 transition-colors duration-200",
        isDone ? "border-gd-accent/20" : "border-border-1 hover:border-border-2"
      )}
    >
      <div 
        className="flex items-center justify-between px-[18px] py-[13px] cursor-pointer gap-3 transition-colors duration-150 hover:bg-white/5 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-[11px] flex-1 min-w-0">
          <span className="font-dm-mono text-[10px] text-text-3 min-w-[32px] shrink-0">
            W{week.num}
          </span>
          <span className={clsx(
            "text-[9.5px] font-dm-mono px-[10px] py-[3px] rounded-full font-medium tracking-[0.04em] shrink-0 border",
            badgeMap[week.type] || badgeMap.learn
          )}>
            {week.type.toUpperCase()}
          </span>
          <div className="min-w-0">
            <div className="text-[13.5px] font-semibold text-text-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {week.title}
            </div>
            <div className="text-[10.5px] text-text-3 font-dm-mono">
              {week.dates}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] font-dm-mono text-text-3">
            {completedTasks}/{week.tasks.length}
          </span>
          <ChevronDown 
            className={clsx(
              "text-text-3 w-4 h-4 transition-transform duration-200", 
              isOpen ? "rotate-180" : ""
            )} 
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="border-t border-border-1 animate-in slide-in-from-top-2 fade-in duration-200 ease-out">
          <div className="p-4 px-[18px]">
            <div className="text-[12px] text-text-3 italic mb-4 py-[7px] px-3 border-l-2 border-border-2 bg-white/5 rounded-r-md">
              {week.focus}
            </div>
            
            <div className="text-[9px] font-dm-mono text-text-3 tracking-[0.1em] uppercase mb-2">
              Daily schedule — click any day to mark it done
            </div>
            
            <div className="grid grid-cols-7 gap-1 lg:gap-[5px] mb-[18px]">
              {week.days.map((d, i) => {
                const k = `w${week.num}d${i}`;
                const isDayDone = state[k];
                const isRest = d.t === "rest";
                
                return (
                  <div 
                    key={i} 
                    onClick={() => onToggleDay(k)}
                    className={clsx(
                      "border rounded-lg p-1 py-[7px] text-center cursor-pointer min-h-[64px] flex flex-col items-center gap-[3px] transition-all duration-150",
                      isDayDone 
                        ? "bg-gd-accent/10 border-gd-accent/30 hover:-translate-y-px"
                        : isRest && !isDayDone
                          ? "bg-gd-purple/5 border-border-1 hover:-translate-y-px hover:border-border-2"
                          : "bg-bg-3 border-border-1 hover:-translate-y-px hover:border-border-2"
                    )}
                  >
                    <span className="text-[9px] font-dm-mono text-text-3">{DAYS[i]}</span>
                    <span className="text-[12px] leading-none my-0.5 min-h-[14px]">
                      {isDayDone ? "✓" : dayIcons[d.t] || ""}
                    </span>
                    <span className="text-[8.5px] text-text-3 leading-[1.3]">
                      {d.l}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="text-[9px] font-dm-mono text-text-3 tracking-[0.1em] uppercase mb-2 mt-4">
              Tasks + resources — click task or checkbox to complete
            </div>
            <ul className="list-none">
              {week.tasks.map((task, i) => (
                <TaskItem 
                  key={i}
                  task={task}
                  isDone={!!state[`w${week.num}t${i}`]}
                  onToggle={() => onToggleTask(`w${week.num}t${i}`)}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
