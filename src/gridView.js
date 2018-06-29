function GridView(context) {
  this.gap = 1.5;
  this.buttonSize = 20;
  this.context = context;
}

GridView.prototype.drawGrid = function(buttonGrid) {
  for (let col = 0; col < buttonGrid.cols; col++) {
    for (let row = 0; row < buttonGrid.rows; row++) {
      let button = buttonGrid.buttons[row][col];
      this.context.fillStyle = button.color;
      this.context.fillRect(
        col * this.buttonSize * this.gap,
        row * this.buttonSize * this.gap,
        this.buttonSize,
        this.buttonSize
      );
    }
  }
};

GridView.prototype.update = function(buttonGrid, x, y) {
  if (this.clickIsWithinButton(x, y)) {
    var row = Math.floor(y / this.buttonSize / this.gap);
    var col = Math.floor(x / this.buttonSize / this.gap);
    var button = buttonGrid.buttons[row][col];
    button.color = 'red';
  }
};

GridView.prototype.clickIsWithinButton = function(x, y) {
  return !(x > 20 && x < 30 ||
          x > 50 && x < 60 ||
          x > 80 && x < 90 ||
          x > 110 && x < 120 ||
          x > 140 ||
          y > 20 && y < 30 ||
          y > 50 && y < 60 ||
          y > 80 && y < 90 ||
          y > 110 && y < 120 ||
          y > 140)
};