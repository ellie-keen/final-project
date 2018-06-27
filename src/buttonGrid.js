function ButtonGrid(context) {
  this.context = context;
}

ButtonGrid.prototype.create = function(cols, x, y) {
  let width = 20;
  let height = 20;
  let gap = height / 4;

  for (let i = 0; i < cols; i++) {
    this.context.fillStyle = 'blue';
    this.context.fillRect(x, y, width, height);
    y += height + gap;
  }
};
