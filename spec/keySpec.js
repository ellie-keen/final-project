describe('Key', function() {

  var key = new Key();
  var a;
  var c;
  beforeEach(function() {
    a = [440, 415, 369, 329, 293, 277, 246, 220]
    b = [466, 415, 364, 349, 311, 277, 261, 223]

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
})
