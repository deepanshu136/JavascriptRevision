 document.querySelector('button').addEventListener('click',function(e){
    console.log(e)
    alert("CLICK")
 })

 const input=document.querySelector('input');
 input.addEventListener('keydown',function(){
    console.log("KEYDOWN")
 })  