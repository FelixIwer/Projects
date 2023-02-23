window.onload = function() {

    // Declaration
    var elMinuteCounter = document.getElementById('minuteCounter');
    var elSecondCounter = document.getElementById('secondCounter');
    var elMSCounter = document.getElementById('msCounter');
    var elStartButton = document.getElementById('startButton');
    var elStopButton = document.getElementById('stopButton');
    var elResetButton = document.getElementById('resetButton');

    elStartButton.addEventListener("click", startTimer);
    elStopButton.addEventListener("click", stopTimer);
    elResetButton.addEventListener("click", resetTimer);

    var timeMin = 0;
    var timeSec = 0;
    var timeMS = 0;
    var workingClock;

    // Runtime Function
    function timeCounter (){
        if(timeMS == 99){
            timeSec += 1;
            if(timeSec < 10){
                elSecondCounter.innerText = "0" + timeSec;
            } else{
                elSecondCounter.innerText = timeSec;
            }
            timeMS = 0;
        }

        if(timeSec == 60){
            timeMin += 1;
            timeSec = 0;
            elSecondCounter.innerText = "00";
            if(timeMin < 10){
                elMinuteCounter.innerText = "0" + timeMin;
            } else{
                elMinuteCounter.innerText = timeMin;
            }
        }
        
        if(timeMin == 60){
            stopTimer();
        }

        timeMS+=1;

        if(timeMS < 10){
            elMSCounter.innerText = "0" + timeMS;
        } else{
            elMSCounter.innerText = timeMS;
        }
    }

    // Starting Function
    function startTimer() {
        // setInterval in ms umgerechnet, heißt eine 1 sec = 1000 ms
        workingClock = setInterval(timeCounter, 10);

        elStartButton.style.visibility = "hidden";
        elStopButton.style.visibility = "visible";
        elResetButton.style.visibility = "visible";
    }

    // Pause Function
    function stopTimer() {
        clearInterval(workingClock);

        elStartButton.style.visibility = "visible";
        elStopButton.style.visibility = "hidden";
    }

    // Reset Function
    function resetTimer(){
        clearInterval(workingClock);
        
        timeMin = 0;
        timeSec = 0;
        timeMS = 0;

        elMSCounter.innerText = "00";
        elSecondCounter.innerText = "00";
        elMinuteCounter.innerText = "00";

        elStartButton.style.visibility = "visible";
        elStopButton.style.visibility = "hidden";
        elResetButton.style.visibility = "hidden";
    }
}