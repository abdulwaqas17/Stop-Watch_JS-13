const timer = document.getElementById("screen");

var hr = 0;
var min = 0;
var sec = 0;

var stopwatch = true;

// ------ start timer -----

// Ager clock stop h to clock ko on kr rha h aur timerCycle() ko call kr rha h
function startTimer() {

    if (stopwatch == true) {

        // now watch is not stop, it is moving
        stopwatch = false;

        // call the timerCycle() to start the clock
        timerCycle();

    }

}


// ------ timerCycle -----

// sari calculation chala rha h
function timerCycle() {

    // if watch is not stop
    if (stopwatch == false) {

        // convert into number, to applying mathematical operation
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);


        // sec increment
        sec = sec + 1;


        // condition
        if ( sec == 60) {

            // min increment
            min = min + 1;
            sec = 0;

        }

        // condition
        if (min == 60) {

            // hr increment
            hr = hr + 1;
            min = 0;
            sec = 0;

        }


        // for add "0" before signle figure/digit
        if (sec < 10) {

            sec = "0" + sec;
            
        }

        // for add "0" before signle figure/digit
        if (min < 10) {

            min = "0" + min;

        }

        // for add "0" before signle figure/digit
        if (hr < 10) {

            hr = "0" + hr;

        }


        // show the moving watch
        timer.innerHTML = hr + ":" + min + ":" + sec;

        // to perform in every sec
        setTimeout("timerCycle()",1000)

        
    }

}


// ------- stop timer -------

// Ager clock moving h to clock ko stop kr rha h only
function stopTimer() {
    
    // if watch is moving So, after call this function
    if (stopwatch == false) {

      // watch become stop 
      stopwatch = true;

    }

}


// ------- reset timer ------- 

//this function play 3 role  (stop the clock,showing 00:00:00 on screen and all values ko 0 kr rha h)
function resetTimer() {

    // if click on "reset" --> shown "00:00:00" in screen
    timer.innerHTML = "00:00:00";

    // watch become stop
    stopwatch = true;

    // all values will become "0"
    hr = 0;
    sec = 0;
    min = 0;

}

