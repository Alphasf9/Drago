score = 0;
cross = true;

audio = new Audio("Drag/music.mp3");
audioGo = new Audio("Drag/gameOver.mp3");
setTimeout(() => {
    audio.play();
}, 100)


document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX + 112 + "px";

    }

    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dinoX - 112) + "px";

    }
}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    

    if (offsetX < 73 && offsetY < 51) {
        gameOver.innerHTML = "Game over - Reload to start again...";
        obstacle.classList.remove("obstacleAnimate");
        audioGo.play();
        setTimeout(() => {
            audioGo.pause();
            audio.pause();
        }, 1000);
    }


    else if (offsetX < 143 && cross) {
        score = score + 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.9;
            obstacle.style.animationduration = newDur + "s";
        }, 500);
    }

}, 10);


function updateScore(score) {
    scoring.innerHTML = "Your score is :" + score;
}




