function ButtonGrid(rows, cols) {
  this.buttons = [];
  this.rows = rows;
  this.cols = cols;
}

ButtonGrid.prototype.init = function() {
  for (let row = 0; row < this.rows; row++) {
    var buttonRow = [];
    for (let col = 0; col < this.cols; col++) {
      buttonRow.push(new Button('blue'));
    }
    this.buttons.push(buttonRow);
  }
  console.log(this.buttons);
};
