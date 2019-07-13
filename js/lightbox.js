let temp = new TimelineMax({paused:true});

var exp = document.querySelector('.explore');
var close = document.querySelector('.closebutton');

temp
    .to('.image',1,{opacity:0})
    .set('.image',{css:{display:"none"}})
    .to('.text',1,{x:300})
    .set('.gallery-preview',{css:{display:"none"}})
    .set('.gallery-original',{css:{opacity:0}})
    .set('.gallery-original',{css:{display:"grid"}})
    .to('.gallery-original',1.5,{opacity:1})

exp.onclick = function() {
  temp.play();
}

close.onclick = function() {
  temp.reverse();
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
