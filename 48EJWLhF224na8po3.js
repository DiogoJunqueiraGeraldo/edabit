const GENERATIONTABLE = {
  middle: 3,
  m: [
    "great grandfather",
    "grandfather",
    "father",
    "me!",
    "son",
    "grandson",
    "great grandson",
  ],
  f: [
    "great grandmother",
    "grandmother",
    "mother",
    "me!",
    "daughter",
    "granddaughter",
    "great granddaughter",
  ],
};

const generation = (generationLevel, gender) =>
  GENERATIONTABLE[gender][GENERATIONTABLE["middle"] + generationLevel];
