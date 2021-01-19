const triangle = (n) => {
  let acc = 0;
  let aux = 1;

  for (let i = 0; i < n; i++) {
    acc += aux;
    aux++;
  }

  return acc;
};
