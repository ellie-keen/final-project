describe('ButtonGrid', function() {
  let buttonGrid;
  const rows = 8;
  const cols = 16;

  beforeEach(function() {
    buttonGrid = new ButtonGrid(rows, cols);
    buttonGrid.init();
  });

  it('initializes a 2d array of buttons', function() {
    expect(buttonGrid.buttons.length).toEqual(8);
    expect(buttonGrid.buttons[0].length).toEqual(16);
  });

  it('returns whether a button is on', function() {
    buttonGrid.buttons[7][15].isOn = true;
    expect(buttonGrid.buttonIsOn(7, 15)).toEqual(true);
  });

  it('returns the color of a particular inactive button', function() {
    expect(buttonGrid.getButtonColor(0, 0)).toEqual('#3a5fe5');
  });

  it('returns the color of a particular active button', function() {
    buttonGrid.buttons[0][0].toggle();
    expect(buttonGrid.getButtonColor(0, 0)).toEqual('#D22F2D');
  });

  it('highlights the color of a button', function() {
    buttonGrid.setButtonColor(0, 0, 'yellow');
    expect(buttonGrid.getButtonColor(0, 0)).toEqual('yellow');
  });

  it('toggles a button', function() {
    buttonGrid.toggleButton(7, 15);
    expect(buttonGrid.buttons[7][15].isOn).toEqual(true);
  });
});
