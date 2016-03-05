/* eslint-env mocha */
var expect = require('chai').expect; // eslint-disable-line

var vql = require('../vql.js');

describe('concat', function () {
  it('should concatinate two arrays', function () {
    var array1 = [0, 1, 2, 3, 4];
    var array2 = [5, 6, 7, 8, 9];
    var combinedArray = vql.concat(array1, array2);
    expect(combinedArray).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('forEach', function () {
  it('should execute provided function for each list item', function () {
    var array = [1, 2, 3, 4, 5];
    var sum = 0;
    var iterations = 0;
    var checker;
    vql.forEach(array, function (value, key, arr) {
      sum += value;
      iterations++;
      checker = arr;
    });
    expect(sum).to.equal(15);
    expect(iterations).to.equal(array.length);
    expect(checker).to.equal(array);
  });
});

describe('indexOf', function () {
  it('should return the first index at which a given element is found', function () {
    var array = ['hello', 'darkness', 'my', 'old', 'friend'];
    var index = vql.indexOf(array, 'darkness');
    expect(index).to.equal(1);
  });

  it('should return -1 when no element was found', function () {
    var array = ['hello', 'darkness', 'my', 'old', 'friend'];
    var index = vql.indexOf(array, 'talk');
    expect(index).to.equal(-1);
  });
});

describe('fill', function () {
  it('should fill an array with given value', function () {
    var array1 = new Array(3);
    var array2 = [3, 4, 2, 3];
    var sheepArray = vql.fill(array1, 'sheep');
    var cowArray = vql.fill(array2, 'cow');
    expect(sheepArray).to.deep.equal(['sheep', 'sheep', 'sheep']);
    expect(cowArray).to.deep.equal(['cow', 'cow', 'cow', 'cow']);
  });
});
