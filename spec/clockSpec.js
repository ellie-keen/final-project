describe("Clock", function() {

  var clock;

  beforeEach(function() {
    clock = new Clock();
  })

  it("has a step", function() {
    expect(clock.step).toEqual(0)
  });  
});
