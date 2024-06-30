                                                                                     Start,
                                                                     JavaScript is a programing language also called as a scripting language.
                                                                     Js is used in development as well as solving problems on tree, graph, DFS, and many algorithms,
                                                                     JS is used by large no of companaies to build attractive websites.
                                                                      js is one of fastes and having largest no of users.
***********************************************************************************************************************************************************************************************************************
to print anything we use console.log in js
ex- console.log("Intment Technology");
it will print Intment Technology on computer screen.
  Any thing which is written inside "" it will reflected same on screen.
  to run js file on browser, we need to connect it with HTML file by using script tag,
  <script src="main.js"><scropt>.
  .js is extension of js file, main is just name we can take any other name like one, script,etc.
  *********************************************************************************************************************************************************************************************************************
                                                                                        variable in js
 varibale is nothing but a container in js, it just hold assing value
fullName = "Intment-Technology";
here, fullName is a container which is called variable in JS.
  some more example -
age = 24;
price = 999;
rupee = 25.6;
isPass= false;
X = null;
Y = undefined;
note :- any thing which is store in "" called string.
        varilbe which containes 24 or other number value called number type varible.
        isPass is boolean type varible which can contains only true or flase value.
        X is null type varible which means absence of any object value.
        Y varibale represent undefined value which means value is not decleare yet.
  note- varible name can be anythig but there should not be any space in varibale name 
        Names can contain letters, digits, underscores, and dollar signs.
        Names must begin with a letter.
        Names can also begin with $ and _ (but we will not use it in this tutorial).
        Names are case sensitive (y and Y are different variables).
        Reserved words (like JavaScript keywords) cannot be used as names.
          fullName is a camelcase type name it mostly used in js.

  let  var const.
          var- var type varibale can be redecleare & update and its scope is global it can be access any where within the {}.
          let - let type variable can not be redecleare but can be update and it is local scope, it can not be access any where in {}.
          const - const type variable can not be redecleare and can not be update and it is local scope, it can not be access any where in {}.

            note- let and const are morder js 
                  ES6 - 2015 mordern JS.
*********************************************************************************************************************************************************************************************************************
                                                                                              DataTypes in Js
there are two types of data types
1. Premetive
2. Non-premetive (refrence)
    1. Premetive:-
                    Number
                    Bigint
                    Boolean
                    Undefined
                    Null
                    BigInt
    2. Non-premetive:-
                    Arrays
                    Function
                    Object

example:- 
        // Numbers:
        let length = 16;
        let weight = 7.5;
        
        // Strings:
        let color = "Yellow";
        let lastName = "Johnson";
        
        // Booleans
        let x = true;
        let y = false;
        
        // Object:
        const person = {
          firstName:"John",
          lastName:"Doe"
        };
        
        // Array object:
        const cars = ["Saab", "Volvo", "BMW"];
        
        // Date object:
        const date = new Date("2022-03-25");
********************************************************************************************************************************************************************
                                                                Operators in Js
 
 1. Aerthmetic Operator (+, -, *, /, %, **)
 2. Unary Operator ((+1, ++) increment operator, (-1, --) decrement operator)
 3. Assingment Operator (=, +=, -=, *=, /=, %=, **=)
 4. Comparision Operator (==, ===, !=, !==, >, >=, <, <=)
 5. Logical Operator (logical and (&), logical or (||), logical not (!) )
 6.Ternary Operator (a?b:c) 
 example - 
 let age =25;
 age>18?"adult":"not adult"
