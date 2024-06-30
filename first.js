// // print string 
// start ="Welcome"; //this is a string
// console.log(start); // this will print welcome.

// // now we concatinate different string
// Name = "Aquib rabbani ";
// Variable = "Start learning JavaScript";
// console.log(start+" "+Name+Variable); 

// this will print Aquib rabbani start learning JavaScript.

// console.log("Do Fast"); //this will print simply "Do fast"


// n1="25"; // it is a string
// n2=26; // this is number
// console.log(n1+n2); // this will print 2526 beacuse 25 is a sting and 26 is a number.
// // any thing written in "" is called as string.

// isFollow= false; 
// console.log(isFollow);

// // let is a mordern javascript which can be update but can not re-decleare.
// let a = 45; 
// let b = 54;
// console.log(a+b);

// // let Variable can be passed
// let c;
// console.log(c); // it will print undefined beacuse we have not initialized value for c.

// // const can not be re-declare and also can not be update . it is also a mordern js.
// //in const type varialbe can not be passed
// // if we donot initialize value it will trough error 
// const d=6;
// console.log(d);

// // there are basically two types of data type in JS.
// // 1. Premitive - it pre defined data types in JS.
// // 2. Non-Premitive - it is a user defined data types.
 
// //1. Premitive Data type.
// //1.1Numerical data type.
// let price1 = 25;
// let price2 = 24.5;
// let price3 = 24.333;

// //1.2 string data type.
// let fullName = "Aquib"; // it can be written in single '' cots also.

// isFollow = true; //it s a boolean type.

// //1.3 undefined type.
// let X;
// // here we have no value for x, so it is a undefined type.

// //1.4 Null type.
// let x = null; //it is also called object.

// //1.4 BigInt
// let q = BigInt("123");
// console.log(q); // output is 123n.

// // 1.5symbol.
// let y = Symbol("Hey this is Aquib");
// console.log(y); // output of this code is- Symbol(Hey this is Aquib)

// // 2. Non-Premitive.
// // 2.1 object.

// /*obejct syntax
// let/const objectName = {
//     key:value,
//     key:value,
//     key:value,
// }
// console.log(object); // if to print all value of object
// console.log(object.key); // if to print any specifc key*/

// let student = {
//     name: "Aquib Rabbani",
//     rollNum: 2002920100018,
//     age: 21,
//     marksBtech: 70, //70%.
//     isPass: true,
//     remarks: "Good"
// };
// console.log(student); // it will print all information about student
// console.log(student.name); // it will print only name of student
// console.log(student.remarks); // it will print remaks given to students

// // operator
// // 1. Aerthmetic Operator (+, -, *, /, %, **)
// // 2. Unary Operator ((+1, ++) increment operator, (-1, --) decrement operator)
// // 3. Assingment Operator (=, +=, -=, *=, /=, %=, **=)
// // 4. Comparision Operator (==, ===, !=, !==, >, >=, <, <=)
// // 5. Logical Operator (logical and (&), logical or (||), logical not (!) )
// // 6.Ternary Operator (a?b:c) 
// // example - 
// // let age =25;
// // age>18?"adult":"not adult"

// // Conditional Statment
// // Syntax
// //  1.  if(statment){
// //     body
// // }
// let sam = 45;
// if(sam>50){
//     console.log(sam);
// }
// // 2. if(statment){
// //     body
// // }
// // else{
// //     body
// // }
// let sajid = 50;
// let faizan = 100;
// if (faizan<sajid){
//     console.log(sajid);
// }
// else{
//     console.log(faizan);
// }
// // 3. El-if
// // if(statment){
// //     body
// // }
// // else if{

// // }
// // else if{

// // }
// // else{
// // let marks = prompt("Enter makrs"); // it takes input from user
// // if (marks>90){
// //     console.log("OutStanding");
// // }
// // else if(marks>81 && marks <90){
// //     console.log("Excellent");
// // }
// // else if(marks>71 && marks <80){
// //     console.log("V.Good");
// // }
// // else if(marks>61 && marks <70){
// //     console.log("Good");
// // }
// // else if(marks>51 && marks <60){
// //     console.log("SatisFactory");
// // }
// // else if(marks>33 && marks <50){
// //     console.log("Pass");
// // }
// // else{
// //     console.log("fail");
// // }

// // }
// // 4. if else if lader.
// // if(statment){
// //     if(statment){
// //         body
// //     }
// //     else{
// //         body
// //     }
// // }
// // else{
// //     if(statment){
// //     body
// //     }
// //     else{

// //     }
// // }
// // let obtainMarks = prompt("Enter obtain marks");
// // if (obtainMarks>90){
// //     if(obtainMarks>=95){
// //         console.log("Dubai");
// //     }
// //     else{
// //         console.log("Qatar");
// //     }
// // }
// // else{
// //     if(obtainMarks>70){
// //         console.log("Goa");
// //     }
// //     else{
// //         console.log("Home Party");
// //     }
// // };
// // loops
// for loop
// for(let i=0; i<n; i++){
//     if(statement){
//         body
//     }
//     else{
//         body
//     }
// }

// while loop
// initialization
// // condition{
//     body
//     increment
// }

// do while loop
// do statment{
//     Body
//     increment
// }
// condition


// // Arrays
// // Arrays is collection of simillar data items.
// let heroes = ["ironman", "hulk", "thor", "capton america", "black panthar"];
// console.log(heroes); // this will give all item of array.
// console.log(Headers.length);
// console.log(heroes[2]);//arrays index starts with 0 and end with size-1.
// console.log(typeof heroes);
// heroes[2] = "Gor";
// console.log(heroes);
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// // Some Special loop in JavaScript 
// // for of loop
// // for in loop
// // for each loop

// 1. for of loop
// for(let hero of heroes){
//     console.log(hero);
// }