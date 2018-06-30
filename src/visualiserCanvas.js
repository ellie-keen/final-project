var canvas = document.getElementById('visualiser');
var visualiserContext = canvas.getContext("2d");

var WIDTH = 800;
var HEIGHT = 600;

visualiserContext.clearRect(0, 0, WIDTH, HEIGHT);

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

function draw() {

  var rValue = Math.floor((Math.random() * 255) + 1);
  var gValue = Math.floor((Math.random() * 255) + 1);
  var bValue = Math.floor((Math.random() * 255) + 1);
  var lineSize = 3;
  var colors = ['#383736', '#D22F2D', '#AA0713', '#03193E', '#000105', '#ad0532', '#ed2d2d', '#0b0c0c']

  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);

  visualiserContext.fillStyle = '#03193E';
  visualiserContext.fillRect(0, 0, WIDTH, HEIGHT);
  visualiserContext.lineWidth = lineSize;
  // visualiserContext.strokeStyle = `rgb(${rValue}, ${gValue}, ${bValue})`;
  visualiserContext.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
  visualiserContext.beginPath();

  var sliceWidth = WIDTH * 1.0 / bufferLength;
  var x = 0

  for(var i = 0; i < bufferLength; i++) {

    var v = dataArray[i] /128.0;
    var y = v * HEIGHT/2;

      if(i === 0) {
        visualiserContext.moveTo(x, y);
      } else {
        visualiserContext.lineTo(x, y);
      }

      x += sliceWidth;
      };
  visualiserContext.lineTo(canvas.width, canvas.height/2);
    visualiserContext.stroke();
}


draw()
