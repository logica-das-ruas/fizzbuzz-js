fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {
        console.log('Fizz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(number.toString());
    }
}

fizzBuzz(3)
fizzBuzz(4)
fizzBuzz(5)
fizzBuzz(12)
fizzBuzz(15)