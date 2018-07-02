describe('Key', function() {

  var key = new Key();
  var a;
  beforeEach(function() {
    a = [440, 415, 369, 329, 293, 277, 246, 220]
  })

  it("has a key with array of frequecies when initialized", function() {
    expect(key.aKey).toEqual(a)
  });

  it("has a default value key", function() {
    expect(key.value).toEqual(a)
  })
})
