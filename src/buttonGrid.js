function ButtonGrid(context) {
  this.context = context;
  this.width = 20;
  this.height = 20;
  this.gap = this.height  / 4;
}

ButtonGrid.prototype.createColumn = function(rows, x, y) {
  for (let i = 0; i < rows; i++) {
    this.context.fillStyle = 'blue';
    this.context.fillRect(x, y, this.width, this.height);
    y += this.height + this.gap;
  }
};

ButtonGrid.prototype.createGrid = function(columns, rows, x, y) {
  for (let i = 0; i < columns; i ++) {
    this.createColumn(rows, x, y)
    x += this.width + this.gap;
  }
};
