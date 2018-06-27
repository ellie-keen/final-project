describe("Bloop", function(){

  beforeEach(function() {
    var audio = new AudioContext();
  })

  describe("createSineWave", function(){
    it("should return an oscillator object", function(){
      expect(createSineWave(audio, 2)).toEqual(jasmine.any(OscillatorNode))
    });

    it("should create a sine wave", function(){
      createSineWave(audio, 2)
      expect(createSineWave(audio, 2).type).toEqual("sine")
    });
  });

  describe("note", function(){
    it("should return a function", function(){
      expect(note(audio, 400)).toEqual(jasmine.any(Function))
    });
  });

  describe("createAmplifier", function(){
    it("should return an amplifier", function(){
      console.log(createAmplifier(audio, 1, 1));
      expect(createAmplifier(audio, 1, 1)).toEqual(jasmine.any(GainNode))
    });
  });


});
