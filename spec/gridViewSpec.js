describe('GridView', function() {
  var context = jasmine.createSpyObj('context', ['fillRect']);
  var gridWidth = 16;
  var gridHeight = 8;
  var buttonGrid = new ButtonGrid(gridHeight, gridWidth);
  buttonGrid.init();
  var gridView = new GridView(context);

  it('draws the 16 x 8 grid', function() {
    gridView.drawGrid(buttonGrid);
    expect(context.fillRect).toHaveBeenCalledTimes(128);
  });

  it('changes the color of a selected button', function() {
    expect(buttonGrid.buttons[0][2].color).toEqual('blue');
    gridView.update(buttonGrid, 105, 0);
    expect(buttonGrid.buttons[0][2].color).toEqual('red');
  });
});
