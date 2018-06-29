describe('Button', function() {
  let button = new Button('blue', 1);

  it('has a color', function() {
    let color = 'blue';
    expect(button.color).toEqual(color);
  });

  it('has a frequency', function() {
    let frequency = 1
    expect(button.frequency).toEqual(1);
  })
});
