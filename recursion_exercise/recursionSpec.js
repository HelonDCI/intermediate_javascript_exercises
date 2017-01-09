var expect = chai.expect

describe("#productOfArray", function(){
  it("returns the product of all the numbers in an array", function(){
    expect(productOfArray([1,2,3])).to.equal(6)
    expect(productOfArray([0,1,2,3])).to.equal(0)
    expect(productOfArray([1,-2,3])).to.equal(-6)
  });
});

describe("#collectStrings", function(){
  it("returns all the strings in a nested object", function(){
    var obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    expect(collectStrings(obj)).to.deep.equal(["foo", "bar", "baz"])
  });
});

describe("#contains", function(){
  it("should return true if a value is found in an object", function(){
    var nestedObject = {
        data: {
            info: {
                stuff: {
                    thing: {
                        moreStuff: {
                            magicNumber: 44
                        }
                    }
                }
            }
        }
    }
    expect(contains(nestedObject, 44)).to.equal(true) // true)
  });
});

describe("#search", function(){
  it("should find the index of a value in an array", function(){
    expect(search([1,2,3,4],4)).to.equal(3)
    expect(search([1,2],1)).to.equal(0)
    expect(search([1,2,3,4,5,6,7],6)).to.equal(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(search([1,2,3,4]),0).to.equal(-1)
    expect(search([1,2]),11).to.equal(-1)
  });
});

describe("#binarySearch", function(){
  it("should find the index of a value in an array", function(){
    expect(binarySearch([1,2,3,4],4)).to.equal(3)
    expect(binarySearch([1,2],1)).to.equal(0)
    expect(binarySearch([1,2,3,4,5,6,7],6)).to.equal(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(binarySearch([1,2,3,4],0)).to.equal(-1)
    expect(binarySearch([1,2],11)).to.equal(-1)
  });
});

describe("#stringifyNumbers", function(){
  it("should convert all numbers in a nested object to strings", function(){
    var obj = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66
        }
      }
    }
    var answer = {
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66"
        }
      }
    }
    console.log("obj", stringifyNumbers(obj))
    console.log("answer", answer)
    expect(stringifyNumbers(obj)).to.deep.equal(answer)
  });
});