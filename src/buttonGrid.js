function ButtonGrid(rows, cols, key) {
  this.buttons = [];
  this.rows = rows;
  this.cols = cols;
  this.key = key
}

ButtonGrid.prototype.init = function() {
  var self = this
  var frequency = 400;
  for (let row = 0; row < this.rows; row++) {
    var buttonRow = [];
    for (let col = 0; col < this.cols; col++) {
      buttonRow.push(new Button(self.key.a[row]));
    }
    this.buttons.push(buttonRow);
  }
};
