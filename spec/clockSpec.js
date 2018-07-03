describe('Clock', function() {
  var clock;

  beforeEach(function() {
    clock = new Clock();
  });

  it('has a step of 0 as default', function() {
    expect(clock.step).toEqual(0);
  });

  it('has an intervalDuration of 500 as default', function() {
    expect(clock.intervalDuration).toEqual(500);
  });

  describe('incrementIntervalDuration', function() {
    it('should increment intervalDuration by 100', function() {
      clock.incrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(600);
    });

    it('should decrement intervalDuration by 100', function() {
      clock.decrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(400);
    });

    it('should not decrement below 100', function() {
      clock.intervalDuration = 200;
      clock.decrementIntervalDuration();
      clock.decrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(100);
    });

    it('should not increment above 5000', function() {
      clock.intervalDuration = 4900;
      clock.incrementIntervalDuration();
      clock.incrementIntervalDuration();
      expect(clock.intervalDuration).toEqual(5000);
    });
  });

  describe('getBPM', function() {
    it('should return 120 when interval duration is 500', function() {
      clock.intervalDuration = 500;
      expect(clock.getBPM()).toEqual(120);
    });

    it('should return 86 when interval duration is 700', function() {
      clock.intervalDuration = 700;
      expect(clock.getBPM()).toEqual(86);
    });
  });

  describe('pauseClock', function() {
    it('should pause the clock', function () {
      clock.pauseClock()
      expect(clock.isPaused).toBe(true);
    });
  });

  describe('startClock', function() {
    it('should start the clock', function() {
      clock.startClock()
      expect(clock.isPaused).toBe(false)
    });
  });
});
