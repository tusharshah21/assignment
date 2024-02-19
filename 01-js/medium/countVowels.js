/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  let count=0;
  let vowels = "aeiou";
  let nstr=str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(nstr[i])) {
      count++;
    }
  }
  return count;
    // Your code here
}


module.exports = countVowels;