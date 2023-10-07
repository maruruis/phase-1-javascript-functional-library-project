function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    } else {
      throw new TypeError("Invalid collection type. Expected an array or object.");
    }
  
    return collection;
  }
  function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      const resultArray = [];
      for (let i = 0; i < collection.length; i++) {
        const transformedValue = callback(collection[i], i, collection);
        resultArray.push(transformedValue);
      }
      return resultArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const resultArray = [];
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          const transformedValue = callback(collection[key], key, collection);
          resultArray.push(transformedValue);
        }
      }
      return resultArray;
    } else {
      throw new TypeError("Invalid collection type. Expected an array or object.");
    }
  }
  function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      const resultArray = [];
      for (let i = 0; i < collection.length; i++) {
        const transformedValue = callback(collection[i], i, collection);
        resultArray.push(transformedValue);
      }
      return resultArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const resultArray = [];
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          const transformedValue = callback(collection[key], key, collection);
          resultArray.push(transformedValue);
        }
      }
      return resultArray;
    } else {
      throw new TypeError("Invalid collection type. Expected an array or object.");
    }
  }
  function myReduce(collection, callback, acc) {
    const hasAcc = arguments.length === 3;
  
    if (Array.isArray(collection)) {
      let startIndex = 0;
      if (!hasAcc) {
        acc = collection[0];
        startIndex = 1;
      }
  
      for (let i = startIndex; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
  
      if (!hasAcc) {
        acc = collection[keys[0]];
      }
  
      for (const key of keys) {
        if (hasAcc || key !== keys[0]) {
          acc = callback(acc, collection[key], collection);
        }
      }
    } else {
      throw new TypeError("Invalid collection type. Expected an array or object.");
    }
  
    return acc;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (const key of keys) {
        if (predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    } else {
      throw new TypeError("Invalid collection type. Expected an array or object.");
    }
    return undefined;
  }
  function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      const resultArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          resultArray.push(collection[i]);
        }
      }
      return resultArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const resultArray = [];
      const keys = Object.keys(collection);
      for (const key of keys) {
        if (predicate(collection[key], key, collection)) {
          resultArray.push(collection[key]);
        }
      }
      return resultArray;
    } else {
      throw new TypeError("Invalid collection type. Expected an array or object.");
    }
  }
  function mySize(collection) {
    if (Array.isArray(collection) || (typeof collection === 'string')) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      throw new TypeError("Invalid collection type. Expected an array, string, or object.");
    }
  }
  function myFirst(array, n) {
    if (!Array.isArray(array)) {
      throw new TypeError("Invalid input. Expected an array.");
    }
  
    if (typeof n === 'undefined') {
      return array[0];
    } else if (typeof n === 'number' && n >= 0) {
      return array.slice(0, n);
    } else {
      throw new TypeError("Invalid value for n. Expected a non-negative number.");
    }
  }
  function myLast(array, n) {
    if (!Array.isArray(array)) {
      throw new TypeError("Invalid input. Expected an array.");
    }
  
    const length = array.length;
  
    if (typeof n === 'undefined') {
      return array[length - 1];
    } else if (typeof n === 'number' && n >= 0) {
      if (n === 0) {
        return [];
      }
      if (n >= length) {
        return array.slice();
      }
      return array.slice(length - n);
    } else {
      throw new TypeError("Invalid value for n. Expected a non-negative number.");
    }
  }
  function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Invalid input. Expected an object.');
    }
  
    const keysArray = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keysArray.push(key);
      }
    }
  
    return keysArray;
  }
  function myValues(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Invalid input. Expected an object.');
    }
  
    const valuesArray = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        valuesArray.push(obj[key]);
      }
    }
  
    return valuesArray;
  }