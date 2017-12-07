const assert = require('assert');

function corruptionChecksum(input){
  var numbers = input.split(' ').map(Number);
  
  // var largest = numbers[0];
  // var smallest = numbers[0];
  
  // for (var i = 1; i < numbers.length; i++) {
  
  //   if (numbers[i] > largest) {
  //       largest = numbers[i];
  //   }
  //   else if(numbers[i] < smallest) {
  //       smallest = numbers[i];
  //   }
  // }
  var largest = 0;
  var smallest = 0;
  var difference = numbers.filter((current, i) => {

    console.log(current, largest, smallest)
    if (current[i] > largest) {
      largest = current[i];
    }
    else if(current[i] < smallest) {
        smallest = current[i];
    }
  })
  // .reduce((largest , smallest) => largest - smallest, 0);
  return difference;
}


describe('corruptionChecksum', function() {

  it('The first rows largest and smallest values are 9 and 1, and their difference is 8', () => {
    assert.equal(corruptionChecksum("5 1 9 5"), 8);
  });
  it('The second rows largest and smallest values are 7 and 3, and their difference is 4.', () => {
    assert.equal(corruptionChecksum("7 5 3"), 4);
  });
  it('The third rows difference is 6', () => {
    assert.equal(corruptionChecksum("2 4 6 8"), 6);
  });

});