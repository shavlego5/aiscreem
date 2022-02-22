let rangeCount = document.getElementById("range-count");
let range = document.getElementById("range");
let leftEye = document.getElementById("left-eye");
let rightEye = document.getElementById("right-eye");
let mouth = document.getElementById("mouth");
let mouthContainer = document.getElementById("mouth-container");
let background = document.getElementById("background");
let byte = document.getElementById("byte");

function setRange() {
    let ran = range.value;

    if(ran <= 0) {
      background.style.backgroundColor = `rgba(241, 196, 15, ${-(ran * 0.33)/10})`;
    } else {
      background.style.backgroundColor = `rgba(53, 73, 243, ${(ran * 0.33)/10})`;
    }

    

    if(ran < 0) {
      rangeCount.innerHTML =  "+" + -range.value + `<sup> o </sup>` + "C";
    } else {
      rangeCount.innerHTML = -range.value + `<sup> o </sup>` + "C";
    }
    
    if(ran > 25) {
       mouth.style.height = "70px";
       mouth.style.marginTop = "-35px";   
       leftEye.style.height = "30px";
       rightEye.style.height = "30px"; 
       leftEye.style.width = "20px";
       rightEye.style.width = "20px";
    } else if (ran > 20) {
      mouth.style.width = "70px";
      mouth.style.height = "35px";
      mouth.style.marginTop = "0px";
      leftEye.style.width = "30px";
      rightEye.style.width = "30px";
      leftEye.style.height = "30px";
      rightEye.style.height = "30px";
    } else if (ran > 10) {
       mouth.style.width = "50px";
       mouth.style.height = "35px";
       mouth.style.marginTop = "0px";
       leftEye.style.height = "15px";
       rightEye.style.height = "15px";
       leftEye.style.width = "30px";
       rightEye.style.width = "30px";
    } else if (ran > 0) {
       mouth.style.width = "25px";
       mouth.style.height = "25px"; 
       mouth.style.marginTop = "0px";
    } else if (ran > -15 ) {
       mouth.style.height = "70px";
       mouth.style.width = "70px";
       mouth.style.marginTop = "0px";
       leftEye.style.width = "15px";
       rightEye.style.width = "15px";
       leftEye.style.height = "20px";
       rightEye.style.height = "20px";
    } else if (ran >-20 ) {
        mouth.style.width = "70px";
        mouth.style.height = "15px";
        mouth.style.marginTop = "0px";   
        leftEye.style.height = "10px";
        rightEye.style.height = "10px"; 
        leftEye.style.width = "20px";
        rightEye.style.width = "20px";
    }
}

