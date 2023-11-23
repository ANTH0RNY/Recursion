function loopFib(num) {
  let fib = [0, 1];
  if (fib.length > num) {
    if (num === 0 || num === 1) {
      console.log(fib[num]);
      return;
    }
    console.log("Error with argument given");
    return;
  }
  let prevIndex = 0;
  let currentIndex = 1;
  for (let i = 0; i < num - 2; ++i) {
    fib.push(fib[i] + fib[i + 1]);
  }
  console.log(fib);
}

function recursiveFib(num) {
  if (num <= 1) return num;
  return recursiveFib(num - 1) + recursiveFib(num - 2);
}
// console.log(`${recursiveFib(0)}`);
// console.log(`${recursiveFib(1)}`);
// console.log(`${recursiveFib(2)}`);
