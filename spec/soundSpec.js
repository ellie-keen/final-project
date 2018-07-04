describe('Sound', function() {
  let audio = new AudioContext();
  let analyser = audio.createAnalyser();
  let sound;

  beforeEach(function() {
    sound = new Sound(audio, analyser);
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

  describe('changeWaveType', function() {
    it('should be sine as default', function() {
      expect(sound.waveType).toEqual('sine');
    });

    it('should change to sawtooth after one change', function() {
      sound.changeWaveType();
      expect(sound.waveType).toEqual('sawtooth');
    });

    it('should change to square after one change', function() {
      sound.changeWaveType();
      sound.changeWaveType();
      expect(sound.waveType).toEqual('square');
    })

    it('should change to triangle after one change', function() {
      sound.changeWaveType();
      sound.changeWaveType();
      sound.changeWaveType();
      expect(sound.waveType).toEqual('triangle');
    })
  });
});
