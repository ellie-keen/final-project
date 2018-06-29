function Button(color, frequency) {
  this.color = color;
  this.frequency = frequency;
  this.isOn = false;
}

Button.prototype.toggle = function() {
  this.isOn = !this.isOn;
};
