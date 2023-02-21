window.onload = function() {
    const elColorChangeButton = document.getElementById("btnColorChange");
    const elColorResetButton = document.getElementById("btnColorReset");
    const elColorNameP = document.getElementById("colorName");

    elColorChangeButton.addEventListener("click", colorChanger);
    elColorResetButton.addEventListener("click", standardColor);

    function colorChanger(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);

        var randomColor = "rgb("+ x + "," + y + "," + z +")";

        console.log(randomColor);

        document.body.style.backgroundColor = randomColor;
        elColorNameP.textContent = "RGB ("+ x + "," + y + "," + z +")";
    }

    function standardColor(){
        document.body.style.backgroundColor = "white";
        elColorNameP.textContent = "";
    }
}