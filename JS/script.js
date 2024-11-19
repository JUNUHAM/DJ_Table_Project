const disc = document.querySelector(".disc");
function startSpin() {
  disc.style.animationPlayState = "running";
}
function stopSpin() {
  disc.style.animationPlayState = "paused";
}
window.addEventListener("scroll", function () {
  const scrollText = document.getElementById("scrollText");
  const scrollPosition = window.scrollY;

  // 스크롤 위치가 일정 이상일 때 텍스트 보이기
  if (scrollPosition > 10) {
    // 150px 이상 스크롤되면 텍스트 보이기
    scrollText.classList.add("visible");
  } else {
    scrollText.classList.remove("visible");
  }

  // 페이지가 스크롤될 때 화면 이동
  const main = document.querySelector(".main");
  const offset = scrollPosition * 0.5; // 스크롤에 따라 페이지가 조금씩 내려가는 효과
  main.style.transform = `translateY(${offset}px)`;
});

function getChangeDisc(event) {
  const clickedDisc = event.currentTarget.querySelector("img"); // 클릭된 앨범 디스크의 img
  const turntableDisc = document.querySelector(".disc img.center"); // 턴테이블의 디스크 이미지
  turntableDisc.src = clickedDisc.src; // 클릭된 이미지의 src를 턴테이블 디스크로 설정
}

// 각 앨범 디스크에 클릭 이벤트 연결
document.querySelectorAll(".album_disc").forEach((disc) => {
  disc.addEventListener("click", getChangeDisc);
});

document.querySelectorAll(".album").forEach((disc) => {
  disc.addEventListener("click", getChangeDisc);
});
