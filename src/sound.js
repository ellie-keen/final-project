function Sound(audio, analyser, waveType) {
  this.audio = audio;
  this.analyser = analyser;
  this.waveType = waveType;
}

Sound.prototype.playSound = function(frequency) {
  this._note(frequency);
  this._note(frequency);
  this._note(frequency - 5);
  this._note(frequency - 3);
};

Sound.prototype._note = function(frequency) {
  var duration = 2;
  var wave = this._createWave(duration);
  wave.frequency.value = frequency;
  this._chain([
    wave,
    this._createAmplifier(0.2, duration),
    this.analyser,
    this.audio.destination
  ]);
};

Sound.prototype._createWave = function(duration) {
  var oscillator = this.audio.createOscillator();
  oscillator.type = this.waveType;
  oscillator.start(this.audio.currentTime);
  oscillator.stop(this.audio.currentTime + duration);
  return oscillator;
};

Sound.prototype._createAmplifier = function(startValue, duration) {
  var amplifier = this.audio.createGain();
  this._rampDown(amplifier.gain, startValue, duration);
  return amplifier;
};

Sound.prototype._rampDown = function(value, startValue, duration) {
  value.setValueAtTime(startValue, this.audio.currentTime);
  value.exponentialRampToValueAtTime(0.01, this.audio.currentTime + duration);
};

Sound.prototype._chain = function(sounds) {
  for (var i = 0; i < sounds.length - 1; i++) {
    sounds[i].connect(sounds[i + 1]);
  }
};
