const timer = document.getElementById("screen");

var hr = 0;
var min = 0;
var sec = 0;
var mili = 0;

var stopwatch = true;


// ------ start timer -----

// Ager clock stop h to clock ko ON kr rha h aur timerCycle() ko call kr rha h
function startTimer() {

    if (stopwatch == true) {

        // now watch is not stop, it is moving
        stopwatch = false; // false means ON kr do.

        // call the timerCycle() to start the clock | clock ko chala do
        timerCycle();

    }

      //clock ko ON bhi kia h Aur move bhi krwaya function call kr k

}

// jab start k button pr click kren gy To 2 function call hon gy ( startTimer, timerCylce).

// ------ timerCycle -----

// sari calculation chala rha h
function timerCycle() {

    // if watch is not stop | ager clock ON h
    if (stopwatch == false) {

        // convert into number, to applying mathematical operation
        mili = parseInt(mili);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);


        // sec increment
        mili = mili + 1;


        // condition
        if ( mili == 100) {

            // min increment
            sec = sec + 1;
            mili = 0;

        }

        // condition
        if ( sec == 60) {

            // min increment
            min = min + 1;
            sec = 0;
            mili = 0;

        }

        // condition
        if (min == 60) {

            // hr increment
            hr = hr + 1;
            min = 0;
            sec = 0;
            mili = 0;

        }


        // for add "0" before signle figure/digit
        if (mili < 10) {

            mili = "0" + mili;
            
        }

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
        timer.innerHTML = hr + ":" + min + ":" + sec + ":" + mili;

        // ye function ko bar bar call kr rha h bs | aur value show kr rha 10 mili sec k bad
        setTimeout("timerCycle()",10);
        
        // setInterval("timerCycle()",10)       X

        
    }

    // if (sec == 5) {

    //     stopwatch = true;
        

    // }
    

}

// setTimeout("timerCycle()",10);      X

 // to perform in every sec
// setInterval("timerCycle()",10)

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
    timer.innerHTML = "00:00:00:00";

    // watch become stop
    stopwatch = true;

    // all values will become "0"
    hr = 0;
    min = 0;
    sec = 0;
    mili = 0;


}

