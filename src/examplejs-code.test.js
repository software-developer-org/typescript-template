const { helloWorld, add } = require('./examplejs-code');

describe('example-code functions', () => {
  beforeEach(() => {
    // override and mock
    console.log = jest.fn();
  });

  it('helloWorld() logs to console', () => {
    // the function to be tested
    helloWorld();

    // assert what is expected from function call
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('add(): 1 + 2 = 3', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });

  it('add(): undefined + 2 = NaN', () => {
    const result = add(undefined, 2);
    expect(result).toEqual(NaN);
  });

  it('add(): undefined + undefined = NaN', () => {
    const result = add(undefined, undefined);
    expect(result).toEqual(NaN);
  });
});
