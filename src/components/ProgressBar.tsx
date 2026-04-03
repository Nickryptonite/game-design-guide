"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Your Journey</h2>
          <p className="text-sm text-gray-400">Game Design 32-Week Curriculum</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {percentage}%
          </span>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Completed</p>
        </div>
      </div>
      <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden shadow-inner flex">
        <div 
          className={cn(
            "h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-slate-500 mt-3 text-right">
        {completed} of {total} day{total !== 1 ? 's' : ''} completed
      </p>
    </div>
  );
}
