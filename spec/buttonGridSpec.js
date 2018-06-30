describe('ButtonGrid', function() {
  var buttonGrid;
  beforeEach(function() {
    buttonGrid = new ButtonGrid(5,5);
  });

  it('initializes a 2d array of buttons', function() {
    buttonGrid.init();
    expect(buttonGrid.buttons.length).toEqual(5);
    expect(buttonGrid.buttons[0].length).toEqual(5);
  });

  it('adds higher frequency for each buttons\' row', function() {
    buttonGrid.init();
    expect(buttonGrid.buttons[0][0].frequency).toEqual(80);
    expect(buttonGrid.buttons[0][1].frequency).toEqual(80);
    expect(buttonGrid.buttons[1][0].frequency).toEqual(110);
    expect(buttonGrid.buttons[1][1].frequency).toEqual(110);
  })


});
