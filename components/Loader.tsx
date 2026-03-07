"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const START_PROGRESS = 12;
const MAX_PROGRESS_BEFORE_COMPLETE = 88;
const INCREMENT_INTERVAL_MS = 120;
const HIDE_DELAY_MS = 200;
const MIN_VISIBLE_MS = 300;

function shouldTrackLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href");
  if (!href) return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("mailto:")) return false;
  if (href.startsWith("tel:")) return false;
  if (href.startsWith("javascript:")) return false;
  if (anchor.target === "_blank") return false;

  try {
    const target = new URL(href, window.location.href);
    return target.origin === window.location.origin;
  } catch {
    return false;
  }
}

function isSamePathAndSearch(a: URL, b: URL) {
  return a.pathname === b.pathname && a.search === b.search;
}

function getUrlFromHistoryInput(input: string | URL | null | undefined) {
  if (!input) return null;
  try {
    return new URL(String(input), window.location.href);
  } catch {
    return null;
  }
}

export default function Loader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const mountedRef = useRef(false);
  const visibleRef = useRef(false);
  const progressTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);

  const clearTimers = () => {
    if (progressTimerRef.current !== null) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const setVisibleState = (next: boolean) => {
    visibleRef.current = next;
    setVisible(next);
  };

  const beginVisualStart = () => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    if (!visibleRef.current) {
      setVisibleState(true);
    }

    setProgress((current) =>
      current > START_PROGRESS ? current : START_PROGRESS
    );
  };

  const start = () => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }

    beginVisualStart();

    if (progressTimerRef.current !== null) return;

    progressTimerRef.current = window.setInterval(() => {
      setProgress((current) => {
        if (current >= MAX_PROGRESS_BEFORE_COMPLETE) return current;
        const remaining = MAX_PROGRESS_BEFORE_COMPLETE - current;
        const step = Math.max(1, Math.ceil(remaining * 0.15));
        return Math.min(MAX_PROGRESS_BEFORE_COMPLETE, current + step);
      });
    }, INCREMENT_INTERVAL_MS);
  };

  const finish = () => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
      beginVisualStart();
    }

    if (progressTimerRef.current !== null) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }

    const elapsed = Date.now() - startTimeRef.current;
    const waitMs = Math.max(0, MIN_VISIBLE_MS - elapsed);

    window.setTimeout(() => {
      setVisibleState(true);
      setProgress(100);

      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }

      hideTimerRef.current = window.setTimeout(() => {
        setVisibleState(false);
        setProgress(0);
        startTimeRef.current = 0;
      }, HIDE_DELAY_MS);
    }, waitMs);
  };

  useEffect(() => {
    const startForAnchorEvent = (
      event: MouseEvent | PointerEvent | KeyboardEvent
    ) => {
      if (event.defaultPrevented) return;
      if ("button" in event && event.button !== 0) return;
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      ) {
        return;
      }

      const clicked = event.target;
      if (!(clicked instanceof Element)) return;

      const anchor = clicked.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!shouldTrackLink(anchor)) return;

      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(anchor.href, window.location.href);
      if (isSamePathAndSearch(targetUrl, currentUrl)) return;

      start();
    };

    const onPointerDown = (event: PointerEvent) => startForAnchorEvent(event);
    const onClick = (event: MouseEvent) => startForAnchorEvent(event);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;
      startForAnchorEvent(event);
    };
    const onPopState = () => start();
    const onBeforeUnload = () => start();

    const originalPushState = window.history.pushState.bind(window.history);
    const originalReplaceState = window.history.replaceState.bind(window.history);

    window.history.pushState = ((...args: Parameters<History["pushState"]>) => {
      const nextUrl = getUrlFromHistoryInput(args[2]);
      const currentUrl = new URL(window.location.href);
      if (nextUrl && !isSamePathAndSearch(nextUrl, currentUrl)) {
        start();
      }
      return originalPushState(...args);
    }) as History["pushState"];

    window.history.replaceState = ((...args: Parameters<History["replaceState"]>) => {
      const nextUrl = getUrlFromHistoryInput(args[2]);
      const currentUrl = new URL(window.location.href);
      if (nextUrl && !isSamePathAndSearch(nextUrl, currentUrl)) {
        start();
      }
      return originalReplaceState(...args);
    }) as History["replaceState"];

    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("click", onClick, true);
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    finish();
  }, [pathname, searchKey]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[99999] h-[3px] bg-red transition-[width,opacity] duration-200 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        width: `${progress}%`,
      }}
    />
  );
}
