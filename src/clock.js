function Clock(sound, gridView) {
  this.sound = sound;
  this.gridView = gridView;
  this.step = 0;
  this.isPaused = false;
  this.bpm = 120;
  this.intervalDuration = 60000 / this.bpm;
}

Clock.prototype.interval = function(buttonGrid) {
  const self = this;
  this.isPaused = false;
  this.intervalID = setInterval(function() {
    for (let i = 0; i < buttonGrid.rows; i++) {
      if (buttonGrid.buttonIsOn(i, self.step)) {
        buttonGrid.setButtonColor(i, self.step, '#D22F2D');
      } else if (!buttonGrid.buttonIsOn(i, self.step)) {
        buttonGrid.setButtonColor(i, self.step, '#3a5fe5');
      }
      self.gridView.drawGrid(buttonGrid);
    }

    self.step === buttonGrid.cols - 1 ? (self.step = 0) : self.step++;


    for (let row = 0; row < buttonGrid.rows; row++) {
      buttonGrid.buttonIsOn(row, self.step) ? self._play(row) : null;
      buttonGrid.setButtonColor(row, self.step, '#1a9988ff');
      self.gridView.drawGrid(buttonGrid);
    }
  }, this.intervalDuration);
};

Clock.prototype.clear = function() {
  this.isPaused = true;
  clearInterval(this.intervalID);
};

Clock.prototype.incrementIntervalDuration = function() {
  if (this.bpm > 50) {
    this.bpm -= 5;
    this.intervalDuration = 60000 / this.bpm;
  }
};

Clock.prototype.decrementIntervalDuration = function() {
  if (this.bpm < 300) {
    this.bpm += 5;
    this.intervalDuration = 60000 / this.bpm;
  }
};

Clock.prototype._play = function(row) {
  this.sound.playSound(row);
};
