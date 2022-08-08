const MyMath = {
  sum(inputArray){
    if (!Array.isArray(inputArray)) {
      throw new TypeError('Input must be array');
    }
    let sum = 0;
    for (let i = 0; i < inputArray.length; ++i) {
      if (typeof inputArray[i] !== 'number') {
        throw new TypeError('Every element of array must be a number');
      }
      sum += inputArray[i];
    }
    return sum;
  },
  max(inputArray){
    if (!Array.isArray(inputArray)) {
      throw new TypeError('Input must be array');
    }
    if (inputArray.length === 0) {
      return 0;
    }
    if (typeof inputArray[0] !== 'number') {
      throw new TypeError('Each element in the array must be a number');
    }
    let max = inputArray[0];
    for (let i = 1; i < inputArray.length; ++i) {
      if (typeof inputArray[i] !== 'number') {
        throw new TypeError('Each element in the array must be a number');
      }
      if (inputArray[i] > max) {
        max = inputArray[i];
      }
    }
    return max;
  }
}

module.exports = MyMath;