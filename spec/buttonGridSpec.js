describe('ButtonGrid', function() {
  var buttonGrid;
  beforeEach(function() {
    buttonGrid = new ButtonGrid(16,8);
  });

  it('initializes a 2d array of buttons', function() {
    buttonGrid.init();
    expect(buttonGrid.buttons.length).toEqual(16);
    expect(buttonGrid.buttons[0].length).toEqual(8);
  });

  it('adds different frequency value for each buttons\' row', function() {
    buttonGrid.init();
    expect(buttonGrid.buttons[0][0].frequency).toEqual(400);
    expect(buttonGrid.buttons[0][1].frequency).toEqual(400);
    expect(buttonGrid.buttons[1][0].frequency).toEqual(360);
    expect(buttonGrid.buttons[1][1].frequency).toEqual(360);
  })
});
