function ButtonGrid(rows, cols) {
  this.buttons = [];
  this.rows = rows;
  this.cols = cols;
}

ButtonGrid.prototype.init = function() {
  for (let i = 0; i < this.rows; i++) {
    var buttonRow = [];
    for (let j = 0; j < this.cols; j++) {
      buttonRow.push(new Button('blue', 20));
    }
    this.buttons.push(buttonRow);
  }
  console.log(this.buttons);
};
