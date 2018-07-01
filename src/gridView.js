function GridView(context, buttonGrid) {
  this.gap = 1.5;
  this.buttonSize = 30;
  this.context = context;
  this.buttonGrid = buttonGrid;
}

GridView.prototype.drawGrid = function() {
  for (let col = 0; col < this.buttonGrid.cols; col++) {
    for (let row = 0; row < this.buttonGrid.rows; row++) {
      let button = this.buttonGrid.buttons[row][col];
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

GridView.prototype.update = function(x, y) {
  if (this._clickIsWithinButton(x, y)) {
    var row = Math.floor(y / this.buttonSize / this.gap);
    var col = Math.floor(x / this.buttonSize / this.gap);
    var button = this.buttonGrid.buttons[row][col];
    button.toggle();
  }
};

GridView.prototype._clickIsWithinButton = function(x, y) {
  for (let col = 0; col < this.buttonGrid.cols; col++) {
    for (let row = 0; row < this.buttonGrid.rows; row++) {
      let buttonX = col * this.buttonSize * this.gap;
      let buttonY = row * this.buttonSize * this.gap;
      if (
        x >= buttonX &&
        x <= buttonX + this.buttonSize &&
        y >= buttonY &&
        y <= buttonY + this.buttonSize
      ) {
        return true;
      }
    }
  }
  return false;
};
