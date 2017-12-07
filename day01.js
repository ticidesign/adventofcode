const assert = require('assert');

function inverseCaptcha(input){
  
  var numbers = input.split('').map(Number);
  
  var sum = numbers.filter((elm, index, array) => {
    if(index === array.length -  1){
      return elm === array[0] ? elm : 0
    } else {
      return elm === array[index+1] ? elm : 0;
    }
  })
  .reduce((a, b) => a + b, 0);
  // console.log(sum); // To see the result in the console
  return sum;
}


describe('Inverse Captcha', function() {

  it('Equal pairs: 1122 returns 3', () => {
    assert.equal(inverseCaptcha("1122"), 3);
  });
  it('All equals : 1111 returns 4', () => {
    assert.equal(inverseCaptcha("1111"), 4);
  });
  it('No equal : 1234 returns 0', () => {
    assert.equal(inverseCaptcha("1234"), 0);
  });
  it('First and last equal: 9129 returns 9', () => {
    assert.equal(inverseCaptcha("9129"), 9);
  });
});