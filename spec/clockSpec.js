describe("Clock", function() {

  var clock;

  beforeEach(function() {
    clock = new Clock();
  })

  it("has a step of 0 as default", function() {
    expect(clock.step).toEqual(0);
  });

  it("has an intervalDuration of 500 as default", function() {
    expect(clock.intervalDuration).toEqual(500);
  });

  describe("incrementIntervalDuration", function() {

    it("should increment intervalDuration by 100", function() {
      clock.incrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(600);
    });

  });
});
