//This is a loop!
const fruits = ["Apple", "Banana", "Orange", 
"Plum", "Strawberry", "Grape",];

for (fruit of fruits){
    console.log(`This is my ${fruit}`);
}

//This is a while loop

let loading = 0;

while (loading < 100){
    console.log("Website is still loading");
loading++;
}

//Change css with js_DOM element
//Change css based upon variable value
const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener('click', function(){
    text.classList.toggle("change"); 
} )


//Changes font and color of main header
const main = document.querySelector('.main');
text.classList.add =("main");







