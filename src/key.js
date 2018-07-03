function Key() {
  this.keys = [
    [440, 415, 369, 329, 293, 277, 246, 3],
    [466, 415, 364, 349, 311, 277, 261, 3],
    [523, 493, 440, 392, 349, 329, 293, 3],
    [587, 523, 493, 440, 392, 369, 329, 3],
    [369, 329, 293, 277, 246, 220, 207, 3]
  ];
  this.keysName = [
    'A Major',
    'Bb Aeolian',
    'C Major',
    'D Mixolydian',
    'F# Minor'
  ];
  this.counter = 0;
  this.value = this.keys[0];
  this.keyName = this.keysName[this.counter];
}

Key.prototype.change = function() {
  this.counter === this.keys.length - 1 ? (this.counter = 0) : this.counter++;
  this.value = this.keys[this.counter];
  this.keyName = this.keysName[this.counter];
};
