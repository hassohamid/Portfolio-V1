import Lenis from "@studio-freight/lenis";

export function SmoothScroll() {
  const lenis = new Lenis({
    syncTouch: true,
    anchors: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
