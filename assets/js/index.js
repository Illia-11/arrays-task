'use strict';

// task 1
console.log('==Task 1==');
const arr1 = [1, 2, 3];
const arr1Push = arr1.push(6, 5, 4);
const arr1Unshift = arr1.unshift(-3, -2, -1);
console.log(arr1);

// task 2
console.log('==Task 2==');
const arr2 = [ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ];
const arr2Splice1 = arr2.splice(0, 2);
const arr2Splice2 = arr2.splice(-3, 3);
console.log(arr2);

// task 3
console.log('==Task 3==');
const arr3 = [1, 2, 3, 4, 5];
const arr3Splice = arr3.splice(1, 2);
console.log(arr3);

// task 4
console.log('==Task 4==');
const arr4 = [1, 2, 3, 4, 5];
const arr4Splice1 = arr4.splice(0, 1);
const arr4Splice2 = arr4.splice(-1, 1);
console.log(arr4);

// task 5
console.log('==Task 5==');
const arr5 = [1, 2, 3, 4, 5];
const arr5Splice = arr5.splice(3, 0, 'a', 'b', 'c');
console.log(arr5);

// task 6
console.log('==Task 6==');
const arr6 = [1, 2, 3, 4, 5];
const arr6Splice1 = arr6.splice(1, 0, 'a', 'b');
const arr6Splice2 = arr6.splice(6, 0, 'c');
const arr6Splice3 = arr6.splice(8, 0, 'e');
console.log(arr6); 

// task 7
console.log('==Task 7==');
const arr7 = [1, 2, 3, 4, 5];
const arr7Slice = arr7.slice(3, 6);
console.log(arr7Slice);

// task 8
console.log('==Task 8==');
const arr8 = ['first', 'second', 'third', 'fourth', 'last'];
const arr8Slice = arr8.slice(1, 3);
console.log(arr8Slice);

// task 9
console.log('==Task 9==');
const arr9 = ['first', 'second', 'third', 'fourth', 'last'];
const arr9Reverse = arr9.reverse();
console.log(arr9);

// task 10
console.log('==Task 10==');
const arr10 = [1, 2, [3, 4, [5]], 6, 7];
const arr10Flat = arr10.flat(Infinity);
console.log(arr10Flat);

// task 11
console.log('==Task 11==');
const arr11 = [12, 'BLABLABLA', true, NaN, 231, 'secret string'];
const arr11Includes = arr11.includes('secret string');
console.log(arr11Includes);

// task 12
console.log('==Task 12==');
const arr12 = ['first', 'second', 'third', 'fourth', 'last'];
const arr12Concat = arr12.concat(1000, 2000, [[true, false]]);
console.log(arr12Concat);