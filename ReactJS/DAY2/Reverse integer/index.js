// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -2^31 <= x <= 2^31 - 1


let reverseInteger = function(x) {
    let num = x
    if(x < 0){
        num = x* -1;
    };
    let reverseNumber = parseInt(String(num).split('').reverse().join(''));
    if(reverseNumber >= Math.pow(2,31) -1 || reverseNumber <= Math.pow(2,31) *-1 ){
      return 0;
    }
    if(x<0){
        return -1 * reverseNumber
    } else {
        return reverseNumber;
    }
};
console.log(reverseInteger(1563847412))
console.log(reverseInteger(-123))
console.log(reverseInteger(120))