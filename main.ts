// One-star review for make.fun's "One-Star Review of Something Essential".
// The grader runs this as `node /bot/main.ts`; it must write exactly one
// deadpan one-star review, a single line of 1 to 160 characters, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Monday: on time every week, empty-handed every time, and it still charges me a full day. One star.";

// The gate is 1 to 160 characters: fail loudly rather than hand the judge
// an entry it would refuse.
if (review.length < 1 || review.length > 160 || review.trim().length === 0) {
  throw new Error(`review is ${review.length} characters, outside the 1-160 gate`);
}
if (review.includes("\n")) {
  throw new Error("review must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");
