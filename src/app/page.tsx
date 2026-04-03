"use client";

import { useProgress } from "@/hooks/useProgress";
import { weeks, phases } from "@/data/curriculumData";
import { WeekSection } from "@/components/WeekSection";
import { Sidebar } from "@/components/Sidebar";
import { GlobalResources } from "@/components/GlobalResources";
import { useState } from "react";
import { RotateCcw, Cloud, CloudOff, RefreshCw, Link as LinkIcon } from "lucide-react";

export default function Home() {
  const { state, toggleStoredState, resetProgress, mounted, syncId, enableSync, isSyncing } = useProgress();
  const [activePhase, setActivePhase] = useState("all");
  const [showSyncMenu, setShowSyncMenu] = useState(false);
  const [syncInput, setSyncInput] = useState("");

  if (!mounted) return null; // Avoid hydration mismatch

  const p = phases.find((x) => x.id === activePhase) || phases[0];
  const filteredWeeks = activePhase === "all" ? weeks : weeks.filter((w) => w.phase === activePhase);

  // Global Progress
  let doneTasks = 0;
  let totalTasks = 0;
  weeks.forEach((w) => {
    w.tasks.forEach((_, i) => {
      totalTasks++;
      if (state[`w${w.num}t${i}`]) doneTasks++;
    });
  });
  const globalPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // Local Phase Progress
  let pdone = 0;
  let ptot = 0;
  filteredWeeks.forEach((w) => {
    w.tasks.forEach((_, i) => {
      ptot++;
      if (state[`w${w.num}t${i}`]) pdone++;
    });
  });
  const phasePct = ptot > 0 ? Math.round((pdone / ptot) * 100) : 0;

  const handleGenerateSync = () => {
    const randomId = Math.random().toString(36).substring(2, 9).toUpperCase();
    enableSync(randomId);
    setShowSyncMenu(false);
  };

  const handleLinkDevice = () => {
    if (syncInput.trim().length > 3) {
      enableSync(syncInput.trim().toUpperCase());
      setShowSyncMenu(false);
    }
  };

  const copySyncLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("sync", syncId);
    navigator.clipboard.writeText(url.toString());
    alert("Live Sync Link copied! Open this on your iPad or Phone.");
  };

  return (
    <div className="min-h-screen text-text-1">
      {/* Header */}
      <header className="border-b border-border-1 py-4 px-8 flex items-center justify-between gap-4 sticky top-0 bg-bg-base/95 backdrop-blur-[16px] z-50 flex-wrap shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] bg-gd-accent rounded-md flex items-center justify-center shrink-0 font-extrabold text-[14px] text-bg-base">
            GD
          </div>
          <div>
            <h1 className="text-[15px] font-bold text-text-1 leading-none">
              Game Designer Roadmap
            </h1>
            <p className="text-[10.5px] text-text-3 font-dm-mono mt-[2px]">
              April → November 2025 · 32 weeks · Zero to job-ready
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Cloud Sync Integration UI */}
          <div className="relative">
            <button 
              onClick={() => setShowSyncMenu(!showSyncMenu)}
              className={`flex items-center gap-1.5 border px-3 py-1 rounded-full text-[11px] font-dm-mono transition-colors ${
                syncId 
                  ? isSyncing ? "border-gd-blue/50 text-gd-blue bg-gd-blue/5" : "border-gd-accent/50 text-gd-accent bg-gd-accent/5" 
                  : "border-border-2 text-text-3 bg-bg-3 hover:border-gd-accent"
              }`}
            >
              {syncId ? (
                <>
                  {isSyncing ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Cloud className="w-3 h-3" />}
                  {syncId}
                </>
              ) : (
                <>
                  <CloudOff className="w-3 h-3" />
                  Offline
                </>
              )}
            </button>

            {showSyncMenu && (
              <div className="absolute top-full right-0 mt-2 w-[280px] bg-bg-2 border border-border-1 rounded-xl shadow-2xl p-4 flex flex-col gap-3 z-50">
                <h3 className="text-[12px] font-bold text-text-1">Cross-Platform Sync</h3>
                {syncId ? (
                  <>
                    <p className="text-[10px] text-text-3 font-dm-mono">Your unique sync ID is active. Any changes are automatically backed up to the cloud.</p>
                    <button onClick={copySyncLink} className="flex flex-center justify-center items-center gap-2 bg-gd-accent text-bg-base py-2 rounded-lg text-[12px] font-semibold hover:bg-[#a8e03a] transition-all">
                      <LinkIcon className="w-3.5 h-3.5" />
                      Copy iPad / iPhone Link
                    </button>
                    <button onClick={() => enableSync("")} className="text-gd-coral text-[10px] mt-1 underline hover:no-underline">
                      Unlink Device
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] text-text-3 font-dm-mono">Generate a sync link or enter an existing code to connect this device.</p>
                    <button onClick={handleGenerateSync} className="bg-bg-3 border border-border-2 text-text-1 py-1.5 rounded-lg text-[11px] hover:border-gd-accent transition-all">
                      Generate New Sync Code
                    </button>
                    <div className="flex items-center gap-2 mt-2">
                      <input 
                        type="text" 
                        value={syncInput}
                        onChange={(e) => setSyncInput(e.target.value.toUpperCase())}
                        placeholder="Enter Code" 
                        className="bg-bg-3 border border-border-1 rounded-md px-2 py-1.5 text-[11px] font-dm-mono flex-1 outline-none focus:border-gd-accent text-text-1" 
                      />
                      <button onClick={handleLinkDevice} className="bg-gd-accent text-bg-base px-3 py-1.5 rounded-md text-[11px] font-bold">
                        Link
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 bg-bg-3 border border-border-1 rounded-full px-3 py-1">
            <span className="text-[14px] font-bold text-text-1">{doneTasks}</span>
            <span className="text-[10px] font-dm-mono text-text-3">done</span>
          </div>
          <div className="flex items-center gap-1.5 bg-bg-3 border border-border-1 rounded-full px-3 py-1">
            <span className="text-[14px] font-bold text-text-1">{globalPct}%</span>
            <span className="text-[10px] font-dm-mono text-text-3">complete</span>
          </div>
          <button 
            onClick={resetProgress}
            className="flex items-center gap-1.5 bg-transparent border border-border-2 text-text-3 font-dm-mono text-[11px] px-3 py-1 rounded-md cursor-pointer transition-all hover:border-gd-coral hover:text-gd-coral"
          >
            <RotateCcw className="w-3 h-3" /> reset
          </button>
        </div>
      </header>

      {/* Global Progress Bar */}
      <div className="h-[2px] bg-bg-3 w-full">
        <div 
          className="h-full bg-gradient-to-r from-gd-accent to-gd-teal transition-all duration-700 ease-out"
          style={{ width: `${globalPct}%` }}
        />
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[232px_1fr] min-h-[calc(100vh-80px)]">
        <Sidebar activePhase={activePhase} setActivePhase={setActivePhase} />

        <main className="py-8 px-6 lg:px-10 max-w-[880px] w-full">
          {/* Phase Hero Header */}
          <div className="mb-8">
            <h2 className="text-[1.6rem] font-extrabold mb-1" style={{ color: p.dot }}>
              {p.title}
            </h2>
            <p className="text-[12.5px] text-text-3 font-dm-mono mb-3">
              {p.desc}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-[3px] bg-bg-4 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gd-accent transition-all duration-400"
                  style={{ width: `${phasePct}%` }}
                />
              </div>
              <span className="text-[11px] font-dm-mono text-text-3 whitespace-nowrap">
                {pdone} / {ptot} tasks
              </span>
            </div>
          </div>

          <GlobalResources />

          {/* Weeks List */}
          <div className="space-y-0">
            {filteredWeeks.map((week) => (
              <WeekSection
                key={week.num}
                week={week}
                state={state}
                onToggleTask={toggleStoredState}
                onToggleDay={toggleStoredState}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
