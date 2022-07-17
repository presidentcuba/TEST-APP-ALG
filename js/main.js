let value = 0;
// handle increase
function incrementValue() {
  value = parseInt(document.getElementById("number-product").value);
  value = isNaN(value) ? 0 : value;
  document.getElementById("number-product").value = ++value;
}
// handle decrease
function decrementValue() {
  value = parseInt(document.getElementById("number-product").value);
  value = isNaN(value) ? 0 : value;
  value--;
  if (value < 0) {
    value = 0;
  }
  document.getElementById("number-product").value = value;
}
// handle add cart
function addToCart() {
  document.getElementById("number-product").value = 0;
}

// handle slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image-default");
  let imageActive = document.getElementsByClassName("image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < imageActive.length; i++) {
    imageActive[i].className = imageActive[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  imageActive[slideIndex - 1].className += " active";
}
