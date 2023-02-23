window.onload = function() {
    const elColorChangeButton = document.getElementById("btnColorChange");
    const elColorResetButton = document.getElementById("btnColorReset");
    const elLastColorButton = document.getElementById("btnLastColor");
    const elColorNameP = document.getElementById("colorName");

    elColorChangeButton.addEventListener("click", colorChanger);
    elColorResetButton.addEventListener("click", standardColor);
    elLastColorButton.addEventListener("click", getLastColor);

    var oldRandomColor = "rgb(255,255,255)";

    function colorChanger(){
        oldRandomColor = document.body.style.backgroundColor;
        elLastColorButton.style.background = oldRandomColor;

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);

        var randomColor = "rgb("+ x + "," + y + "," + z +")";

        document.body.style.backgroundColor = randomColor;
        elColorNameP.textContent = "RGB ("+ x + "," + y + "," + z +")";
    }

    function standardColor(){
        document.body.style.backgroundColor = "white";
        elColorNameP.textContent = "RGB (255,255,255)";
        oldRandomColor = "rgb(255,255,255)";
        elLastColorButton.style.background = "white";
    }

    function getLastColor(){
        elLastColorButton.style.background = oldRandomColor;
        document.body.style.backgroundColor = oldRandomColor;
    }
}