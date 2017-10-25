describe("Add", function() {
  var add;

  beforeEach(function() {
    add = new Add();
   var multi = new multiply();
  });

 
  it("should be able to play a Songaaa", function() {
    expect(Add(1,2)).toEqual(1);
    //demonstrates use of custom matcher
  });
  it("multiply", function() {
    expect(multiply(1,2)).toEqual(1);
    //demonstrates use of custom matcher
  });
});
