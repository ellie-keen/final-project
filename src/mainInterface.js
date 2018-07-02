window.onload = function() {
  var keyboardCanvas = document.getElementById('keyboardCanvas');
  var visualiserCanvas = document.getElementById('visualiserCanvas');
  var keyboardContext = keyboardCanvas.getContext('2d');
  var key = new Key();

  var rows = 8;
  var cols = 16;
  var buttonGrid = new ButtonGrid(rows, cols, key);
  var gridView = new GridView(keyboardContext);

  var audio = new AudioContext();
  var analyser = audio.createAnalyser();
  var sound = new Sound(audio, analyser, key);
  var clock = new Clock(sound, gridView);

  var visualiser = new Visualiser(visualiserCanvas, analyser);

  keyboardCanvas.addEventListener('click', function(e) {
    gridView.update(buttonGrid, e.offsetX, e.offsetY);
    gridView.drawGrid(buttonGrid);
  });

  document.body.onkeyup = function(e) {
    if(e.keyCode === 75) {
      key.change();
    }
   }

  buttonGrid.init();
  gridView.drawGrid(buttonGrid);
  clock.interval(buttonGrid);
  visualiser.draw();
};
