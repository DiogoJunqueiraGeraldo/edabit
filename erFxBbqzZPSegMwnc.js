const changeEnough = (change, amountDue) => {
  const pocketWeight = [0.25, 0.1, 0.05, 0.01];
  const changeCalculator = (acc, curr, i) => acc + curr * pocketWeight[i];
  const amount = change.reduce(changeCalculator, 0);
  return amount >= amountDue;
};
