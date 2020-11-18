const applyMask = (f, v) => {
  let arr = [...v];
  return f.replace(/x/g, () => arr.shift());
};

const formatPhoneNumber = (arr) =>
  applyMask("(xxx) xxx-xxxx", arr.join(''))
