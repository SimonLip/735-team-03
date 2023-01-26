//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let arr = [];
  for (let i in obj) {
    if (i.length === 5) arr.push(i);
    if (obj[i].length === 5) arr.push(obj[i]);
  }
  return arr;
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = function () {
      return i;
    };
  }
  return res;
}
