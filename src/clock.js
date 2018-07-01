function Clock(sound, gridView) {
  this.step = 0;
  this.sound = sound;
  this.gridView = gridView;
}

Clock.prototype.interval = function(buttonGrid) {
  var self = this;
  var intervalDuration = 500;
  setInterval(function() {
    for (var i = 0; i < buttonGrid.rows; i++) {
      var b = buttonGrid.buttons[i][self.step];
      b.color = b.isOn ? 'red' : 'blue';
      self.gridView.drawGrid();
    }

    self.step === buttonGrid.cols - 1 ? (self.step = 0) : self.step++;
    for (var i = 0; i < buttonGrid.rows; i++) {
      var button = buttonGrid.buttons[i][self.step];
      self._play(buttonGrid.buttons[i][self.step]);
      button.color = 'green';
      self.gridView.drawGrid();
    }
  }, intervalDuration);
};

Clock.prototype._play = function(button) {
  button.isOn ? this.sound.playSound(button.frequency, 'sine') : null;
};
