//this is class based approach
// class Color{
//     constructor(name,rgb){
//         this.name=name;
//         this.rgb=rgb;
//     }
// }

// const navColor=new Color('carrort',[230,126,34]);
// const logoColor=new Color('emerald',[46,204,113]);
// console.log(navColor);
// console.log(logoColor);


//now i will do the same thing with function based approach
// function  Color(name,rgb){
//  this.name=name;
//  this.rgb=rgb;
// }
// const navColor =new Color("coral", [255,82,82])
// console.log(navColor)
// const logoColor=new Color('emerald',[46,204,113]);
// console.log(logoColor);


//  function color(r,g,b){
//     this.r=r;
//     this.g=g;
//     this.b=b;
// }


// color.prototype.rgb=function(){
//  const{r,g,b}=this;
//  return `rgb(${r},${g},${b})`;
// }

// const color1=new color(23,23,45);


class  Color{
 constructor(r,g,b){
console.log(r,g,b);
 }
}
const c1= new Color(255,34,53)
