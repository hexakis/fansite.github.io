// Change HTML on Click
function Spookify() {
    let button = document.getElementById("spooky");
    button.style.color = "red";




    if (navigator.userAgent.includes("Chrome")) {
        button.innerHTML = "lol who uses Chrome"
    } else {
        button.innerHTML = "x̶̞̍́̎̋̄͊̈́̐͘n̵̬̱̭͉̻̝̆̏̊z̶̡̢̳͖̣̰̗̺̭̭̾̌n̵̪͖̔̓̅̐͋͋͑̇̕z̸̨̝͖̘̲̝͂̋͆̀̆̿̒͜͜͝" 
    }






    document.body.style.backgroundColor = "#9842f5";
    
    let audio = new Audio("./assets/lavender-town.mp3");
    audio.play();

    let images = document.getElementById("main-images");
    images.style.visibility = "visible";
}

var spooky = document.querySelector("#spooky");
spooky.addEventListener("click", Spookify)