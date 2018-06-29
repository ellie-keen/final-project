function Clock() {
  this.step = 0;
}

Clock.prototype.interval = function(buttonGrid) {
  var self = this;
  setInterval(function() {
    self.step === buttonGrid.cols - 1 ? self.step = 0 : self.step++;
    for (i = 0; i < buttonGrid.rows; i++){
     playSound(buttonGrid.buttons[i][self.step]);
    }
  },1000)
}
