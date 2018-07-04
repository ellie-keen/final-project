describe('Button', function() {
  var button;

  beforeEach(function() {
    button = new Button();
  });

  it('has a color', function() {
    expect(button.color).toEqual('#3a5fe5');
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

  it('changes to red when turned on', function() {
    button.toggle();
    expect(button.color).toEqual('#D22F2D');
  });

  it('changes to blue when turned off', function() {
    button.toggle();
    button.toggle();
    expect(button.color).toEqual('#3a5fe5');
  });
});
