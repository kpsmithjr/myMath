const assert = require('assert');
const MyMath = require('../src/myMath.js');

describe('MyMath', () => {
  describe('.sum', () => {
    it('returns the sum of array elements', () => {
      // Setup
      const expectedResults = 6;
      const inputArray = [1, 2, 3];
      // Exercise
      const result = MyMath.sum(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });

    it('returns the sum of array elements', () => {
      // Setup
      const expectedResults = 38;
      const inputArray = [7, 5, 14, 12];
      // Exercise
      const result = MyMath.sum(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });

    it('returns the sum of array elements', () => {
      // Setup
      const expectedResults = 7;
      const inputArray = [7];
      // Exercise
      const result = MyMath.sum(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });
    it('returns the sum of array elements', () => {
      // Setup
      const expectedResults = 0;
      const inputArray = [];
      // Exercise
      const result = MyMath.sum(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });
    it('throws TypeError in input is not an array', () => {
      const inputArray = 123;
      assert.throws(
        () => {
          MyMath.sum(inputArray)
        }, TypeError
      )
    });

    it('throws TypeError in input array has a non-number element', () => {
      const inputArray = [1,4,'45', 4];
      assert.throws(
        () => {
          MyMath.sum(inputArray)
        }, TypeError
      )
    })
  });
  describe('.max', () => {
    it('returns the max element of array elements', () => {
      // Setup
      const expectedResults = 3;
      const inputArray = [1, 2, 3];
      // Exercise
      const result = MyMath.max(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });

    it('returns the max element of array elements', () => {
      // Setup
      const expectedResults = 784;
      const inputArray = [21, 784, -99];
      // Exercise
      const result = MyMath.max(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });

    it('returns the max element of array elements', () => {
      // Setup
      const expectedResults = 0;
      const inputArray = [];
      // Exercise
      const result = MyMath.max(inputArray);
      // Verify
      assert.strictEqual(result, expectedResults);
    });

    it('throws TypeError in input is not an array', () => {
      const inputArray = 123;
      assert.throws(
        () => {
          MyMath.max(inputArray)
        }, TypeError
      )
    });

    it('throws TypeError in input is not an array', () => {
      const inputArray = ['Test', 12, 55];
      assert.throws(
        () => {
          MyMath.max(inputArray)
        }, TypeError
      )
    });

    it('throws TypeError in input is not an array', () => {
      const inputArray = [66, 'Test', 12, 55];
      assert.throws(
        () => {
          MyMath.max(inputArray)
        }, TypeError
      )
    });
  });
});