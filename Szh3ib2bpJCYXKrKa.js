const TRANSLATOR = {
  smile: ":D",
  grin: ":)",
  sad: ":(",
  mad: ":P",
};

const emotify = (frase) => {
  for (let word in TRANSLATOR) {
    frase = frase.replace(word, TRANSLATOR[word]);
  }
  return frase;
};
