function Clock() {
  this.step = 0
}

Clock.prototype.interval = function(buttonGrid, clock) {
  setInterval(function() {
    clock.step === buttonGrid.cols - 1 ? clock.step = 0 : clock.step++;
  },1000)
}
