calculaFizzBuzz = (number) => {
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

calculaFizzBuzz(3)
calculaFizzBuzz(4)
calculaFizzBuzz(5)
calculaFizzBuzz(12)
calculaFizzBuzz(15)
