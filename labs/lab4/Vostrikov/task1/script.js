'use strict';

let n;

try {
  n = +prompt('Input N');
} catch (e) {
  console.log(e);
}

const createArray = (n) =>
  [...new Array(n)].map(() => Math.round(Math.random() * 101));

const insertSort = (array) => {
  const result = [...array];
  for (let i = 1; i < result.length; i++) {
    let j = i - 1;
    let temp = result[i];
    while (j >= 0 && result[j] < temp) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = temp;
  }
  return result;
};

const aArray = createArray(n);
const aMax = Math.max(...aArray);
const bArray = aArray.map((item) => item * aMax);

const result = insertSort(bArray);

console.log('result: ', result, 'a: ', aArray, 'b: ', bArray);
