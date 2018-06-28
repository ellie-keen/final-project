describe('Button', function() {

  let button = new Button('blue', 20);

  it('has a color', function() {
    let color = 'blue';
    expect(button.color).toEqual(color);
  });

  it('has a size', function() {
    let size = 20;
    expect(button.size).toEqual(size);
  })
});
