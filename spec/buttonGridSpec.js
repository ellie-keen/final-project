describe('ButtonGrid', function() {
  var buttonGrid;
  beforeEach(function() {
    buttonGrid = new ButtonGrid();
  });

  it('initializes a 2d array of buttons', function() {
    buttonGrid.init(5, 5);
    expect(buttonGrid.buttons.length).toEqual(5);
    expect(buttonGrid.buttons[0].length).toEqual(5);
  });
});
