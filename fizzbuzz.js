const num = 100;

function fizzBuzz(num) {
  let i = 0;

  for (i; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`Fizzbuzz`);
    } else if (i % 3 == 0) {
      console.log(`Fizz`);
    } else if (i % 5 == 0) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(num);
