let minutes = 40
let seconds = 00
let blocks = document.querySelectorAll(".time")

blocks.innerHTML = "05"
document.getElementById("minutes").innerHTML = minutes

if (minutes < 10){
    document.getElementById("minutes").innerHTML = "0"+minutes
} else {
    document.getElementById("minutes").innerHTML = minutes
}

if (seconds < 10){
    document.getElementById("seconds").innerHTML = "0"+seconds
} else {
    document.getElementById("seconds").innerHTML = seconds
}


function counter(){
    seconds --;

    if (seconds < 0){
        seconds = 59;
        minutes --;

    }

    if (minutes < 10){
        document.getElementById("minutes").innerHTML = "0"+minutes;
    } else {
        document.getElementById("minutes").innerHTML = minutes;
    }

    if (seconds < 10){
        document.getElementById("seconds").innerHTML = "0"+seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }

    check();
    if (minutes == 0 && seconds == 0){
        console.log("FAILLE !")
    } else {
        setTimeout(counter,1000);
    }

}

function check(){
    if (minutes == 35 && seconds == 0){
        blocks[0].style.backgroundColor = "green";
        let sound = new Audio("sounds/bgm_rankup_nor.ogg")
        sound.play();
    }

    if (minutes == 30 && seconds == 0){
        blocks[1].style.backgroundColor = "green";
        let sound = new Audio("sounds/bgm_rankup_nor.ogg")
        sound.play();
    }

    if (minutes == 25 && seconds == 0){
        blocks[2].style.backgroundColor = "green";
        let sound = new Audio("sounds/bgm_rankup_nor.ogg")
        sound.play();
    }

    if (minutes == 20 && seconds == 0){
        blocks[3].style.backgroundColor = "green";
        let sound = new Audio("sounds/bgm_rankup_nor.ogg")
        sound.play();
    }

    if (minutes == 0 && seconds == 0){
        blocks[4].style.backgroundColor = "green";
        let sound = new Audio("sounds/bgm_rankup_nor.ogg")
        sound.play();
    }
}

document.addEventListener("keydown",function(e){
    if (e.code == "Enter"){
        counter();
    }
})

document.addEventListener("click",function(){
    counter();
})