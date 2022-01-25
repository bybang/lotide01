// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKey
const findKey = (obj, callback) => {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      // find the key that matches first
      return key;
    }
  }
};

// test code
console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
); // => "noma"
console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 4 },
      elBulli: { stars: 3 },
      Ora: { stars: 3 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
); // => undefined
