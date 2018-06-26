describe("Sound", function() {

  var sound;
  var audioFile;

  beforeEach(function() {
    sound = new Sound();
    audioFile = jasmine.createSpyObj('audioFile', ['play'])
  });

  describe("playSound", function(){

    it("calls play", function(){
      sound.playSound(audioFile)
      expect(audioFile.play).toHaveBeenCalled();
    })
  })

})
