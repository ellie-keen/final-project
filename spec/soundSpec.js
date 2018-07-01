describe('Sound', function() {
  var audio = new AudioContext();
  var analyser = audio.createAnalyser();
  var sound;

  beforeEach(function() {
    sound = new Sound(audio, analyser);
  });

  describe('createWave', function() {
    it('should return an oscillator object', function() {
      expect(sound.createWave(2, 'sine')).toEqual(jasmine.any(OscillatorNode));
    });

    it('should create a sine wave', function() {
      expect(sound.createWave(2, 'sine').type).toEqual('sine');
    });
  });

  describe('note', function() {
    it('should return a function', function() {
      expect(sound.note(2, 'sine')).toEqual(jasmine.any(Function));
    });
  });

  describe('createAmplifier', function() {
    it('should return an amplifier', function() {
      expect(sound.createAmplifier(0.2, 2)).toEqual(jasmine.any(GainNode));
    });
  });
});
