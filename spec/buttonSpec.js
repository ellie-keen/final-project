describe('Button', function() {
  it('has a default color', function() {
    let color = 'blue';
    let button = new Button(color);
    expect(button.color).toEqual(color);
  });
});
