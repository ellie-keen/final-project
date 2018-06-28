window.onload = function() {
  var canvas = document.getElementById('screen');
  var buttonGrid = new ButtonGrid(5, 5);
  var gridView = new GridView();
  var audioFile = document.getElementById('audio');
  var buttons = document.querySelectorAll('.button');
  var sound = new Sound();

  var initializeButtons = function() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        this.style.backgroundColor = 'red';
        sound.playSound(audioFile);
      });
    }
  };
  initializeButtons();
  buttonGrid.init();
  gridView.drawGrid(canvas.getContext('2d'), buttonGrid);
};
