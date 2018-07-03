describe('Key', function() {

  var key
  var a;
  var b;
  var c;
  var d;
  var f;

  beforeEach(function() {
    key = new Key();
    a = [440, 415, 369, 329, 293, 277, 246, 220]
    b = [466, 415, 364, 349, 311, 277, 261, 223]
    c = [523, 493, 440, 392, 349, 329, 293, 261]
    d = [587, 523, 493, 440, 392, 369, 329, 293]
    f = [369, 329, 293, 277, 246, 220, 207, 185]

  })

  it("has a key with array of frequecies when initialized", function() {
    expect(key.keys[0]).toEqual(a)
  });

  it("has a default value key", function() {
    expect(key.value).toEqual(a)
  })

  it("changes value when 1st new key is selected", function() {
    key.change()
    expect(key.value).toEqual(b)
  })

  it("changes value when 2nd new key is selected", function() {
    key.change()
    key.change()
    expect(key.value).toEqual(c)
  })

  it("changes value back to default when 6th key is selected", function() {
    for (var i = 0; i < 5; i++) {
      key.change()
    }
    expect(key.value).toEqual(a)
  })

})
