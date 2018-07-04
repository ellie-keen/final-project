describe('GridView', function() {
  let context = jasmine.createSpyObj('context', ['fillRect']);
  let gridWidth = 16;
  let gridHeight = 8;
  let key = new Key();
  let buttonGrid = new ButtonGrid(gridHeight, gridWidth);
  let gridView = new GridView(context);
  buttonGrid.init();

  it('draws the 16 x 8 grid', function() {
    gridView.drawGrid(buttonGrid);
    expect(context.fillRect).toHaveBeenCalledTimes(128);
  });

  it('changes the color of a selected button', function() {
    expect(buttonGrid.buttons[0][2].color).toEqual('#3a5fe5');
    gridView.update(buttonGrid, 105, 0);
    expect(buttonGrid.buttons[0][2].color).toEqual('#D22F2D');
  });
});
