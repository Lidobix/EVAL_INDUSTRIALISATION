// eslint-disable-next-line no-unused-vars
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index += 1;
    });
  } else {
    response = 'No argument was given to the function.';
  }
  return response;
};

// eslint-disable-next-line no-unused-vars
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  // eslint-disable-next-line no-array-constructor
  if (arrayOfNumbers.constructor.prototype === new Array().constructor.prototype) {
    response = arrayOfNumbers.map(((val) => val * 2));
    // eslint-disable-next-line no-undef
    console.log('arrayTimesTwo: ', arrayTimesTwo);
  } else {
    response = 'The argument is not an Array of numbers';
  }
  return response;
};
