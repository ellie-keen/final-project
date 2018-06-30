describe('GridView', function() {
  var context = jasmine.createSpyObj('context', ['fillRect']);
  var gridView = new GridView(context);
  var gridWidth = 16;
  var gridHeight = 8;

  it('draws the 16 x 8 grid', function() {
    let buttonGrid = new ButtonGrid(gridWidth, gridHeight);
    buttonGrid.init();
    gridView.drawGrid(buttonGrid);
    expect(context.fillRect).toHaveBeenCalledTimes(128);
  });

  it('changes the color of a selected button', function() {
    let buttonGrid = new ButtonGrid(gridWidth, gridHeight);
    buttonGrid.init();
    expect(buttonGrid.buttons[0][2].color).toEqual('blue');
    gridView.update(buttonGrid, 105, 0);
    expect(buttonGrid.buttons[0][2].color).toEqual('red');
  });
});
