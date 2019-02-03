/**
 * Extends Functions so that they have a method, curry
 *  function add (x, y, z) {}
 *  add.curry()
 * This function acts like a partial "maker", it returns a new function
 *  partialMaker = add.curry()
 * The new function will curry arguments onto the original function
 * The maker function returns a third function which represents the original
 * "curried" with arguments
 *  add10 = partialMaker(10);
 *  add10(4); // add(10, 4)
 */
Function.prototype.curry = function () {

  // Your code here.

};
