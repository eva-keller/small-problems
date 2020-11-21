//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }

  printOdd(100);

  function printEven(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }

  printEven(100);
