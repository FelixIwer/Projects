window.onload = function () {
    
    // DOM Declaration
    const btns = document.querySelectorAll("button");
    const elNumberNameP = document.getElementById("numberCounter");
    const elInputUserNumber = document.getElementById("newNumber");
    const elBtnInputUserNumber = document.getElementById("saveNewNumber");

    // Variable Declaration
    let count = 0;
    let additionNumber = 1;

    // ForEach Function for all Buttons
    btns.forEach(function (btn) {
        btn.addEventListener("click", function(e) {
            const targetButton = e.currentTarget;
            switch (targetButton.id) {
                case "btnIncrease":
                    count = count + Number(additionNumber);
                    break;
                case "btnDecrease":
                    count = count - Number(additionNumber);
                    break;
                case "btnReset":
                    count = 0;
                    additionNumber = 1;
                    break;
            }
            
            elNumberNameP.textContent = count;
            
            if (count > 0) {
                elNumberNameP.style.color = "green";
            } else if (count < 0) {
                elNumberNameP.style.color = "red";
            } else {
                elNumberNameP.style.color = "orange";
            }
        });
    });

    elBtnInputUserNumber.addEventListener("click", function (){
        if (elInputUserNumber.value != "") {
            additionNumber = elInputUserNumber.value;
        }
        elInputUserNumber.value = "";
    });
}