// slider-top btn
let btnPrev = document.querySelector(".slider-btn-prev");
let btnNext = document.querySelector(".slider-btn-next");
let index = 0;
let imgNumber = document.querySelectorAll(".slider-item");

function clickPrevSlider() {
  btnPrev.addEventListener("click", function () {
    prevSlider(".slider-list-top");
  });
}

function clickNextSlider() {
  btnNext.addEventListener("click", function () {
    nextSlider(".slider-list-top");
  });
}
function nextSlider(classSlider) {
  if (index < imgNumber.length) {
    index++;
    console.log(index * 100 + " " + imgNumber.length);
  } else {
    index = 1;
  }
  document.querySelector(classSlider).style = `right: ${index * 100}%`;
  const sliderBottomLi = document.querySelectorAll(".slider-bottom-item");
  console.log(sliderBottomLi[index] + " " + index);
  sliderBottomActive(sliderBottomLi[index - 1]);
}
function prevSlider(classSlider) {
  if (index > 1) {
    index--;
    console.log(index * 100 + " " + imgNumber.length);
  } else {
    index = imgNumber.length;
  }
  document.querySelector(classSlider).style = `right: ${index * 100}%`;
  const sliderBottomLi = document.querySelectorAll(".slider-bottom-item");
  sliderBottomActive(sliderBottomLi[index - 1]);
}
clickNextSlider();
clickPrevSlider();
setInterval(function(){
    nextSlider(".slider-list-top");
    const sliderBottomLi = document.querySelectorAll(".slider-bottom-item");
    sliderBottomActive(sliderBottomLi[index - 1]);
}, 3000)

// click slder-bottom-item
const sliderBottomLis = document.querySelectorAll(".slider-bottom-item");

function clickSliderBottom() {
  sliderBottomLis.forEach(function(sliderBottomLi, i) {
    i++;
    sliderBottomLi.addEventListener("click" , function() {
      sliderBottomActive(sliderBottomLi);
      document.querySelector(".slider-list-top").style = `right: ${i * 100}%`;
    })
    index = i - 1;
  })
}

function sliderBottomActive(itemActive) {
  removeSliderActive();
  itemActive.classList.add("active");
}

function removeSliderActive() {
  const sliderActive = document.querySelector(".slider-bottom-item.active");
  sliderActive.classList.remove("active");
}

clickSliderBottom();

