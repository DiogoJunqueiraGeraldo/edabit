const PRECALCUALTEDSQUARERELATIVEPOSITIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const runtimeRangeTableCalculator = ({
  rowsLength,
  columnsLength,
  startValue,
  step,
}) => {
  let table = [];
  let value = startValue;
  for (let i = 0; i < rowsLength; i++) {
    let row = [];
    for (let j = 0; j < columnsLength; j++) {
      row.push(value);
      value += step;
    }
    table.push(row);
  }
  return table;
};

const getValuesBasedOnRelativePositions = ({
  preCalculatedRelativePositions,
  table,
  target,
}) =>
  preCalculatedRelativePositions.map(([up_down, left_right]) => {
    let value = 0;
    let i = target.i + up_down;
    let j = target.j + left_right;

    try {
      value = table[i][j];
    } catch (e) {
      console.log(`Cound not get position [${i}][${j}]`);
    }

    return value;
  });

const sumSurroundingValuesWithTargetValue = ({
  surroundingValues,
  targetValue,
}) =>
  surroundingValues.reduce((accum, curr) => {
    return accum + curr;
  }, targetValue);

const spotlightSum = (targetValue) => {
  const runtimeCalculatedTable = runtimeRangeTableCalculator({
    rowsLength: 10,
    columnsLength: 10,
    startValue: 1,
    step: 1,
  });

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (runtimeCalculatedTable[i][j] === targetValue) {
        const surroundingValues = getValuesBasedOnRelativePositions({
          preCalculatedRelativePositions: PRECALCUALTEDSQUARERELATIVEPOSITIONS,
          table: runtimeCalculatedTable,
          target: {
            i,
            j,
          },
        });

        return sumSurroundingValuesWithTargetValue({
          surroundingValues,
          targetValue,
        });
      }
    }
  }
};
