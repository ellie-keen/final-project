buttonColorInactive = '#3a5fe5';
buttonColourActive = '#D22F2D';

function Button(frequency) {
  this.color = buttonColorInactive;
  this.frequency = frequency;
  this.isOn = false;
}

Button.prototype.toggle = function() {
  this.isOn = !this.isOn;
  this.color = this.isOn ? buttonColourActive : buttonColorInactive;
};
