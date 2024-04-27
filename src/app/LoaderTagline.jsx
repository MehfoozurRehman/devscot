const taglines = [
  "Get ready to be amazed",
  "We are almost there",
  "Hold on tight",
  "Just a moment",
  "We are preparing something big",
  "We are loading",
  "We are getting there",
  "We are almost done",
  "We are getting ready",
];

export function LoaderTagline() {
  return taglines[Math.floor(Math.random() * taglines.length)];
}
