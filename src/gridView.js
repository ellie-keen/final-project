function GridView(context) {
  this.gap = 1.5;
  this.buttonSize = 30;
  this.context = context;
}

GridView.prototype.drawGrid = function(buttonGrid) {
  for (let col = 0; col < buttonGrid.cols; col++) {
    for (let row = 0; row < buttonGrid.rows; row++) {
      this.context.fillStyle = buttonGrid.getButtonColor(row, col);
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
  if (this._clickIsWithinButton(buttonGrid, x, y)) {
    var row = Math.floor(y / this.buttonSize / this.gap);
    var col = Math.floor(x / this.buttonSize / this.gap);
    buttonGrid.toggleButton(row, col);
  }
};

GridView.prototype._clickIsWithinButton = function(buttonGrid, x, y) {
  for (let col = 0; col < buttonGrid.cols; col++) {
    for (let row = 0; row < buttonGrid.rows; row++) {
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
