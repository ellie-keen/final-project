describe('Clock', function() {
  var clock;

  beforeEach(function() {
    clock = new Clock();
  });

  it('has a step of 0 as default', function() {
    expect(clock.step).toEqual(0);
  });

  it('has an intervalDuration of 500 and a bpm of 120 as default', function() {
    expect(clock.intervalDuration).toEqual(500);
    expect(clock.bpm).toEqual(120);
  });

  describe('incrementIntervalDuration', function() {
    it('should decrement bpm by 5', function() {
      clock.incrementIntervalDuration();
      expect(clock.bpm).toEqual(115);
      expect(clock.intervalDuration).toEqual(521.7391304347826);
    });

    it('should increment bpm by 5', function() {
      clock.decrementIntervalDuration();
      expect(clock.bpm).toEqual(125);
      expect(clock.intervalDuration).toEqual(480);
    });

    it('should not decrement below 50 bpm', function() {
      clock.bpm = 55;
      clock.incrementIntervalDuration();
      clock.incrementIntervalDuration();
      expect(clock.bpm).toEqual(50);
    });
    
    it('should not increment above 300 BPM', function() {
      clock.bpm = 295;
      clock.decrementIntervalDuration();
      clock.decrementIntervalDuration();
      expect(clock.bpm).toEqual(300);
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
