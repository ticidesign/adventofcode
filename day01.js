const assert = require('assert');

function inverseCaptcha(input){
  var sum = 0;
  var array = input.split('').map(Number);
  for ( let i = 0; i < array.length; i++){
    console.log(array[i]);
    // if(array[i] === array[i + 1]){
    //   return sum += array[i];
    // }
    // if(array[array.length - 1] === array[0]){
    //   return sum += array[array.length - 1];
    // }
  }
  // var sum = array.filter((a, b) => {
  //   if(a === b){
  //     return b;
  //   } if(a === a[array.lengt - 1]){
  //     return a[array.lengt - 1];
  //   // } else {
  //   //   return b;
  //   }
    
  // })
  // .reduce((a, b) => a + b, 0);
  // // console.log(sum);
  // return sum;
}
// inverseCaptcha("1111");


describe('Inverse Captcha', function() {

  it('Equal pairs: 1122 returns 3', () => {
    assert.equal(inverseCaptcha("1122"), 3);
  });
  // it('All equals : 1111 returns 4', () => {
  //   assert.equal(inverseCaptcha("1111"), 4);
  // });
  it('No equal : 1234 returns 0', () => {
    assert.equal(inverseCaptcha("1234"), 0);
  });
  it('First and last equal: 91212129 returns 9'), () => {
    assert.equal(inverseCaptcha("91212129"), 9);
  }
 
});


// The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.
// For example:


// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
// What is the solution to your captcha?