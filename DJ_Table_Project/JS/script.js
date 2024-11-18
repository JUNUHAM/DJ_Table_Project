const disc = document.querySelector(".disc");

function startSpin() {
  disc.style.animationPlayState = "running";
}

function stopSpin() {
  disc.style.animationPlayState = "paused";
}
