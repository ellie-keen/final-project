function Clock(sound, gridView) {
  this.sound = sound;
  this.gridView = gridView;
  this.step = 0;
  this.bpm = 120;
  this.intervalDuration = (60000 / this.bpm);
}

Clock.prototype.interval = function(buttonGrid) {
  var self = this;
  this.intervalID = setInterval(function() {
    for (var i = 0; i < buttonGrid.rows; i++) {
      var b = buttonGrid.buttons[i][self.step];
      b.color = b.isOn ? '#D22F2D' : '#3a5fe5';
      self.gridView.drawGrid(buttonGrid);
    }

    self.step === buttonGrid.cols - 1 ? (self.step = 0) : self.step++;
    for (var i = 0; i < buttonGrid.rows; i++) {
      var button = buttonGrid.buttons[i][self.step];
      self._play(buttonGrid.buttons[i][self.step]);
      button.color = 'green';
      self.gridView.drawGrid(buttonGrid);
    }
  }, this.intervalDuration);
};

Clock.prototype.clear = function() {
  clearInterval(this.intervalID);
};

Clock.prototype.incrementIntervalDuration = function() {
  if (this.bpm > 50) {
    this.bpm -= 5;
    this.intervalDuration = (60000 / this.bpm);
  }
};

Clock.prototype.decrementIntervalDuration = function() {
  if (this.bpm < 300) {
    this.bpm += 5;
    this.intervalDuration = (60000 / this.bpm);
  }
};

Clock.prototype._play = function(button) {
  button.isOn ? this.sound.playSound(button.row) : null;
};
