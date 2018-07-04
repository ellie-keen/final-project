function ButtonGrid(rows, cols) {
  this.buttons;
  this.rows = rows;
  this.cols = cols;
}

ButtonGrid.prototype.init = function() {
  this.buttons = [];
  for (let row = 0; row < this.rows; row++) {
    var buttonRow = [];
    for (let col = 0; col < this.cols; col++) {
      buttonRow.push(new Button());
    }
    this.buttons.push(buttonRow);
  }

  ButtonGrid.prototype.buttonIsOn = function(row, col) {
    return this.buttons[row][col].isOn;
  };

  ButtonGrid.prototype.toggleButton = function(row, col) {
    this.buttons[row][col].toggle();
  };

  ButtonGrid.prototype.getButtonColor = function(row, col) {
    return this.buttons[row][col].color;
  };

  ButtonGrid.prototype.setButtonColor = function(row, col, color) {
    this.buttons[row][col].color = color;
  };
};
