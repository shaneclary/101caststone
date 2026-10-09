import { test } from "node:test";
import assert from "node:assert/strict";
import { stepIndex, swipeDirection } from "./gallery.ts";

test("stepIndex wraps in both directions and is a no-op for a single photo", () => {
  assert.equal(stepIndex(0, 1, 6), 1);
  assert.equal(stepIndex(5, 1, 6), 0);
  assert.equal(stepIndex(0, -1, 6), 5);
  assert.equal(stepIndex(0, 1, 1), 0);
  assert.equal(stepIndex(0, -1, 1), 0);
  assert.equal(stepIndex(0, 1, 0), 0);
});

test("swipeDirection needs a mostly horizontal move past the threshold", () => {
  assert.equal(swipeDirection(-80, 5), "next");
  assert.equal(swipeDirection(80, -5), "prev");
  assert.equal(swipeDirection(-30, 0), null, "too short");
  assert.equal(swipeDirection(-80, 70), null, "mostly vertical scroll");
  assert.equal(swipeDirection(0, 0), null);
});
