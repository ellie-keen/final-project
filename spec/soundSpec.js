describe("Sound", function() {

  var sound;

  beforeEach(function() {
    sound = new Sound();
  });

  describe("playSound", function(){

    it("calls play", function(){
      // var audio = jasmine.createSpyObj('audio');

      var audioFile = jasmine.createSpyObj('audioFile', ['play'])

      sound.playSound(audioFile)

      expect(audioFile.play).toHaveBeenCalled();
    })
  })

})
