function Button(frequency) {
  this.color = 'blue';
  this.frequency = frequency;
  this.isOn = false;
}

Button.prototype.toggle = function() {
  this.isOn = !this.isOn;
  this.color = this.isOn ? 'red' : 'blue';
};
