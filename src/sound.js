function Sound(audio, analyser, key) {
  this.audio = audio;
  this.analyser = analyser;
  this.key = key;
  this.waveTypes = ['sine', 'sawtooth', 'square', 'triangle'];
  this.counter = 0;
  this.waveType = this.waveTypes[this.counter];
}

Sound.prototype.playSound = function(row) {
  this._note(this.key.value[row]);
};

Sound.prototype.changeWaveType = function() {
  this.counter === this.waveTypes.length - 1 ? this.counter = 0 : this.counter++;
  this.waveType = this.waveTypes[this.counter];
}

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
