gsap.fromTo(".logo-name",
  {y:50, opacity:0},
  {y:0, opacity:1, duration:2, repeat:-1, yoyo:true}
);

window.addEventListener("load", () => {
  const minTime = 3; // seconds loader stays visible at minimum
  const start = performance.now();

  const showMainContent = () => {
    gsap.to(".loading-page", {
      opacity:0, duration:1.5,
      onComplete:() => {
        document.querySelector(".loading-page").style.display="none";
        document.querySelector(".main-content").classList.remove("hidden");
        gsap.from(".main-content",{opacity:0, y:50, duration:1});
      }
    });
  };

  const elapsed = (performance.now() - start) / 1000;
  if (elapsed >= minTime) {
    showMainContent();
  } else {
    setTimeout(showMainContent, (minTime - elapsed) * 1000);
  }
});