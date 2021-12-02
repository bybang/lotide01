// FUNCTION IMPLEMENTAITON
const eqObjects = function(object1, object2) {
  let firstKeys = Object.keys(object1);
  let secondKeys = Object.keys(object2);
  if (firstKeys.length === secondKeys.length) {
    for (let key of firstKeys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else if (object1[key] !== object2[key]) return false;
    }
    return true;
  }
  return false;
};

const eqArrays = (fristArray, secondArray) => {
  if (fristArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < fristArray.length; i++) {
    if (fristArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

// Assert Object Equal
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(ab, cd);

