// Shared photo-gallery logic for the product dialog and the portfolio lightbox.

/** Next index after moving `delta` steps, wrapping at both ends. */
export function stepIndex(current: number, delta: number, length: number): number {
  if (length <= 1) return 0;
  return (((current + delta) % length) + length) % length;
}

export const SWIPE_THRESHOLD = 40;

/** Classifies a pointer move as a horizontal swipe; vertical scrolling must not change photos. */
export function swipeDirection(deltaX: number, deltaY: number): "next" | "prev" | null {
  if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY) * 1.5) return null;
  return deltaX < 0 ? "next" : "prev";
}
