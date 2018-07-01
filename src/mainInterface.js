window.onload = function() {
  var keyboardCanvas = document.getElementById('keyboardCanvas');
  var visualiserCanvas = document.getElementById('visualiserCanvas');
  var keyboardContext = keyboardCanvas.getContext('2d');

  var height = 8;
  var width = 16;
  var buttonGrid = new ButtonGrid(height, width);
  var gridView = new GridView(keyboardContext, buttonGrid);

  var audio = new AudioContext();
  var analyser = audio.createAnalyser();
  var sound = new Sound(audio, analyser);
  var clock = new Clock(sound, gridView);

  var visualiser = new Visualiser(visualiserCanvas, analyser);

  keyboardCanvas.addEventListener('click', function(e) {
    gridView.update(e.offsetX, e.offsetY);
    gridView.drawGrid();
  });

  buttonGrid.init();
  gridView.drawGrid();
  clock.interval(buttonGrid);
  visualiser.draw();
};
