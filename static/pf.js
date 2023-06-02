// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick =() =>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
};

// scorll active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if( top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // nav bar
    let header  = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};

// scroll reveal
ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration:2000,
     delay:200,

 });

 ScrollReveal().reveal('.home-content,.heading,', { origin: 'top' });
 ScrollReveal().reveal('.home-img,.work-box,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p,.about-content',{ origin: 'right' });



//  typing js
const typed = new Typed('.multiple-text',{
 strings : ['Frontend Developer','Backend Developer','Android Developer'],
 typeSpeed:100,
 backSpeed:100,
 backDelay:1000,
 loop:true


});


// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}