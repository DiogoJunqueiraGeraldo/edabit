const maximumScore = (tileHand) =>
  tileHand.reduce((acc, cur) => acc + cur["score"], 0);
