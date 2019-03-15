function isBalanced(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{') {
      arr.push(string[i]);
    } else if (string[i] === '}') {
      const canPop = arr.pop();
      if (!canPop) {
        return false;
      }
    }
  }
  return arr.length === 0 ? true : false;
}

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const computedValues = [0, 1];

function fib(n) {
  if (n >= 0) {
    if (computedValues[n]) {
      return computedValues[n];
    }
    computedValues[n] = fib(n - 1) + fib(n - 2);
    return computedValues[n];
  }
  return 0;
}

function isBalanced2(string) {
  const arr = [];
  const lookupSymbols = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '(' || string[i] === '[') {
      arr.push(string[i]);
    } else if (string[i] === '}' || string[i] === ')' || string[i] === ']') {
      const canPop = arr.pop();
      if (canPop !== lookupSymbols[string[i]]) {
        return false;
      }
    }
  }
  return arr.length === 0 ? true : false;
}

function unique(array) {
  const map = new Map();
  const uniqArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!map.get(array[i])) {
      map.set(array[i], array[i]);
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
}

function intersection(arr1, arr2) {
  const commonArray = [];
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (map.get(arr2[i])) {
      commonArray.push(arr2[i]);
    }
  }
  return commonArray;
}

function includes(array, value) {
  const middle = Math.floor(array.length / 2);
  if (value === array[middle]) {
    return true;
  } else if (value > array[middle]) {
    return includes(array.slice(middle + 1, array.length), value);
  } else if (value < array[middle]) {
    return includes(array.slice(0, middle), value);
  }
  return false;
}

function objectCopy(sourceObj, targetObj) {
  for (let prop in sourceObj) {
    if (typeof sourceObj[prop] === 'object') {
      if (typeof targetObj[prop] !== 'object') {
        targetObj[prop] = {};
      }
      objectCopy(sourceObj[prop], targetObj[prop]);
    } else {
      targetObj[prop] = sourceObj[prop];
    }
  }
}

function assignDeep(obj1, obj2) {
  const copyObj = new Object();
  objectCopy(obj1, copyObj);
  objectCopy(obj2, copyObj);
  return copyObj;
}

function reduce(array, reduceFunction, initialValue) {
  let accumulator = 0;
  for (let i = 0; i < array.length; i++) {
    accumulator = reduceFunction(accumulator, array[i]);
  }
  return accumulator + initialValue;
}

async function reduceAsync(array, reduceFunction, initialValue) {
  let accumulator = 0;
  for (let i = 0; i < array.length; i++) {
    const el = await(array[i]());
    console.log(el);
    accumulator = reduceFunction(accumulator, el);
  }
  return accumulator;
}

const sum = (x, y) => {
  if (y) {
    return x + y;
  } else {
    return (y) => x + y;
  }
}

class Person {
  constructor(name) {
    this.x = name;
  }

  get name() {
    return this.x.toUpperCase();
  }

  set name(newName) {
    this.x = newName;   // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this.x + ' is walking.');
  }
}
