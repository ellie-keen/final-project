describe('GridView', function() {
  var context = jasmine.createSpyObj('context', ['fillRect']);
  var gridView = new GridView(context);

  it('draws the 5 x 5 grid', function() {
    let buttonGrid = new ButtonGrid(5, 5);
    buttonGrid.init();
    gridView.drawGrid(buttonGrid);
    expect(context.fillRect).toHaveBeenCalled();
    expect(context.fillRect).toHaveBeenCalledTimes(25);
  });

  it('changes the color of a selected button', function() {
    let buttonGrid = new ButtonGrid(5, 5);
    buttonGrid.init();
    expect(buttonGrid.buttons[0][0].color).toEqual('blue');
    gridView.update(buttonGrid, 10, 10);
    expect(buttonGrid.buttons[0][0].color).toEqual('red');
  });
});
