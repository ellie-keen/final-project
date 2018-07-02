describe('Sound', function() {
  var audio = new AudioContext();
  var analyser = audio.createAnalyser();
  var waveType = 'sine';
  var sound;

  beforeEach(function() {
    sound = new Sound(audio, analyser, waveType);
  });

  describe('createWave', function() {
    it('should return an oscillator object', function() {
      expect(sound._createWave(2)).toEqual(jasmine.any(OscillatorNode));
    });

    it('should create a sine wave', function() {
      expect(sound._createWave(2).type).toEqual('sine');
    });
  });

  describe('createAmplifier', function() {
    it('should return an amplifier', function() {
      expect(sound._createAmplifier(0.2, 2)).toEqual(jasmine.any(GainNode));
    });
  });
});
