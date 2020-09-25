import { getOddNumbers } from './array-exercise-001';

describe('array tests', () => {
  it('test iteration 1', () => {
    // test
    const input = [-3, 2, 1, 4, -4];
    const output = getOddNumbers(input);

    // assert
    const expectedResult = [2, 4, -4];
    expect(output).toEqual(expectedResult);
  });

  it('test iteration 2', () => {
    // test
    const input = [0, 1, 2, 3, 2];
    const output = getOddNumbers(input);

    // assert
    const expectedResult = [0, 2, 2];
    expect(output).toEqual(expectedResult);
  });

  // feel free to create more test iterations for different use cases.
  // finding normal uses cases are easy, but there might be some edge cases ;).
});
