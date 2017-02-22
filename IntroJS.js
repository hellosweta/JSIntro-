const uniq = function(array) {
  let arr = []

  array.forEach(function(el) {
    if (arr.includes(el)) {
    } else {
      arr.push(el)};
    }
  );
  return console.log(arr);
};

// uniq([1, 2, 3, 2])

//[2,-1,5,1,-2] => [[0,54],[1,3]]
const twoSum = function(array) {
  let indices = []
  array.forEach(function(el, index){
     for (i = index + 1; i < array.length; i++) {
       if (el + array[i] === 0){
         indices.push([index, i]);
        }
    };
  });
  return console.log(indices);
};
// twoSum([2,-1,5,1,-2])

const transpose = function(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    let inner = []

    for (let j = 0; j < array.length; j++) {
      inner.push(array[j][i]);
    };
    result.push(inner);
  };
  return console.log(result);
};

// transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
const myEach = function(array, cb) {
  for (i = 0; i < array.length; i++) {
    // console.log(array[i]);
    console.log(cb(array[i]));
  };
  return array;
};

const cb = function(arg) {
  return arg * 2;
}

myEach([1, 2, 3], cb);

// const myMap
//
// const myInject
//
// const bubbleSort
//
// const substrings
