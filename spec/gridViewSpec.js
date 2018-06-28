describe("GridView", function() {

  var gridView = new GridView();

  it("draws the 5 x 5 grid", function() {
    let context = jasmine.createSpyObj('context', ['fillRect']);
    let buttonGrid = new ButtonGrid(5,5)
    buttonGrid.init();
    gridView.drawGrid(context, buttonGrid);
    expect(context.fillRect).toHaveBeenCalled();
    expect(context.fillRect).toHaveBeenCalledTimes(25);
  });
})
