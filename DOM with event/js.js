var click= document.getElementById("Click");
click.addEventListener('click', function(){
    alert("You clicked the button!");
})
click.onclick=function(){
    console.log("Your button has been clicked")
}

const btn=document.querySelector('#Click1');
btn.addEventListener('click', function(){
    alert('Clicked')
})