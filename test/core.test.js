import Core from '../core/core.js';

describe("A suite", function() {
  let instance;
  it("contains spec with an expectation", function() {
    instance = new Core();
    expect(true).toBe(true);
  });
});