describe("Bloop", function(){

  beforeEach(function() {
    var audio = new AudioContext();
  })
  
  describe("createSineWave", function(){
    it("should return an oscillator object", function(){
      expect(createSineWave(audio, 2)).toEqual(jasmine.any(OscillatorNode))
      console.log(createSineWave(audio, 2))
    });

    it("should create a sine wave", function(){
      createSineWave(audio, 2)
      expect(createSineWave(audio, 2).type).toEqual("sine")
    });
  });


});
