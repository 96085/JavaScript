Array is collecttion of data items.
array can holds different items in js like number, string, float value.
ex- arr = ["array", 12, 5.5, "banana"];

create array.
  let array = ['ironman', 'hulk', "thor"];
  let maark = [89, 97, 48, 87, 23];
  console.log(mark);
  console.log(mark.legth);
  console.log(typeof mark);
// .length property is used to find length of the array;
// typeof property used to show what type of variable is;
*****array indices*****
  arr[0], arr[1], arr[2]...
  array index start with 0 and end with size-1.
let arr = [89, 97, 48, 87, 23];
console.log(arr[2]); 
// output is 48.
// we can also change the value of any index we want
arr[2]= 88;
console.log(arr[2]); 
// output is 88.
console.log(arr);
// output = [89, 97, 88, 87, 23].
String in JS are immutable but Array in JS are muttable.

  looping over JS.
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

For of loop in JS
for of loop is another type of loop in js 
ex- let cities = ["delhi", "mumbai", "pune", "hydrabad", "gurgaon"];
  for( let city of cities){
      console.log(city);
  }
// it will print all the value of array.
for(let city of cities){
    console.log(city.touppercase);
}
// it will print all city name in upper case


some of the array's method
  .push() // this method is used to add elements in array at the end of array.
  ex- arr.push("patna");
  .pop() // this method is used to remove elements from the end of the array.
  ex- arr.pop("patna");
  .unshift() // this method is used to add elements in array at the start of array.
  ex- arr.unshift("patna");
  .shift() // this method is used to remove elements from the start of the array.
// these all 4 method make changes in original array.

  .tostring() // this method is used to convert array values in string.
  ex- arr.tostring();

  .concat() // this method is used to add multiple arrays 
  ex- arr.concat();
// these two method makes do not cahnges in same array, it will return new array.

slice() : return a pice of the array
 slice(startIndex, endIndex);
splice() : cahnge in original array (add, remove, replace)
 slice(startIndex, delCount, newElement);

