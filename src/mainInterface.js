window.onload = function() {
  var keyboardCanvas = document.getElementById('keyboardCanvas');
  var visualiserCanvas = document.getElementById('visualiserCanvas');
  var bpm = document.getElementById('bpm');
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
  bpm.innerHTML = clock.getBPM();

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
    if (e.keyCode === 75) {
      key.change();
    } else if (e.keyCode == 32) {
      sound.changeWaveType();
    } else if (e.keyCode == 38) {
      clock.decrementIntervalDuration();
      bpm.innerHTML = clock.getBPM();
      clock.clear();
      clock.interval(buttonGrid);
    } else if (e.keyCode == 40) {
      clock.incrementIntervalDuration();
      bpm.innerHTML = clock.getBPM();
      clock.clear();
      clock.interval(buttonGrid);
    }
  };
};
