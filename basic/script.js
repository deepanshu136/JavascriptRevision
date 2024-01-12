// const password=prompt("Please enter a new password");
// if(password.length>=6){
//     if(password.indexOf(' ')!== -1){
//         console.log("Password cannot include space");
//     }
//     else{
//         console.log("Valid Password")
//     }
// }
// else{
//     console.log("Pasword is too short");
// }


// const password=prompt("Enter your password");
// if (password.length>=6 && password.indexOf(' ') === -1){
//     console.log("VALID PASSWORD!")
// } else{
//     console.log("Incorrect format of password!")
// } 


// const age=prompt("Enter your age");
// if (age >=0 && age <5 || age >=65){
//     console.log("FREE TICKET");
// } else if(age >=5 && age <10){
//     console.log("$10")
// } else if(age >=10 && age <65){
//     console.log("$20")
// }else{
//     console.log("INVALID AGE!!!")
// }

// LOOPING IN JS
// for loop
// for(let i=1; i<=10;i++){
//     console.log(i)
// }


// for( let i=0; i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// nested loops

// for(let i=1;i<=10;i++){
//     console.log(`i is:${i}`) 
//     for(let j=1;i<=4;j++){
//         console.log(`j is:${j}`)
//     }
// }


// for of loop
// syntax
// for(variable of iterable){
//     statement 
// }
// const subreddits=["cringe","books","chicklen","funny","pics","soccer","Technology"];
// for(const subreddit of subreddits){
//     console.log(subreddit);
// }


//  nested for of loop
// const seatingChart=[
//     ['Abhishek','Akku',"Aadasrh"],
//     ["Bhargav",'Sai',"Rohan"],
//     ["Deepanshu",'Dev',"Bansal","Rohan"]
// ]


// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student)
//     }
// }


// JS Function
// syntax of function in JS
// function nameOfFunction (parameterName){
//     body
// }

// function add(a,b){
//     return a+b
// }
// console.log(add(5,6))


// function greet(person){
//     console.log(`Hi , ${person}`);
// }
// greet("Deepanshu");
// greet("Abhishek");


// function rant(message){
//     for (let i=0;i<=3;i++){
//         console.log(`${message.toUpperCase()}`)
//     }
// }
// rant("i hate you")


// multiple argument in js
// function greet(firstName,lastName){
//     console.log(`hey there, ${firstName} ${lastName}`)
// }
// greet('deepanshu','singh');


// function repeat(str,num){
//     let result='';
//     for(let i=0;i<num;i++){
//        result+=str;
//     }
//     console.log(result)

// }
// repeat("hi",3)


// define isSnakeEyes below:
// function isSnakeEyes(num1,num2){
    
//     if(num1===1 && num2===1){
//         console.log("Snake Eyes!")
//     }else{
//         console.log("Not Snake Eyes!")
//     }
// }
// isSnakeEyes(1,1)
// isSnakeEyes(1,3)


// DEFINE YOUR FUNCTION BELOW:
// function multiply(num1,num2){
//     return num1*num2
// }
// multiply(2,5)


// DEFINE YOUR FUNCTION BELOW:
// function lastElement(arr){
//     if (arr.length===0){
//         return null
//     }
//     for(let i=0;i<=arr.length;i++){
//         if (i===arr.length-1){
//             return arr[i]
//         }
//     }
// }
// const myArray = [1, 2, 3, 4, 5];
// const emptyArray = [];
// console.log(lastElement(myArray));    
// console.log(lastElement(emptyArray));  


// DEFINE YOUR FUNCTION BELOW:
// function capitalize(str){
    // if(str===0){
        // return str
    // } 
    // return str[0].toUpperCase()+str.slice(1)
//  }
//  const originalString = "hello, world";
//  const capitalizedString = capitalize(originalString);
 
//  console.log(capitalizedString);


// function sumArray(arr) {
//     let total = 0; // Initialize the total variable to zero
  
//     for (let i = 0; i < arr.length; i++) {
//       // Loop over the array and add each element to the total
//       total += arr[i];
//     }
  
//     return total; // Return the final total
//   }
  
//   // Example usage:
//   console.log(sumArray([1, 2, 3]));   // Output: 6
//   console.log(sumArray([2, 2, 2, 2])); // Output: 8
//   console.log(sumArray([50, 50, 1]));  // Output: 101


// function Scope
// function collectEggs(){
//    let totalEggs=6
// //    console.log(totalEggs)
// }
// collectEggs();
// console.log(totalEggs)


// Block Scope
// let radius=8;
// if(radius>0){
//     let pi=3.14;
//     let msg=("hi")
// }
// console.log(radius)
// console.log(pi) //her pi will show error becaue it is out of its bloc scope so it will show error
  

