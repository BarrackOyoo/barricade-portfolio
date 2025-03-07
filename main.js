import Swiper from 'swiper';

var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  });
  swiper.on('slideChange', function (s) {
    console.log(s);
  });
  function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activelink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
  }