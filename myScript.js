//This is a loop!
const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for (name of names){
    console.log(`Hello there ${name}`);
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
{
const main = document.querySelector('.main');
text.classList.add =("main");
}



//Change color and font size of article
{
const article = document.querySelector (".typography")
 text.classList.toggle("size"); 
}