// lexical Scope( It refers to how variable and function scope is determined based on the physical placement of the code in the source file, as opposed to the runtime or dynamic scope.)
// function bankRobbery(){
// const heroes=['spidy','Ironman','hulk','thor']
//     function cryForHelp(){
//         function police()
//         { 
//             for(let hero of heroes){
//         console.log(`${hero} is coming your way`)
//           }
//         }
//         police()
     
    
//     }
//     cryForHelp()
// }
// bankRobbery()


// function expressisons
// const add=function(x,y){
//     return x+y;
// }
// add(2,4)


// high order function(function that operate on/with other function)they can accept other function as argument,return a function
// function callTwice(func){
//   func();
//   func();
// }

// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1
//     console.log(roll)
// }
// callTwice(rollDie)


// method
//eg1// const myMath={
//     Pi:3.14,
//     square:function(num){
//         return num*num;
//     },
//     cube:function(num){
//         return this.square(num)*num;
//     }
// }

//eg22//const square={
//     area(num){
//         return num*num ;
//     },
//     perimeter(num){
//         return num*4;
//     }
// }
// square.area(2);
// square.perimeter(2);



// this keyword in method
// const person={
//     first:"Robert",
//     last:"Smith",
//     fulName(){
//         return `${this.first} ${this.last}`
//     }
// }
// person.fulName();
// person.last='plant';
// person.fulName();



// Using try/catch in js

// try {
//     hello.toUpperCase();

// }catch{
//     console.log("ERROR..")
// }
// console.log("DEEPANSHU")


// function yell(msg){
//     try{
//     console.log(msg.toUpperCase().repeat(4))
//     }catch (e){
//         console.log("Error")
//     }
// }


// forEach revision it accept a callback function.call the function once per element in the array
//eg1// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// numbers.forEach((numbers)=>{
//  if(numbers %2===0){
//     console.log(numbers)
//  }
// })
 

// const movies=[
//     {
//         title:'Pirahana',
//         score:78
//     },
//     {
//         title:'The Shawshank Redemption',
//         score:95
//     },
//     {
//         title:"Fight Club",
//         score:85
//     },
//     {
//         title:"Inception",
//         score:90
//     },
//     {
//         title:"Interstellar",
//         score:80
//     },
//     {
//         title:"Django Unchained",
//         score:90
//     },
    
    
// ]

// movies.forEach((movie)=>{
//     console.log(`${movie.title}-${movie.score}/100`)


// use of map (In JavaScript, the map method is used with arrays to create a new array by applying a function to each element in the original array. It is a non-destructive method, meaning it doesn't modify the original array but instead generates a new array with the modified elements. The map method is commonly used for transforming data, filtering data, or creating new arrays based on the original array's elements.)
// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// const nums=numbers.map(function(t){
//     // if(t%2===0){
//     //     console.log(t)
//     // }
//     return t*2;
// })
// console.log(nums)


// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// numbers.forEach((numbers)=>{
//  if(numbers %2===0){
//     console.log(numbers)
//  }
// })
 

// const movies=[
//     {
//         title:'Pirahana',
//         score:78
//     },
//     {
//         title:'The Shawshank Redemption',
//         score:95
//     },
//     {
//         title:"Fight Club",
//         score:85
//     },
//     {
//         title:"Inception",
//         score:90
//     },
//     {
//         title:"Interstellar",
//         score:80
//     },
//     {
//         title:"Django Unchained",
//         score:90
//     },
    
    
// ]

// // movies.forEach((movie)=>{
// //     console.log(`${movie.title}-${movie.score}/100`)
// // })

// const titles=movies.map(function(movie){
//     return movie.title.toUpperCase();
// })


// const fullNames = [
//     {
//         first: 'Albus',
//         last: 'Dumbledore'
//     },
//     {
//         first: 'Harry',
//         last: 'Potter'
//     },
//     {
//         first: 'Hermione',
//         last: 'Granger'
//     },
//     {
//         first: 'Ron',
//         last: 'Weasley'
//     },
//     {
//         first: 'Rubeus',
//         last: 'Hagrid'
//     }, 
//     {
//         first: 'Minerva',
//         last: 'McGonagall'
//     }, 
//     {
//         first: 'Severus',
//          last: 'Snape'
//     }
// ];
// const firstNames=fullNames.map(function(name){
//     return name.first;
// })
// console.log(firstNames)


// Arrow functions
// ((parameter1, parameter2, ..., parameterN) => expression)
// const numbers=[1,2,3,4,56];
// const double=numbers.map((number)=>{
//     number*3
// })
// console.log(double)

