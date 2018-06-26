window.onload = function() {

  var sound = new Sound();
  var audioFile = document.getElementById('audio');
  var buttons = document.querySelectorAll('.button');

  var initializeButtons = function() {
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        this.style.backgroundColor = 'red'
        sound.playSound(audioFile);
      })
    }
  }
  initializeButtons()
};
