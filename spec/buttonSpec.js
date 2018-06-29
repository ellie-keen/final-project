describe('Button', function() {

  var button;

  beforeEach(function() {
    button = new Button('blue', 1);
  });

  it('has a color', function() {
    let color = 'blue';
    expect(button.color).toEqual(color);
  });

  it('has a frequency', function() {
    let frequency = 1
    expect(button.frequency).toEqual(1);
  });

  it('is off when initialized', function() {
    expect(button.isOn).toEqual(false);
  });

  it('can be turned on', function() {
    button.toggle();
    expect(button.isOn).toEqual(true);
  });

  it('can be turned off', function() {
    button.toggle();
    button.toggle();
    expect(button.isOn).toEqual(false);
  });
});
