describe('Button', function() {
  let button = new Button('blue');

  it('has a color', function() {
    let color = 'blue';
    expect(button.color).toEqual(color);
  });
});
