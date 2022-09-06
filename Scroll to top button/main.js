let calcScrollValue = () => {
  let scrollProgress = document.querySelector(".progress");
  let progressValue = document.querySelector(".progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let ScrollValue = Math.round((pos * 100) / calcHeight);
  
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#03cc65 ${ScrollValue}%, #d7d7d7 ${ScrollValue}%)`;
}


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;