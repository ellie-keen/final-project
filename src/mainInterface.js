window.onload = function() {
  const keyboardCanvas = document.getElementById('keyboardCanvas');
  const visualiserCanvas = document.getElementById('visualiserCanvas');
  const bpm = document.getElementById('bpm');
  const keyDisplay = document.getElementById('key');
  const waveTypeDisplay = document.getElementById('waveType');
  const keyboardContext = keyboardCanvas.getContext('2d');

  const rows = 8;
  const cols = 16;
  const buttonGrid = new ButtonGrid(rows, cols);
  const gridView = new GridView(keyboardContext);
  const audio = new AudioContext();
  const analyser = audio.createAnalyser();
  const key = new Key();
  const sound = new Sound(audio, analyser, key);
  const clock = new Clock(sound, gridView);
  const visualiser = new Visualiser(visualiserCanvas, analyser);

  keyDisplay.innerHTML = key.keyName;
  bpm.innerHTML = clock.bpm;
  waveTypeDisplay.innerHTML = sound.waveType;

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
      keyDisplay.innerHTML = key.keyName;
    } else if (e.keyCode === 87) {
      sound.changeWaveType();
      waveTypeDisplay.innerHTML = sound.waveType;
    } else if (e.keyCode === 38) {
      clock.decrementIntervalDuration();
      bpm.innerHTML = clock.bpm;
      clock.clear();
      clock.interval(buttonGrid);
    } else if (e.keyCode === 40) {
      clock.incrementIntervalDuration();
      bpm.innerHTML = clock.bpm;
      clock.clear();
      clock.interval(buttonGrid);
    } else if (e.keyCode === 82) {
      buttonGrid.init();
      clock.clear();
      clock.interval(buttonGrid);
    } else if (e.keyCode === 32) {
      !clock.isPaused ? clock.clear() : clock.interval(buttonGrid);
    }
  };
};
