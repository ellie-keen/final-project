function Button(row) {
  this.color = buttonColorInactive;
  this.row = row;
  this.buttonColorInactive = '#3a5fe5';
  this.buttonColorActive = '#D22F2D';
  this.color = this.buttonColorInactive;
  this.isOn = false;
}

Button.prototype.toggle = function() {
  this.isOn = !this.isOn;
  this.color = this.isOn ? this.buttonColorActive : this.buttonColorInactive;
};
