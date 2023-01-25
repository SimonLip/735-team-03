//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

let min = function (list) {
  return Math.min(...list);
};

let max = function (list) {
  return Math.max(...list);
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let val = Math.min.apply(null, arr);
  return toReturn == "value" ? val : arr.indexOf(val);
}

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  return i * 2;
}

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  return Math.ceil(year / 100);
}

//https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript

function multiply(a, b) {
  return a * b;
}

//https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return num > 0 ? -num : num;
}

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

function cockroachSpeed(s) {
  return Math.floor((s * 1000) / 36);
}

//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

function otherAngle(a, b) {
  return 180 - a - b;
}

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
  return n * 2 - 2;
}

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  return n < 1 ? n : n > 13 ? n - 2 : n - 1;
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return 1000 * (s + 60 * (m + 60 * h));
}

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return (n % x) + (n % y) === 0;
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : 
  Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!
}

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = i => 2 * i;
