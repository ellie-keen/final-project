function ButtonGrid(rows, cols) {
  this.buttons = [];
  this.rows = rows;
  this.cols = cols;
}

ButtonGrid.prototype.init = function() {
  var frequency = 400;
  for (let row = 0; row < this.rows; row++) {
    var buttonRow = [];
    for (let col = 0; col < this.cols; col++) {
      buttonRow.push(new Button(frequency));
    }
    frequency -= 40
    this.buttons.push(buttonRow);
  }
};
