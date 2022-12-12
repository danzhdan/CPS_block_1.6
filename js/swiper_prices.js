export default mobileSlider;

const slider = document.querySelector(".swiper-container_prices");

function mobileSlider() {
  if (window.innerWidth <= 768) {
    const mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

mobileSlider();
