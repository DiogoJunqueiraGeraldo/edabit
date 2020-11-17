const sumOfCubes = (nums) =>
  nums.reduce((accum, curr) => accum + Math.pow(curr, 3), 0);
