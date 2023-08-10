var sliderContent = document.getElementById('slider-content');
var currentIndex = 0;
var slideCount = sliderContent.children.length;
var slideWidth = sliderContent.clientWidth;

function Slider(next) {
  if (next) {
    currentIndex = (currentIndex + 1) % slideCount;
  } else {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  }

  var translateValue = -1 * currentIndex * slideWidth;
  sliderContent.style.transform = 'translateX(' + translateValue + 'px)';
}

window.addEventListener('resize', function() {
  slideWidth = sliderContent.clientWidth;
  var translateValue = -1 * currentIndex * slideWidth;
  sliderContent.style.transform = 'translateX(' + translateValue + 'px)';
});

Slider(true);