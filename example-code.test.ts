import { helloWorld } from './example-code';

describe('Testing my test function', () => {
  it('prints something', () => {
    console.log = jest.fn();
    helloWorld();
    expect(console.log).toHaveBeenCalled();
  });