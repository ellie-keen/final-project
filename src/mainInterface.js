window.onload = function() {
  var keyboardCanvas = document.getElementById('keyboardCanvas');
  var visualiserCanvas = document.getElementById('visualiserCanvas');
  var keyboardContext = keyboardCanvas.getContext('2d');

  var height = 8;
  var width = 16;
  var buttonGrid = new ButtonGrid(height, width);
  var gridView = new GridView(keyboardContext);

  var audio = new AudioContext();
  var analyser = audio.createAnalyser();
  var sound = new Sound(audio, analyser);
  var clock = new Clock(sound);

  var visualiser = new Visualiser(visualiserCanvas, analyser);

  keyboardCanvas.addEventListener('click', function(e) {
    gridView.update(buttonGrid, e.offsetX, e.offsetY);
    gridView.drawGrid(buttonGrid);
  });

  buttonGrid.init();
  gridView.drawGrid(buttonGrid);
  clock.interval(buttonGrid);
  visualiser.draw();
};
