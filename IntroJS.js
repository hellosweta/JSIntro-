
const uniq = function(array) {
  let arr = [];

  array.forEach(function(el) {
    if (arr.includes(el)) {
    } else {
      arr.push(el);
    }
  }
  );
  return arr;
};

// uniq([1, 2, 3, 2])

//[2,-1,5,1,-2] => [[0,54],[1,3]]
const twoSum = function(array) {
  let indices = [];
  array.forEach(function(el, index){
     for (let i = index + 1; i < array.length; i++) {
       if (el + array[i] === 0){
         indices.push([index, i]);
        }
    }
  });
  return indices;
};
// twoSum([2,-1,5,1,-2])

const transpose = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let inner = [];

    for (let j = 0; j < array.length; j++) {
      inner.push(array[j][i]);
    }
    result.push(inner);
  }
  return result;
};


const callback = function(arg) {
  return (arg * 2);
};

// transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
const myEach = function(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
  return array;
};

// myEach([1, 2, 3], callback);

const myMap = function(array, cb) {
  let arr = [];
  myEach(array, function(el){
    arr.push(cb(el));
  });
  return arr;
};

myMap([1, 4, 5], callback);

const myInject = function(array, accumulator=null, cb) {
  let partialArray = array;
  if (accumulator === false) {
    accumulator = self[0];
    partialArray = self[1..array.length - 1];
  }

  myEach(partialArray, function(el) {
    accumulator = cb(accumulator, el);
  });
  return accumulator;

};
// console.log(myInject([1, 2, 3], 2, function(acc, el) {return acc + el;}));

  /*def inject(accumulator, array, &prc)
      if accumulator.nil?
        paratial_array = array[1..-1]
        accumulator = array[0]
      else
        paratial_array = array
      end

      paratial_array.each do |x|
      accumulator = prc.call(accumulator, el)
      end
      accumulator
*/
const sort = function(left, right) {
  if (left < right) {
    return (-1);
  } else if (right < left) {
    return (1);
  } else {
    return 0;
  }
};

const bubbleSort = function(array, cb = sort) {
  let len = array.length - 2;
  let sorted = false;

  for (let i = 0; i <= len; i++) {
    if (sorted) {
      break;
    } else {
      if (cb(array[i], array[i + 1]) === 1) {
        let a = array[i];
        let b = array[i + 1];
        array[i] = b;
        array[i + 1] = a;
        sorted = false;
      }
    }
  }
  return array;
};

// console.log(bubbleSort([5, 2, 3, 4]));

/*

def self.bubble_sort!(array, &prc)
  prc ||= Proc.new {|x, y| x <=> y}
  len = array.length - 1
  sorted = false

  until sorted
    sorted = true
    (0...len).each do |idx|
      if prc.call(x, y) == 1
        array[idx], array[idx + 1] = array[idx + 1], array[idx]
        sorted = false
      end
    end
  end

  array
end

*/

const substrings = function(string){
  let result = [];
  for (let i = 0; i < string.length -1; i++){
    for (let j = i; j < string.length; j++){
      result.push(string.slice(i,j+1));
    }
  }
  return result;
};

console.log(substrings("cat"));

/* cat > ["c", "ca", "cat"]


def substring(string)
  i = 0
  output = []
  while i < length
    j = i + 1
    while j < length
    output << string[i..j]

end
*/

const range = function(array, start, end) {
  if (end < start) {
    return [];
  } else if ( end === start) {
    return [array[start]];
  } else {
    return [array[start]] + range(array, start + 1, end);
  }
 };
console.log(range([1,2,4,7,3], 1, 3));
console.log(range([1,2,4,7,3], 3, 3));
console.log(range([1,2,4,7,3], 4, 3));

/* def range(start, end)

    return
  end
*/
