var bulb = document.querySelector("#bulb")
var on = document.querySelector("#on")
var off = document.querySelector("#off")

on.addEventListener("click",function(){
    bulb.style.backgroundColor="yellow";
})

off.addEventListener("click",function(){
    bulb.style.backgroundColor="white";
})