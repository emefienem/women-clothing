// Home page 
const images = document.querySelectorAll('.slide');
const active = document.querySelector('.active');

if(active) {
    active.style.color = 'gray'
}

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navBar = document.querySelector('.nav-bar');

  mobileMenu.addEventListener('click', function () {
      navBar.classList.toggle('active');
  });
});

//  Changing Text automatically
// Array of text to be displayed
const textArray = [
  'NOSTAGLIC FEELING',
  'ATTRACTIVE DESIGNS',
];

const textElement = document.getElementById('changing-text');
let currentTextIndex = 0;

function changeText() {
  textElement.textContent = textArray[currentTextIndex]
  currentTextIndex =  (currentTextIndex + 1) % textArray.length;
}

// Call the function to change text at a specified interval
setInterval(changeText, 2000);

// Automatically switches images
let currentImageIndex = 0;

function showImage(index) {
  // Hide all images
  images.forEach((image) => {
    image.style.display = 'none';
  });

  // Show the selected image
  images[index].style.display = 'block'
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Call the function to switch images at a specified interval
setInterval(nextImage, 3000);

// Initially show the first image
showImage(currentImageIndex);


// Manually switch between pictures
// slide 1
let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndex1-1].style.display = "block";
}
