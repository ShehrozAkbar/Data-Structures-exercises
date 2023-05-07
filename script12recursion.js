// write a function to find factorial using recursion

function findFactorial(num) {
  if (num === 1) {
    return num;
  }
  return num * findFactorial(num - 1);
}

// console.log(findFactorial(4));

// write a function to find factorial using loop

function findFactorialFor(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}

// console.log(findFactorialFor(4));

//  write a functoion to find the value at the given index in the fibonaci series using RECURSION
function findFibonachiRecursion(n) {
  if (n < 2) {
    return n;
  }
  return findFibonachiRecursion(n - 1) + findFibonachiRecursion(n - 2);
}

// console.log(findFibonachiRecursion(8));
//  write a functoion to find the value at the given index in the fibonaci series using ITERATION

function findFibonachiLoop(n) {
  const fibonaciSeries = [0, 1];
  if (n < 2) {
    return n;
  }
  let a = 0;
  let b = 1;

  for (let i = 0; i < n - 1; i++) {
    let c = b;
    b = b + a;
    a = c;
    fibonaciSeries.push(b);
  }
  return console.log(
    "this is the series :[" +
      fibonaciSeries +
      "] and the value at index " +
      n +
      " is :" +
      b
  );
}

// findFibonachiLoop(43);

// a function which return 2 values swaped without using any 3rd variable
//            4,6
function swap(a, b) {
  console.log(`before swap a = ${a}, and b = ${b}`);
  a = a + b; //10
  b = a - b; //4
  a = a - b; //6

  return console.log(`after  swap a = ${a}, and b = ${b}`);
}

// swap(4, 6);
