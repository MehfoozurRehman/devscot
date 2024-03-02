export function addAnimation(text) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    if ((currentLine + " " + words[i]).split(" ").length <= 10) {
      currentLine += " " + words[i];
    } else {
      lines.push(currentLine);
      currentLine = words[i];
    }
  }
  lines.push(currentLine);

  return lines.map((line, index) => (
    <span
      key={index}
      data-aos="fade-right"
      data-aos-delay={index * 100}
      data-aos-duration={1000}
    >
      {line + " "}
    </span>
  ));

  return text;
}
