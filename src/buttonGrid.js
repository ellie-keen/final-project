function ButtonGrid(rows, cols) {
  this.buttons = [];
  this.rows = rows;
  this.cols = cols;
  this.key = [440, 415, 369, 329, 293, 277, 246, 220]
}

ButtonGrid.prototype.init = function() {
  var self = this
  var frequency = 400;
  for (let row = 0; row < this.rows; row++) {
    var buttonRow = [];
    for (let col = 0; col < this.cols; col++) {
      buttonRow.push(new Button(self.key[row]));
    }
    this.buttons.push(buttonRow);
  }
};
