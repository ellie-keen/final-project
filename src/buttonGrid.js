function ButtonGrid(rows, cols) {
  this.buttons = [];
  this.rows = rows;
  this.cols = cols;
}

ButtonGrid.prototype.init = function() {
  for (let row = 0; row < this.rows; row++) {
    var buttonRow = [];
    for (let col = 0; col < this.cols; col++) {
      var frequency;
      if (row % 2 == 0) {
        frequency = 440;
      } else {
        frequency = 392;
      }
      buttonRow.push(new Button(frequency));
    }
    this.buttons.push(buttonRow);
  }
  console.log(this.buttons);
};
