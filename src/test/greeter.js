const greeter = require('../main/greeter.js');
 
describe('greeting', () => {
  it('is Hello World', () => {
    expect(greeter.greeting()).toEqual({"greeting":"Hello World"});
  });
});