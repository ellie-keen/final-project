function Clock() {
  this.step = 0;
}

Clock.prototype.interval = function(buttonGrid) {
  var self = this;
  var intervalDuration = 1000;
  setInterval(function() {
    self.step === buttonGrid.cols - 1 ? self.step = 0 : self.step++;
    for (i = 0; i < buttonGrid.rows; i++){
     self.playSound(buttonGrid.buttons[i][self.step]);
    }
  },intervalDuration)

}

Clock.prototype.playSound = function(button) {
  button.isOn ? play_sound(audio, button.frequency, "sine") : null;
}
