document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;
  const maxIndex = slides.length - 3; // 3 items shown at a time

  function updateSliderPosition() {
      slider.style.transform = `translateX(-${index * (100 / 3)}%)`;
  }

  nextBtn.addEventListener("click", () => {
      if (index < maxIndex) {
          index++;
          updateSliderPosition();
      }
  });

  prevBtn.addEventListener("click", () => {
      if (index > 0) {
          index--;
          updateSliderPosition();
      }
  });
});
