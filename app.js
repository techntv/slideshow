var selectSlide = 1;
function slideShow(n){
  var i;
  var slide = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('dot');

  if (n < 1) {
    selectSlide = slide.length;
  }

  if (n > slide.length) {
    selectSlide = 1;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active','');
  }
  slide[selectSlide - 1].style.display = 'block';
  dots[selectSlide - 1].className += 'active';
}

function handleButton(n){
  slideShow(selectSlide += n);
}

function handleDots(n){
  slideShow(selectSlide = n);
}

slideShow(selectSlide);
document.getElementById('btn-prev').addEventListener('click', handleButton(-1));
document.getElementById('btn-next').addEventListener('click', handleButton(1));
