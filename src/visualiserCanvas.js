function Visualiser(canvas, analyser) {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.analyser = analyser;
  this.analyser.fftSize = 2048;
  this.bufferLength = this.analyser.frequencyBinCount;
  this.dataArray = new Uint8Array(this.bufferLength);
}

Visualiser.prototype.draw = function() {
  var rValue = Math.floor(Math.random() * 255 + 1);
  var gValue = Math.floor(Math.random() * 255 + 1);
  var bValue = Math.floor(Math.random() * 255 + 1);
  var lineSize = Math.floor(Math.random() * 15 + 1);

  this.context.fillStyle = `rgb(255, 255, 255, 0)`;
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.context.lineWidth = lineSize;
  this.context.strokeStyle = `rgb(${rValue}, ${gValue}, ${bValue})`;
  this.context.beginPath();

  this.analyser.getByteTimeDomainData(this.dataArray);

  var sliceWidth = this.canvas.width * 1.0 / this.bufferLength;
  var x = 0;
  for (var i = 0; i < this.bufferLength; i++) {
    var v = this.dataArray[i] / 128.0;
    var y = v * this.canvas.height / 2;
    i == 0 ? this.context.moveTo(x, y) : this.context.lineTo(x, y);
    x += sliceWidth;
  }

  this.context.lineTo(this.canvas.width, this.canvas.height / 2);
  this.context.stroke();
  requestAnimationFrame(this.draw.bind(this));
};
