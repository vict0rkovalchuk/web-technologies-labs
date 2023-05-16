'use strict';

let n1 = prompt('N1');
let n2 = prompt('N2');

const createArr = num => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * (20 - 1 + 1) + 1));
  }
  return arr;
};

let one = createArr(n1);
let two = createArr(n2);

console.log('Input array', one);
console.log(two);

function bubbleSort(arr) {
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

const sortedArr = bubbleSort(one);
console.log('Output array', sortedArr);

function consoleTheLeastNumber(arr1, arr2) {
  let n = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      n = arr1[i];
      break;
    }
  }
  n === 0 ? console.log('No number') : console.log('The least number', n);
}

consoleTheLeastNumber(sortedArr, two);
