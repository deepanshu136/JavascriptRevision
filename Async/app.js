// console.log('hello Eveyone')
// setTimeout(()=>{
//     console.log("sending request")
// },3000)
// console.log("this is the end of file")

const colors=['red','green','blue','pink','orange','yellow','lightgreen','purple','grey'];
let delay=1000
colors.forEach(function(color){
    setTimeout(()=>{
        document.body.style.backgroundColor=color;
    },delay);
    delay+=1000
})
