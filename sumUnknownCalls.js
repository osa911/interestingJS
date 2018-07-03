/**
  * 03.07.2018 osa911
  * sumUnknownCalls() return sum of 
 */
const sumUnknownCalls = (n, f) => (f = (m) => sumUnknownCalls(n + m), f.toString = () => n, f);

// sumUnknownCalls(1)(2)(3); // 6
// sumUnknownCalls(1)(2)(3)(2)(1)(261); // 270
