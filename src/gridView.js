function GridView() {
}

GridView.prototype.drawGrid = function (context, buttonGrid) {
  for (let i = 0; i < buttonGrid.cols; i++) {
    for (let j = 0; j < buttonGrid.rows; j++) {
      let button = buttonGrid.buttons[i][j]
      context.fillStyle = button.color
      context.fillRect((i * button.size) + button.size, (j * button.size) + button.size, button.size, button.size)
    }
  }
};
