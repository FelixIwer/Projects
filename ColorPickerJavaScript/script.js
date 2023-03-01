window.onload = function() {

    // DOM Declaration
    const elColorChangeButton = document.getElementById("btnColorChange");
    const elColorResetButton = document.getElementById("btnColorReset");
    const elLastColorButton = document.getElementById("btnLastColor");
    const elSaveFavoButton = document.getElementById("btnSaveFavo");
    const elBackToFavoButton = document.getElementById("btnBackToFavo");
    const elFaveColorName = document.getElementById("favColorName");
    const elColorNameP = document.getElementById("colorName");

    // Variable Declaration
    var oldColor = "rgb(255,255,255)";
    var favColor = "rgb(255,255,255)";

    // Function for Random Color Button
    elColorChangeButton.addEventListener("click", function () {
        oldColor = document.body.style.backgroundColor;
        elLastColorButton.style.background = oldColor;

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);

        var randomColor = "rgb("+ x + "," + y + "," + z +")";

        document.body.style.backgroundColor = randomColor;
        elColorNameP.textContent = "RGB ("+ x + "," + y + "," + z +")";
    });

    // Reset Function
    elColorResetButton.addEventListener("click", function () {
        document.body.style.backgroundColor = "rgb(255,255,255)";
        elColorNameP.textContent = "RGB (255,255,255)";
        oldColor = "rgb(255,255,255)";
        elLastColorButton.style.background = "white";
    });

    // Save Last Color Function
    elLastColorButton.addEventListener("click", function () {
        elLastColorButton.style.background = oldColor;
        var numbersStr = oldColor.substring(3);
        var whiteSpaceLess = numbersStr.replace(/\s/g, '');
        var editText = "RGB " + whiteSpaceLess;
        elColorNameP.textContent = editText;
        document.body.style.backgroundColor = oldColor;
    });

    // Save Favorite Color of User (No Database involved)
    elSaveFavoButton.addEventListener("click", function () {
        console.log(document.body.style.backgroundColor);
        if (document.body.style.backgroundColor != ""){
            favColor = document.body.style.backgroundColor;
            var numbersStr2 = favColor.substring(3);
            var whiteSpaceLess2 = numbersStr2.replace(/\s/g, '');
            var editText2 = "RGB " + whiteSpaceLess2;
            elFaveColorName.textContent = editText2;
            elFaveColorName.style.visibility = "visible";
            elBackToFavoButton.style.visibility = "visible";
        }
    });

    elBackToFavoButton.addEventListener("click", function () {
        document.body.style.backgroundColor = favColor;
        var numbersStr3 = favColor.substring(3);
        var whiteSpaceLess3 = numbersStr3.replace(/\s/g, '');
        var editText3 = "RGB " + whiteSpaceLess3;
        elColorNameP.textContent = editText3;
    });
}