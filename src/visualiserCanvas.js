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
  const colors = ['#383736', '#D22F2D', '#AA0713', '#03193E', '#000105', '#ad0532', '#ed2d2d', '#0b0c0c'];
  const sliceWidth = this.canvas.width * 1.0 / this.bufferLength;
  let x = 0;

  this.context.fillStyle = '#03193E';
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.context.lineWidth = 3;
  this.context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
  this.context.beginPath();

  this.analyser.getByteTimeDomainData(this.dataArray);

  for (let i = 0; i < this.bufferLength; i++) {
    let v = this.dataArray[i] / 128.0;
    let y = v * this.canvas.height / 2;
    i === 0 ? this.context.moveTo(x, y) : this.context.lineTo(x, y);
    x += sliceWidth;
  }

  this.context.lineTo(this.canvas.width, this.canvas.height / 2);
  this.context.stroke();
  requestAnimationFrame(this.draw.bind(this));
};
