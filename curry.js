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
