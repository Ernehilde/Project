const colors = ["Red", "Blue", "Green", "Yellow"];
const btn = document.getElementById("btn"),
      color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const RandomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber];
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

