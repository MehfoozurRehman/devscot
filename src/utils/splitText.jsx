export default (text) => {
  return text.split("").map((word, index) => {
    if (index % 2 !== 0) {
      return <span>{word}</span>;
    }
    return word;
  });
};
