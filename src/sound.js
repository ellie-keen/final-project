
function Sound() {

}

Sound.prototype.playSound = function(audio) {
  document.getElementById('audio').play();
  // audioFile.play();
}

var sound = new Sound();
