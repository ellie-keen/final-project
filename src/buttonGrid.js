function ButtonGrid() {
  this.buttons = [];
}

ButtonGrid.prototype.init = function(rows, cols) {
  for (let i = 0; i < rows; i++) {
    var buttonRow = [];
    for (let j = 0; j < cols; j++) {
      buttonRow.push(new Button('blue'));
    }
    this.buttons.push(buttonRow);
  }
  console.log(this.buttons);
};
