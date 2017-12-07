const assert = require('assert');

function corruptionChecksumPerLine(input){
  var numbers = input.split(' ').map(Number);
  
  var largest = numbers[0];
  var smallest = numbers[0];
  
  for (var i = 1; i < numbers.length; i++) {
  
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    else if(numbers[i] < smallest) {
        smallest = numbers[i];
    }
  }
  var difference = largest - smallest;
  return difference;
}

function corruptionChecksum(input){
  const numbers = input.split(',');
  let sum = 0;
  // console.log(numbers.length);
  for (let i = 0; i < numbers.length; i++) {
    // console.log(Array.from(numbers[i])).map(Number);
    let row = numbers[i].split(' ').map(Number);
    console.log(row, i);
    sum =+ corruptionChecksumPerLine(row);
  }
  console.log(sum);
  return sum;
}

describe('corruptionChecksum', function() {

  it('The first rows largest and smallest values are 9 and 1, and their difference is 8', () => {
    assert.equal(corruptionChecksumPerLine("5 1 9 5"), 8);
  });
  it('The second rows largest and smallest values are 7 and 3, and their difference is 4.', () => {
    assert.equal(corruptionChecksumPerLine("7 5 3"), 4);
  });
  it('The third rows difference is 6', () => {
    assert.equal(corruptionChecksumPerLine("2 4 6 8"), 6);
  });
  it('the spreadsheets checksum would be 8 + 4 + 6 = 18', () => {
    assert.equal(corruptionChecksum("5 1 9 5, 7 5 3, 2 4 6 8"), 18);
  })

});