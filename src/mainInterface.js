window.onload = function() {
  var canvas = document.getElementById('screen');
  var context = canvas.getContext('2d');
  var gridView = new GridView(context);
  var buttonGrid = new ButtonGrid(5, 5);
  var audioFile = document.getElementById('audio');
  var sound = new Sound();

  buttonGrid.init();
  canvas.addEventListener('click', function(e) {
    gridView.update(buttonGrid, e.offsetX, e.offsetY);
    gridView.drawGrid(buttonGrid);
  });
  gridView.drawGrid(buttonGrid);
};
