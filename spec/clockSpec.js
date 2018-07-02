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

    it("should decrement intervalDuration by 100", function() {
      clock.decrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(400);
    });

    it("should not decrement below 100", function() {
      clock.intervalDuration = 200;
      clock.decrementIntervalDuration();
      clock.decrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(100);
    });

    it("should not increment above 5000", function() {
      clock.intervalDuration = 4900;
      clock.incrementIntervalDuration();
      clock.incrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(5000);
    });
  });
});
