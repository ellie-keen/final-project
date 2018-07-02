buttonColorInactive = '#3a5fe5';
buttonColourActive = '#D22F2D';

function Button(row) {
  this.color = buttonColorInactive;
  this.row = row;
  this.isOn = false;
}

Button.prototype.toggle = function() {
  this.isOn = !this.isOn;
  this.color = this.isOn ? buttonColourActive : buttonColorInactive;
};
