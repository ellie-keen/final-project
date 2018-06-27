window.onload = function() {
  var canvas = document.getElementById('screen');
  var buttonGrid = new ButtonGrid(canvas.getContext('2d'));
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
  buttonGrid.create(10, 0, 0);
};
