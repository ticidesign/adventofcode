const assert = require('assert');

function inverseCaptcha(input){
  
  var numbers = input.split('').map(Number);
  
  var sum = numbers
    .filter((elm, index, array) => {
      return elm === array[array.length/2 + index] ? elm : 0;
    })
    .reduce((a, b) => a + b * 2, 0);

  // console.log(sum); // To see the result in the console
  return sum;
}

describe('Inverse Captcha', function() {

  it('1212 returns 6', () => {
    assert.equal(inverseCaptcha("1212"), 6);
  });
  it('1221 returns 0', () => {
    assert.equal(inverseCaptcha("1221"), 0);
  });
  it('123425 returns 4', () => {
    assert.equal(inverseCaptcha("123425"), 4);
  });
  it('123123 returns 12', () => {
    assert.equal(inverseCaptcha("123123"), 12);
  });
  it('12131415 returns 4', () => {
    assert.equal(inverseCaptcha("12131415"), 4);
  });
});
