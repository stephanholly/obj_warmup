// Object

var numbers = {
  10: 10,
  num: 13,
  anotherKey: 34,
  undefined: 12,
  blue: 98
};

// FIND THE AVERAGE OF THE NUMBERS

var sum = 0;
var num = 0;
for (var key in numbers) {
  sum += numbers[key];
  num += 1;
  var answer = sum/num;
}
console.log(answer);


// PUT THE VALUES INTO A NEW ARRAY

var arr = [];
for (var key in numbers) {
  arr.push(numbers[key]);
}
console.log(arr);


// SUBRACT THE ODD VALUES FROM THE EVEN

even = 0;
odd = 0;
for (var key in numbers) {
  if (numbers[key] % 2 ===0) {
    even += numbers[key];
  } else {
    odd += numbers[key];
  }
  var answer = even - odd;
}
console.log(answer);


// SQUARE ALL THE VALUES

for (var key in numbers) {
  console.log(Math.pow(numbers[key],2));
}
