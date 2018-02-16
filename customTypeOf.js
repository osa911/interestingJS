/**
  * 16.02.2018 osa911
  * customTypeOf() return real type of argument
 */
const customTypeOf = (obj) => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

// customTypeOf({a: 2}); //"object"
// customTypeOf([1, 2, 3]); //"array"
// customTypeOf(Math); //"math"
// customTypeOf(JSON); //"json"
// customTypeOf(new Number(2)); //"number"
// customTypeOf(new String("asd")); //"string"
// customTypeOf(new Boolean(true)); //"boolean"
