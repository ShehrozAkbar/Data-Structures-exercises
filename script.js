// -------03--BIG O--------------

// const boxes = [1, 2, 3];

// for (let i = 0; i < boxes.length; i++) {
//   for (let j = 0; j < boxes.length; j++) {
//     console.log(`${boxes[i]},${boxes[j]}`);
//   }
// }

// ------------04--how to solve a problem------------
// we have 15 steps guide here to solve any problem

// let say we have 2 arrays and we want to find that weather we have any value which is oresend in both

// array1 = ["d", "y", "q", "y", "g", "d"];
// array2 = ["a", "b", "c", "q"];

// function which can retyrn true or false if there is any value which is same in both

// this function have time compalexity= O(n^2)
// function containCommonValue(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(containCommonValue(array1, array2));

//  this function have time compalexity= O(n)
// let obj = {};
// function containCommonValue2(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (!obj[arr1[i]]) {
//       obj[arr1[i]] = true;
//     }
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     if (obj[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containCommonValue2(array1, array2));

// ------------06--Arrays------------

// this is a function to reverse a string

// function reverseString(stringg) {
//   let arrStringg = stringg.split("");
//   // let arrStringg = stringg;
//   let reverse = [];
//   for (let i = arrStringg.length - 1, j = 0; i >= 0; i--, j++) {
//     reverse[j] = arrStringg[i];
//   }
//   const joinedString = reverse.join("");
//   return joinedString;
// }

// console.log(reverseString("this is the first string"));

// TASK: building an array form scratch

// class MyArray {
//   constructor(lengteh, data) {
//     this.data = {};
//     this.lengteh = 0;
//   }

//   get(index) {
//     return this.data[index];
//   }

//   // push function
//   push(str) {
//     this.data[this.lengteh] = str;
//     this.lengteh++;
//     return this.lengteh;
//   }
//   pop() {
//     const delData = this.data[this.lengteh - 1];
//     delete this.data[this.lengteh - 1];
//     this.lengteh--;
//     return delData;
//   }
//   deletee(index) {
//     const delItem = this.data[index];
//     for (let i = index; i < this.lengteh; i++) {
//       this.data[index] = this.data[index + 1];
//     }
//     delete this.data[this.lengteh - 1];
//     this.lengteh--;
//     return delItem;
//   }
// }

// const names = new MyArray();

// console.log(names);

// names.push("joia");

// names.push("wali");

// names.push("ali");

// names.push("rehman");
// console.log(names);

// names.deletee(2);
// console.log(names);

// -------TASK Merge 2 sorted arrays------
const array1 = [1, 2, 3, 4, 5, 8, 9];
const array2 = [12, 14, 17, 29, 46];

function adding2Arrays(arr1, arr2) {
  let arr1Length = arr1.length;

  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1Length] = arr2[i];
    arr1Length++;
  }
  delete arr2;
  return arr1;
}

console.log(adding2Arrays(array1, array2));
