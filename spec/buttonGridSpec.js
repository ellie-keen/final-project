describe('ButtonGrid', function() {
  var context;
  var buttonGrid;

  beforeEach(function() {
    context = jasmine.createSpyObj('context', ['fillRect']);
    buttonGrid = new ButtonGrid(context);
  });

  it('creates squares', function() {
    buttonGrid.create(5, 0, 0);
    expect(context.fillRect).toHaveBeenCalled();
  });
});
