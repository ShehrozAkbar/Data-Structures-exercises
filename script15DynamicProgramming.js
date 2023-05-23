let count = 0;
let count2 = 0;
// fibanaci using recursion

function fibonachiR(n) {
  count++;
  if (n < 2) {
    return n;
  }
  return fibonachiR(n - 1) + fibonachiR(n - 2);
}

console.log("using simple recursion: " + fibonachiR(10));
console.log(`number of times calculations happen:` + count);

//  dynamic programming implementation starts

// a function which returns a total value after adding with 50

function addWith50Master(n) {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      console.log("first time");
      cache[n] = n + 50;
      return cache[n];
    }
  };
}

let adding = addWith50Master();

// fibonachi using dynamic programing

function fibonachiDynamicMaster() {
  let cache = {};

  return function fib(n) {
    count2++;
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

let fibNumber = fibonachiDynamicMaster();
console.log("using dynamic programming in recusion: " + fibNumber(10));
console.log(`number of times calculations happen:` + count2);
