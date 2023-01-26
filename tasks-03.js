//https://discord.com/channels/1055031157995077692/1058356316097224734/1067871524234727455
class SmallestIntegerFinder {
  findSmallestInt = args => Math.min(...args);
}

//https://discord.com/channels/1055031157995077692/1058356316097224734/1067871524234727455
const circleCircumference = circle => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  let arr = []
  for (let i in obj){
    if (i.length === 5)  arr.push(i)
    if (obj[i].length === 5)  arr.push(obj[i])
  }
  return arr
}
