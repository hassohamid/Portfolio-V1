import Lenis from "@studio-freight/lenis";

export function SmoothScroll() {
  const isMac = /Mac/i.test(navigator.userAgent);

  if (isMac) return;

  const lenis = new Lenis({
    anchors: true,
    syncTouch: false,
  } as any);

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
