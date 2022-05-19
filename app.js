q = [{
    label:'UNPARALLELED, STRESS-FREE',
    text: 'The Khushian experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.'
},
{
    label:'Unforgettable Event',
    text: 'When its showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.'
},
{
    label:'Specific Customization',
    text: 'With us, customization is guaranteed. From the very beginning, we will create a custom proposal tailored to your specific wants and needs.'
}];

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}


let slideIndex = 1;
showSlides(slideIndex);


document.getElementById("l1").textContent = q[0].label;
document.getElementById("c1").textContent = q[0].text;
document.getElementById("l2").textContent = q[1].label;
document.getElementById("c2").textContent = q[1].text;
document.getElementById("l3").textContent = q[2].label;
document.getElementById("c3").textContent = q[2].text;



function validateForm() {
    var u = document.RegisterForm.usrn;
    var p = document.RegisterForm.psw;
    var e = document.RegisterForm.email;
    if (u.value.length<=0||p.value.length<=0||e.value.length<=0) {
      alert("all Fields must be filled out");
      u.focus();
      return false;
    }
}
