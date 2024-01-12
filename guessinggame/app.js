let maximum=parseInt(prompt("Enter the maximum no."));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid no."));
}

const targetNum=Math.floor(Math.random()*maximum)+1; 
// console.log(targetNum );

let guess=parseInt(prompt("enter your guess"));
let attempts=1

while(parseInt(guess)!==targetNum){
    if(guess==='q')break;
    guess=parseInt(guess);
    // attempts+=1
  if(guess>targetNum){
    guess=prompt("Too high! Enter new Guess");
    attempts++;
  }else if(guess<targetNum) {
    guess=prompt("Too low! Enter new guess");
    attempts++;
  }else{
    guess=prompt("Invalid guess,Please enter a valid no. or'q' to quit")
  }
}
if(guess==='q'){
    console.log("You Quit")
}else{
    console.log("congo you win")
console.log(`You got it! It took you ${attempts} guess`)
}