try {
    var audio = new AudioContext();
} catch(e) {
    throw new Error('The Web Audio API is unavailable');
}

var analyser = audio.createAnalyser()

function createWave(audio, duration, waveType) {
  var oscillator = audio.createOscillator();
  oscillator.type = waveType;
  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + duration);
  return oscillator
};

function note(audio, frequency, waveType) {
  return function() {
    var duration = 2;
    var wave = createWave(audio, duration, waveType);
    wave.frequency.value = frequency;
    chain([wave, createAmplifier(audio, 0.2, duration), analyser, audio.destination]);
  };
};

function rampDown(audio, value, startValue, duration) {
  value.setValueAtTime(startValue, audio.currentTime);
  value.exponentialRampToValueAtTime(0.01, audio.currentTime + duration);
};

function createAmplifier(audio, startValue, duration) {
  var amplifier = audio.createGain();
  rampDown(audio, amplifier.gain, startValue, duration);
  return amplifier;
};

function chain(sounds) {
  for(var i = 0; i < sounds.length - 1; i++) {
    sounds[i].connect(sounds[i +1]);
  }
};

function playSound(audio, frequency, waveType) {
  note(audio, frequency, waveType)()
  note(audio, frequency, waveType)()
  note(audio, frequency - 5, waveType)()
  note(audio, frequency - 3, waveType)()
}
