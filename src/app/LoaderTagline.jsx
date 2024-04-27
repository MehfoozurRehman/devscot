const taglines = [
  "Experience innovation in progress.",
  "Precision in motion, excellence in delivery.",
  "Crafting the future, one line of code at a time.",
  "Elevating expectations, one loading bar at a time.",
  "Empowering possibilities, seamlessly loading.",
  "Transforming your vision into reality, loading.",
  "Innovation in motion, loading for perfection.",
  "Unleashing potential, loading for success.",
  "Your journey to excellence begins, loading.",
  "Efficiency in motion, excellence in the making.",
];

export function LoaderTagline() {
  return taglines[Math.floor(Math.random() * taglines.length)];
}
