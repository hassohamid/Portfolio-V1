import Lenis from "@studio-freight/lenis";

export function SmoothScroll() {
  const lenis = new Lenis({
    anchors: true,
  } as any);

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
