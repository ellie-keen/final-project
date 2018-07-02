describe('Key', function() {

  var key = new Key();

  it("has a key with array of frequecies when initialized", function() {
    expect(key.a).toEqual([440, 415, 369, 329, 293, 277, 246, 220])
  })
})
