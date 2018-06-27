var audio = new AudioContext();

function createSineWave(audio, duration) {
  var oscillator = audio.createOscillator();
  oscillator.type = "sine";
  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + duration);
  return oscillator
};

function note(audio, frequency) {
  return function() {
    var duration = 1;
    var sineWave = createSineWave(audio, duration);
    sineWave.frequency.value = frequency;
    chain([sineWave, createAmplifier(audio, 0.2, duration), audio.destination]);
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

function wavey(audio, frequency) {
  note(audio, frequency)()
  note(audio, frequency)()
  note(audio, frequency - 5)()
  note(audio, frequency - 3)()
}

wavey(audio, 440)
