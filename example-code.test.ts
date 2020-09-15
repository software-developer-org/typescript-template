import { helloWorld } from './example-code';

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
  })
})