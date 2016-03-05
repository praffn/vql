'use strict'; // eslint-disable-line

function createCallback (callback, thisArg) {
  if (thisArg === undefined) {
    return callback;
  }
  return function (value, index, array) {
    callback.call(thisArg, value, index, array);
  };
}

exports.concat = function (list, otherList) {
  var pad = list.length;
  var length = otherList.length;
  while (length--) {
    list[pad + length] = otherList[length];
  }
  return list;
};

exports.forEach = function (array, callback, thisArg) {
  var func = createCallback(callback, thisArg);
  var index = -1;
  var length = array.length;
  while (++index < length) {
    if (func(array[index], index, array) === false) {
      break;
    }
  }
  return array;
};

exports.indexOf = function (array, value) {
  var index = -1;
  var length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
};

exports.fill = function (array, value) {
  var index = -1;
  var length = array.length;
  var tmp = [];
  while (++index < length) {
    tmp[index] = value;
  }
  return tmp;
};
