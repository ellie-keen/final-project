var audio = new AudioContext();

function createSineWave(audio, duration) {
  var oscillator = audio.createOscillator();
  oscillator.type = "sine";
  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + duration);
  return oscillator
};

function createWave(audio, duration, wave) {
  var oscillator = audio.createOscillator();
  oscillator.type = wave;
  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + duration);
  return oscillator
};

function alternativeNote(audio, frequency, wave) {
  return function() {
    var duration = 1;
    var alternativeWave = createWave(audio, duration, wave);
    alternativeWave.frequency.value = frequency;
    chain([alternativeWave, createAmplifier(audio, 0.2, duration), audio.destination]);
  };
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

function play_sound(audio, frequency, wave) {
  alternativeNote(audio, frequency, wave)()
  alternativeNote(audio, frequency, wave)()
  alternativeNote(audio, frequency - 5, wave)()
  alternativeNote(audio, frequency - 3, wave)()
}

play_sound(audio, 440, "sawtooth")
