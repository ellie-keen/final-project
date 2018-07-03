function Clock(sound, gridView) {
  this.sound = sound;
  this.gridView = gridView;
  this.step = 0;
  this.intervalDuration = 500;
}

Clock.prototype.interval = function(buttonGrid) {
  console.log(this.intervalDuration);
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
  var incrementValue = 100;
  this.intervalDuration += incrementValue;
  if (this.intervalDuration > 5000) {
    this.intervalDuration = 5000;
  }
};

Clock.prototype.decrementIntervalDuration = function() {
  var decrementValue = 100;
  this.intervalDuration -= decrementValue;
  if (this.intervalDuration < 100) {
    this.intervalDuration = 100;
  }
};

Clock.prototype.getBPM = function() {
  return Math.round(60000 / this.intervalDuration);
};

Clock.prototype._play = function(button) {
  button.isOn ? this.sound.playSound(button.row) : null;
};
