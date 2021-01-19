const possibleBonus = (a, b) => {
  let dif = b - a;
  return dif > 0 && dif <= 6;
};
