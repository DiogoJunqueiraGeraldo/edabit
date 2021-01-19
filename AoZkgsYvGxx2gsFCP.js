const maxMin = (n) => {
  const str = String(n);
  const len = str.length;
  const res = [n, n];

  for (let i = 0; i < len; i++) {
    let anchor = Number(str[i]);
    for (let j = 0; j < len; j++) {
      let target = Number(str[j]);
      if (j !== i && anchor !== target) {
        let swa = str.substr(0, i) + target + str.substr(i + 1);
        let swt = swa.substr(0, j) + anchor + swa.substr(j + 1);
        let swn = Number(swt);

        if (String(swn).length !== len) break;

        ["max", "min"].forEach((value, index) => {
          res[index] = Math[value](res[index], swn);
        });
      }
    }
  }

  return res;
};

maxMin(98761);