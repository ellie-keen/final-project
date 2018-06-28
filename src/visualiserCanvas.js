
var canvas = document.getElementById('myCanvas');
var myCanvas = canvas.getContext("2d");

var WIDTH = 800;
var HEIGHT = 500;

myCanvas.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {

var random = Math.floor((Math.random() * 255) + 1);
var random1 = Math.floor((Math.random() * 255) + 1);
var random2 = Math.floor((Math.random() * 255) + 1);
var random3 = Math.floor((Math.random() * 15) + 1);


 console.log(random)
 console.log(random1)
 console.log(random2)

  drawVisual = requestAnimationFrame(draw);

  // analyser.getByteFrequencyData(dataArray);
    analyser.getByteTimeDomainData(dataArray);

  // myCanvas.fillStyle = `rgb(${random1}, ${random}, ${random2})`;
  myCanvas.fillStyle = `rgb(0, 0, 0)`;
  myCanvas.fillRect(0, 0, WIDTH, HEIGHT);

  myCanvas.lineWidth = random3;
  myCanvas.strokeStyle = `rgb(${random}, ${random1}, ${random2})`;

  myCanvas.beginPath();

  var sliceWidth = WIDTH * 1.0 / bufferLength;
  var x = 0

  for(var i = 0; i < bufferLength; i++) {

    var v = dataArray[i] /128.0;
    var y = v * HEIGHT/2;

      if(i === 0) {
        myCanvas.moveTo(x, y);
      } else {
        myCanvas.lineTo(x, y);
      }

      x += sliceWidth;
      };
  myCanvas.lineTo(canvas.width, canvas.height/2);
    myCanvas.stroke();
}

draw()
