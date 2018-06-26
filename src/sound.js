
function Sound() {

}
var audioFile = document.getElementById('audio');

Sound.prototype.playSound = function(audioFile) {
  audioFile.play();
}

var sound = new Sound();
