describe('ButtonGrid', function() {
  var context;
  var buttonGrid;

  beforeEach(function() {
    context = jasmine.createSpyObj('context', ['fillRect']);
    buttonGrid = new ButtonGrid(context);
  });

  it('creates squares in column', function() {
    buttonGrid.createColumn(5, 0, 0);
    expect(context.fillRect).toHaveBeenCalled();
  });

  it('creates columns and rows', function() {
    buttonGrid.createGrid(5, 5, 0, 0);
    expect(context.fillRect).toHaveBeenCalled();
  });
});
