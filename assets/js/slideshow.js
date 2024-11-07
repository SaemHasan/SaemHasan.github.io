let slideIndex = 1;
let slidelength = 0;
showSlides(slideIndex);
startSlideshow();

// Next/previous controls
function plusSlides(n) {
 
  showSlides(slideIndex += n );
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  slidelength = slides.length;
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";

  
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
}

function startSlideshow(){
  setInterval(function () {
    // console.log("Index : ", slideIndex);
    // console.log("slidelength : ", slidelength);
    plusSlides(1); // Change to the next slide every 3 seconds
    if (slideIndex == slidelength){
      slideIndex = 0;
      // showSlides(slideIndex);
      // console.log("here : ", slideIndex);
    }
  }, 5000); // 3000 milliseconds = 3 seconds
}



// let slideIndex = 0;
//   let timeoutId = null;
//   const slides = document.getElementsByClassName("mySlides");
//   const dots = document.getElementsByClassName("dot");
  
//   showSlides();
//   function currentSlide(index) {
//         slideIndex = index;
//         showSlides();
//   }
//   function plusSlides(step) {
    
//     if(step < 0) {
//         slideIndex -= 2;
        
//         if(slideIndex < 0) {
//           slideIndex = slides.length - 1;
//         }
//     }
    
//     showSlides();
//   }
//   function showSlides() {
//     for(let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//       dots[i].classList.remove('active');
//     }
//     slideIndex++;
//     if(slideIndex > slides.length) {
//       slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add('active');
//       if(timeoutId) {
//         clearTimeout(timeoutId);
//       }
//     timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
//   }