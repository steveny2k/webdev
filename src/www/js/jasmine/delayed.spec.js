describe("Jasmine Exercise 3", function () {

  /****************************************************************************/
  describe("DelayedAdder", function () {

    /**************************************************************************/
    class DelayedAdder {
      // Returns a promise that resolves to the sum of x and y:
      add(x, y) {
        return new Promise(function (resolve, reject) {
          // if (x === 0 || y === 0) {
          //   reject('No zeroes');
          // }
          setTimeout(() => resolve(x + y), 0);
        });
      }
    }

    /**************************************************************************/
    // Example:
    it("example testing delayed adding class", function () {
      let adder = new DelayedAdder();
      let p = adder.add(1, 2);

      expect(p instanceof Promise).toBeTruthy();
    });


    /**************************************************************************/
    // Exercise 3:
    //
    // Write a test the confirms that the `add' method of the
    // `DelayedAdder' class works correctly.  Keep in mind that `add'
    // is asynchronous function and returns a promise instead of a number.
    it("should add two numbers after the delay", function (done) {
      let adder = new DelayedAdder();
      let p = adder.add(1, 2);

      p.then(function (result) {
        expect(result).toEqual(3);
        done();
      });
    });

    // it("should throw an error when we pass in any 0", function (done) {
    //   let adder = new DelayedAdder();
    //   let p = adder.add(0, 2);

    //   p.catch(function (err) {
    //     expect(err).toBeTruthy(); // any message
    //     done();
    //   });
    // });
  });
});
