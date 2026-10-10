import type { FocusEvent } from "react";

/**
 * Radix onOpenAutoFocus: start on the gallery's Next button so the arrow keys work at once.
 * Dialogs without a multi-photo gallery keep Radix's default (the Close button).
 */
export function focusGalleryOnOpen(event: Event) {
  const container = event.currentTarget as HTMLElement | null;
  const next = container?.querySelector<HTMLElement>("[data-gallery-next]");
  if (!next) return;
  event.preventDefault();
  next.focus();
}

/**
 * Radix moves focus with preventScroll (e.g. when Tab wraps from the last control to the first),
 * which can leave the focused control outside the dialog's visible area. Bring it into view.
 */
export function revealFocusedControl(event: FocusEvent<HTMLElement>) {
  const target = event.target;
  if (target === event.currentTarget || !(target instanceof HTMLElement)) return;
  target.scrollIntoView({ block: "nearest", inline: "nearest" });
}
