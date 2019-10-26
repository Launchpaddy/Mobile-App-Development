// this is to make it work

var n = 45;//+localStorage.getItem("counter", n)
setTotal(n);
const display = document.querySelector(".display");

display.addEventListener("click", function(e) {
    // e.target.parent.remove child
    e.target.parentElement.removeChild(e.target);
    // update total
    n -= e.target.innerHTML * 2;
    setTotal(n);
    // console.log(e.target)
})


    // add event listeners for our buttons
document.getElementById("button_45").addEventListener("click", function(){ 
    display.innerHTML += '<div id="_45" class="weight">45</div>'; 
    n += 45 * 2;
    setTotal(n);
    console.log(n)
})

document.getElementById("button_35").addEventListener("click", function(){
    display.innerHTML += '<div id="_35" class="weight">35</div>'; 
    n += 35 * 2; 
    setTotal(n);
    console.log(n)

})

document.getElementById("button_25").addEventListener("click", function(){
    display.innerHTML += '<div id="_25" class="weight">25</div>'; 
    n += 25 * 2;
    setTotal(n);
    console.log(n);})

document.getElementById("button_10").addEventListener("click", function(){
    display.innerHTML += '<div id="_10" class="weight">10</div>'; 
    n += 10 * 2;
    setTotal(n);
    console.log(n);})   

document.getElementById("button_5").addEventListener("click", function(){
    display.innerHTML += '<div id="_5" class="weight">5</div>'; 
    n += 5 * 2;
    setTotal(n);
    console.log(n);})     


document.getElementById("reset").addEventListener("click", function(){
    display.innerHTML = '<div class="bushing"> </div><div id="bar" class="bar"></div>'; 
    n = 45;
    setTotal(n);
    })


function setTotal(total) {
    localStorage.setItem("counter", total);
    document.getElementById("total").innerHTML = `Total Weight: ${total}`;
}
