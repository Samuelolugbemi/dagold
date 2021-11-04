let slides1 = document.querySelectorAll('.slide1');
let slides2 = document.querySelectorAll('.slide2');
let slides3 = document.querySelectorAll('.slide3');

let currentSlide = 0;
let interval1 = setInterval(nextSlideForSlide1, 3000);
let interval2 = setInterval(nextSlideForSlide2, 3000);
let interval3 = setInterval(nextSlideForSlide3, 3000);

function nextSlideForSlide1(){
    slides1[currentSlide].setAttribute('class', 'slide slide1');
    currentSlide = (currentSlide + 1) % slides1.length; 
    slides1[currentSlide].setAttribute('class','slide active slide1');
}

function nextSlideForSlide2(){
    slides2[currentSlide].setAttribute('class', 'slide slide2');
    currentSlide = (currentSlide + 1) % slides2.length; 
    slides2[currentSlide].setAttribute('class','slide active slide2');
}

function nextSlideForSlide3(){
    slides3[currentSlide].setAttribute('class', 'slide slide3');
    currentSlide = (currentSlide + 1) % slides3.length; 
    slides3[currentSlide].setAttribute('class','slide active slide3');
}
