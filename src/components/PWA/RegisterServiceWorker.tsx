"use client";

import { useEffect } from "react";

export default function RegisterServiceWorker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const registerSW = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js");
        // Log registration and listen for updates
        console.log("Service worker registered:", reg);

        if (reg.installing) {
          console.log("Service worker installing");
        } else if (reg.waiting) {
          console.log("Service worker installed and waiting");
        } else if (reg.active) {
          console.log("Service worker active");
        }

        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          console.log("New service worker found:", newWorker);
        });
      } catch (err) {
        console.warn("Service worker registration failed:", err);
      }
    };

    registerSW();
  }, []);

  return null;
}
