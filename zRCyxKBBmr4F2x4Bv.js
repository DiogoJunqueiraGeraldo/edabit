const tetra = (n) => {
  let acc = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      acc += j;
    }
  }

  return acc;
};
