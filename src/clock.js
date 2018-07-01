function Clock(sound) {
  this.step = 0;
  this.sound = sound;
}

Clock.prototype.interval = function(buttonGrid) {
  var self = this;
  var intervalDuration = 500;
  setInterval(function() {
    self.step === buttonGrid.cols - 1 ? (self.step = 0) : self.step++;
    for (i = 0; i < buttonGrid.rows; i++) {
      self._play(buttonGrid.buttons[i][self.step]);
    }
  }, intervalDuration);
};

Clock.prototype._play = function(button) {
  button.isOn ? this.sound.playSound(button.frequency, 'sine') : null;
};
