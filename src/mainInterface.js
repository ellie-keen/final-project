window.onload = function() {
  var keyboardCanvas = document.getElementById('keyboardCanvas');
  var visualiserCanvas = document.getElementById('visualiserCanvas');
  var keyboardContext = keyboardCanvas.getContext('2d');

  var rows = 8;
  var cols = 16;
  var buttonGrid = new ButtonGrid(rows, cols);
  var gridView = new GridView(keyboardContext);

  var audio = new AudioContext();
  var analyser = audio.createAnalyser();
  var sound = new Sound(audio, analyser);
  var clock = new Clock(sound, gridView);

  var visualiser = new Visualiser(visualiserCanvas, analyser);

  buttonGrid.init();
  gridView.drawGrid(buttonGrid);
  clock.interval(buttonGrid);
  visualiser.draw();

  keyboardCanvas.addEventListener('click', function(e) {
    gridView.update(buttonGrid, e.offsetX, e.offsetY);
    gridView.drawGrid(buttonGrid);
  });

  document.body.onkeydown = function(e) {
    if(e.keyCode == 32) {
      sound.changeWaveType();
    } else if (e.keyCode == 38) {
      clock.decrementIntervalDuration();
    } else if (e.keyCode == 40) {
      clock.incrementIntervalDuration();
    }
  }

};
