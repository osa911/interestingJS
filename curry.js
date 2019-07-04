/**
  * 04.07.2019 osa911
  * curry() return call after get all arguments
 */
export const curry = function(fn) {
  return function fn1(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    
    return function fn2(...anotherArgs) {
      const newArgs = args.concat(anotherArgs);
      return fn1(...newArgs)
    }
  }
}

const summ = (a, b, c) => a + b + c;

const summerC = curry(summ);

console.log(summerC(1)(1,3)); // => 5
