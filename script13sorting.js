// bubble sort

function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// let array = [21, 19, 14, 21, 36, 54, 100, 26, 40];

// console.log(bubbleSort(array));

// selection sort

function selectSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let small = arr[i];
    for (let j = i + 1; j < length; j++) {
      let next = arr[j];
      if (small > next) {
        small = next;
      }
    }
    arr[i] = small;
  }
  return arr;
}

// console.log(selectSort(array));

// insertion sort (youtube solution)
// Javascript Freecodecamp Algorithm #33: Implement Insertion Sort
let array = [21, 19, 14, 21, 36, 54, 100, 26, 40];

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertSort(array));

// these both sorting algorithms use divide and qunquure technique to sort thungs out

// merge sort (we find the center and dive the dataa by two and and divide both of the parts by two and we divide them until each element is aeperated from each other and then we sort it)

// quick sort (we have to find the pivot init and place the small indexes to the left and the large indexes to the right of the pivot)
// Note: pivot here is the random value or index which you choose.