// const square=(x)=>{
//     return x*2
// }
// console.log(square)



// Arrow function implicit return
//(Implicit return in JavaScript refers to the feature where an arrow function can automatically return a value without explicitly using the return keyword. It works when the arrow function body contains a single expression or statement.)

// const rollDie=()=> Math.floor(Math.random()*6)+1

// Arrow function wrapup
// const movies=[
//     {
//         title:'Nadiya ke Paar',
//         score:84
//     },
//     {
//         title:'Janzeer',
//         score:65
//     },
//     {
//         title:'Dilwale Dulhania Le Jayenge',
//         score:90
//     }
// ]
// // const picture=movies.map(function(movie){
// //     return movie.score
// // })
// // console.log(picture)
// const picture=movies.map(movie=>{
//     return movie.title
// })


// setTimeoout function in JS(it acetps two things >Callback >millisecond)
//  setTimeout(()=>{
//     console.log("Hello!!!")
//  },3000)


// similarly we have set intervals

// const id=setInterval(()=>{
//     console.log(Math.random())
// },2000)
// clear interval to stop the interval


// filter method(creates new array with all elements that pass the test implemented by the provided function )
// const nums=[1,2,34,5,6,78,9,10]
// const even=nums.filter(n=>{
//     return n%2===0;
// })
// console.log(even)


// some and every keyword in js()The some method checks if at least one element in the array satisfies the given condition. It stops iterating as soon as it finds such an element and returns true. If no elements satisfy the condition, it returns false. and EVERY(The every method checks if all elements in the array satisfy the given condition. It stops iterating as soon as it finds an element that does not satisfy the condition and returns false. If all elements satisfy the condition, it returns true.)
// const words=['dog','jello','log','cupcake','bag','wag']

// words.some(word=>{
//     return word.length>4;
// })

// words.some(word=>word[0]==='Z');
// words.some(w=>w.includes('cake'))


// function allEvens(numbers) {
//     return numbers.every(function(num) {
//       return num % 2 === 0;
//     });
//   }
  
//   console.log(allEvens([2, 4, 6, 8]));  
//  console.log(allEvens([1, 4, 6, 8]));  
//   console.log(allEvens([1, 2, 3]));  
  
  

// use of reduce method in javascript(takes som part of array and reduce it into one value)
// const prices=[9.99,899.9,12.3,45.7];
// let total=0;
// for(let price of prices){ 
//    total+=price
// }
// console.log(total)


// const total=prices.reduce((total,price)=>{
//     return total * price
// })
// const minPrice=prices.reduce((min,price)=>{
//     if(price<min){
//         return price
//     }
//     return min
// })



// const movies=[
//     {
//         title:'Nadiya ke Paar',
//         score:84,
//         year:1984
//     },
//     {
//         title:'Janzeer',
//         score:65,
//         year:2000
//     },
//     {
//         title:'Dilwale Dulhania Le Jayenge',
//         score:90,
//         year:1995
//     }
// ]
// const highestRated=movies.reduce((bestMovie,currMovie)=>{
//     if(currMovie.score>bestMovie.score){
//         return currMovie
//     }
//     return bestMovie
// })


// ARROW FUNCTION AND this
// const person={
//     firstName:'Jacob',
//     lastName:'Lucifer',
//     fullName:function(){
//          return`${this.firstName} ${this.lastName}`
//     },

    
//     shoutName:function(){
//         setTimeout(()=>{
//             console.log(`HELLO I AM ${this.fullName()}`)
//         },3000)
//     }     

// }


// default params
// function addNumbers(a,b=10,c=20){
//     return a+b+c;
// }
// console.log(addNumbers(5));  


// use of spread(...) in  Copying Arrays and Objects:, Concatenating Arrays:,Passing Function Arguments:,Rest Parameters:,Merging Objects:,Destructuring Arrays:,(it passes array element as a seperate argument)
// const originalArray=[1,2,3,4,5,6,7]
// const copiedArray=[...originalArray]
// console.log(originalArray)

// const originalObject={a:5,c:7}
// const copiedObject={...originalObject}

// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// const mergedArr=[...arr1 , ...arr2]

// function sum(a,b,c){
//     return a + b + c
// }
// const numbers=[1,2,3]
// const result=sum(...numbers)


// const obj1={a:1,b:2};
// const obj2={b:3,c:4};
// const mergedObject={...obj1, ...obj2};
// console.log(mergedObject);


// const numbers=[1,2,3,4,5];
// const [first, second, ...rest]=numbers;

// console.log(first);
// console.log(second);
// console.log(rest);




