"use client";

import { useState, useEffect, useRef } from "react";

export function useProgress() {
  const [state, setState] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  
  // Cross-device sync config
  const [syncId, setSyncId] = useState<string>("");
  const [isSyncing, setIsSyncing] = useState(false);
  const syncTimeout = useRef<NodeJS.Timeout | null>(null);

  // Initialize from LocalStorage or URL automatically
  useEffect(() => {
    // Check if there is a sync ID in URL (coming from iPhone/iPad share link)
    const urlParams = new URLSearchParams(window.location.search);
    const urlSyncId = urlParams.get("sync");
    
    let activeSyncId = "";

    try {
      if (urlSyncId) {
        // Automatically adopt URL sync ID if provided
        activeSyncId = urlSyncId;
        localStorage.setItem("gdrm3_sync_id", activeSyncId);
        
        // Remove 'sync' param from URL cleanly
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } else {
        // Fallback to local storage sync ID if exists
        const storedSyncId = localStorage.getItem("gdrm3_sync_id");
        if (storedSyncId) activeSyncId = storedSyncId;
      }
      
      setSyncId(activeSyncId);

      // Load base local state immediately for fast visual paint
      const s = localStorage.getItem("gdrm3");
      if (s) setState(JSON.parse(s));
    } catch (e) {
      console.error("Failed to load local state", e);
    }
    
    setMounted(true);
    
    // Now trigger Cloud Fetch if we have an active Sync ID
    if (activeSyncId) {
      loadFromCloud(activeSyncId);
    }
  }, []);

  const loadFromCloud = async (id: string) => {
    setIsSyncing(true);
    try {
      const res = await fetch(`/api/sync?id=${id}`);
      if (res.ok) {
        const data = await res.json();
        if (data.state && Object.keys(data.state).length > 0) {
          setState(data.state);
          localStorage.setItem("gdrm3", JSON.stringify(data.state));
        }
      }
    } catch(err) {
      console.error("Cloud fetch error:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  const pushToCloud = async (id: string, newState: Record<string, boolean>) => {
    if (!id) return;
    try {
      await fetch('/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, state: newState }),
      });
    } catch(err) {
      console.error("Cloud push failed:", err);
    }
  };

  const saveState = (newState: Record<string, boolean>) => {
    setState(newState);
    
    // Save locally
    try {
      localStorage.setItem("gdrm3", JSON.stringify(newState));
    } catch (e) {
      console.error("Failed to save state", e);
    }

    // Debounced push to cloud to avoid spamming database
    if (syncId) {
      if (syncTimeout.current) clearTimeout(syncTimeout.current);
      setIsSyncing(true);
      syncTimeout.current = setTimeout(() => {
        pushToCloud(syncId, newState).finally(() => setIsSyncing(false));
      }, 800);
    }
  };

  const enableSync = (newSyncId: string) => {
    setSyncId(newSyncId);
    localStorage.setItem("gdrm3_sync_id", newSyncId);
    // When linking a device, download the cloud initially
    loadFromCloud(newSyncId);
  };

  const toggleStoredState = (key: string) => {
    const newState = { ...state, [key]: !state[key] };
    saveState(newState);
  };

  const resetProgress = () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      saveState({});
    }
  };

  return { state, toggleStoredState, resetProgress, mounted, syncId, enableSync, isSyncing };
}
