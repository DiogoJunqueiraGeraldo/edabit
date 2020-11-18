const bomb = (str) =>
  str
    .toLowerCase()
    .includes("bomb")
        ? 
        "Duck!!!" :
        "There is no bomb, relax.";
